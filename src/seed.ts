import 'dotenv/config';
import { getPayload } from 'payload';
import config from '@payload-config';

import { stripe } from './lib/stripe';

const seed = async () => {
  try {
    console.log('🌱 Starting database seed...');

    const payload = await getPayload({ config });

    console.log('📦 Creating admin Stripe account...');
    const adminAccount = await stripe.accounts.create({
      type: 'express',
    });

    console.log('🏢 Creating admin tenant...');
    const adminTenant = await payload.create({
      collection: 'tenants',
      data: {
        name: 'admin',
        slug: 'admin',
        stripeAccountId: adminAccount.id,
      },
    });

    console.log('👤 Creating admin user...');
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@demo.com',
        password: 'demo',
        roles: ['super-admin'],
        username: 'admin',
        tenants: [
          {
            tenant: adminTenant.id,
          },
        ],
      },
    });

    console.log(`✅ Seeding completed successfully!`);
    console.log(`   - Admin user: admin@demo.com / demo`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  }
};

// Execute the seed function
seed();
