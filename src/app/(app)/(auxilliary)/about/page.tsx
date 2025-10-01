import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '600', '500'],
});

export const metadata: Metadata = {
  title: 'About Us | MarketSpace',
  description: 'Learn about MarketSpace and our mission to empower creators',
};

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white py-28 lg:py-40 overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-96 bg-emerald-700 rounded-[3rem] opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-80 bg-green-600 rounded-[3rem] opacity-20" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-700 rounded-full opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1
            className={cn(
              'text-6xl lg:text-7xl font-bold mb-6 leading-tight',
              poppins.className
            )}
          >
            About MarketSpace
          </h1>
          <p className="text-xl lg:text-2xl text-emerald-50 leading-relaxed max-w-3xl mx-auto mb-12">
            Empowering creators and sellers to build thriving online businesses
            through our modern, secure marketplace platform.
          </p>

          {/* Startup credibility metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-emerald-300">50K+</p>
              <p className="text-emerald-100">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-300">$5M+</p>
              <p className="text-emerald-100">Sales Processed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-300">4.9/5</p>
              <p className="text-emerald-100">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className={cn(
                  'text-4xl lg:text-5xl font-bold text-gray-900 mb-6',
                  poppins.className
                )}
              >
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At MarketSpace, we believe that everyone should have the
                opportunity to turn their passion into profit. Our mission is to
                provide creators, entrepreneurs, and businesses with the tools
                they need to succeed in the digital marketplace.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;re building more than just a platform - we&apos;re
                creating a community where innovation meets opportunity, and
                where sellers can connect with buyers around the world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-emerald-600 mb-2">50K+</p>
                <p className="text-gray-700 font-medium">Active Users</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-teal-600 mb-2">100K+</p>
                <p className="text-gray-700 font-medium">Products Listed</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">$5M+</p>
                <p className="text-gray-700 font-medium">Total Sales</p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-emerald-600 mb-2">
                  4.9/5
                </p>
                <p className="text-gray-700 font-medium">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={cn(
                'text-4xl lg:text-5xl font-bold text-gray-900 mb-4',
                poppins.className
              )}
            >
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          {/* Unified icon cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Security First',
                desc: 'We prioritize the security of your data and transactions with industry-leading protection.',
                color: 'emerald',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                ),
              },
              {
                title: 'Community Driven',
                desc: 'Our platform grows with input from our community, ensuring we build features that matter to you.',
                color: 'teal',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
              },
              {
                title: 'Innovation',
                desc: 'We constantly evolve our platform with cutting-edge features to keep you ahead of the competition.',
                color: 'green',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: 'Transparency',
                desc: 'Clear pricing, honest communication, and no hidden fees. We build trust through openness.',
                color: 'emerald',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                ),
              },
              {
                title: 'Reliability',
                desc: '99.9% uptime guarantee with 24/7 support ensures your business never stops running.',
                color: 'teal',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: 'Global Reach',
                desc: 'Connect with buyers and sellers worldwide through our international platform.',
                color: 'green',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-14 h-14 bg-${val.color}-100 rounded-xl flex items-center justify-center mb-6`}
                >
                  <svg
                    className={`w-7 h-7 text-${val.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {val.icon}
                  </svg>
                </div>
                <h3
                  className={cn(
                    'text-2xl font-bold text-gray-900 mb-3',
                    poppins.className
                  )}
                >
                  {val.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2
            className={cn(
              'text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center',
              poppins.className
            )}
          >
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              MarketSpace was founded in 2020 with a simple idea: make it easier
              for anyone to start and grow an online business. We saw talented
              creators struggling with complicated platforms, high fees, and
              limited support.
            </p>
            <p>
              What started as a small project has grown into a thriving
              marketplace serving over 50,000 users worldwide. We&apos;ve
              processed millions in transactions and helped countless
              entrepreneurs turn their dreams into reality.
            </p>
            <p>
              Today, we continue to innovate and improve, guided by feedback
              from our amazing community. Our team is dedicated to providing the
              best possible experience for both buyers and sellers, ensuring
              that MarketSpace remains the platform of choice for online
              commerce.
            </p>
            <p>
              We&apos;re just getting started, and we&apos;re excited to have
              you join us on this journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className={cn(
              'text-4xl lg:text-5xl font-bold mb-6',
              poppins.className
            )}
          >
            Ready to start your journey?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join thousands of successful sellers on MarketSpace today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
