'use client';

import z from 'zod';
import Link from 'next/link';
import { toast } from 'sonner';
import { Poppins } from 'next/font/google';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { cn } from '@/lib/utils';
import { useTRPC } from '@/trpc/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { registerSchema } from '../../schemas';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '600', '500'],
});

export const SignUpView = () => {
  const router = useRouter();

  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const register = useMutation(
    trpc.auth.register.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.auth.session.queryFilter());
        router.push('/');
      },
    })
  );

  const form = useForm<z.infer<typeof registerSchema>>({
    mode: 'all',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    register.mutate(values);
  };

  const username = form.watch('username');
  const usernameErrors = form.formState.errors.username;

  const showPreview = username && !usernameErrors;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Panel - Form */}
      <div className="relative bg-white flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10">
            <Link href="/" className="inline-block mb-12">
              <span
                className={cn(
                  'text-2xl font-bold text-gray-900',
                  poppins.className
                )}
              >
                MarketSpace
              </span>
            </Link>
            <h1
              className={cn(
                'text-3xl font-semibold text-gray-900 mb-2',
                poppins.className
              )}
            >
              Create your account
            </h1>
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Social Login Buttons */}
          {/* <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full h-12 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </Button>
          </div> */}

          {/* Divider */}
          {/* <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                Or with email and password
              </span>
            </div>
          </div> */}

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder=""
                        className="h-11 px-4 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-md transition-all"
                      />
                    </FormControl>
                    <FormDescription
                      className={cn(
                        'hidden text-sm text-gray-600',
                        showPreview && 'block'
                      )}
                    >
                      Your store will be available at{' '}
                      <strong className="text-emerald-600">{username}</strong>
                      .shop.com
                    </FormDescription>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder=""
                        className="h-11 px-4 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-md transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder=""
                        className="h-11 px-4 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-md transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <Button
                disabled={register.isPending}
                type="submit"
                className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors"
              >
                {register.isPending ? 'Creating account...' : 'Create account'}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="relative hidden lg:block bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 overflow-hidden">
        {/* Abstract Shapes - MongoDB inspired */}
        <div className="absolute inset-0">
          {/* Large rounded rectangles */}
          <div className="absolute top-0 right-0 w-80 h-96 bg-emerald-700 rounded-[3rem] opacity-40" />
          <div className="absolute top-32 right-24 w-96 h-80 bg-green-600 rounded-[3rem] opacity-50" />
          <div className="absolute bottom-0 right-0 w-72 h-[28rem] bg-emerald-800 rounded-[3rem] opacity-30" />
          <div className="absolute bottom-20 right-32 w-80 h-64 bg-teal-700 rounded-[3rem] opacity-40" />

          {/* Medium rounded rectangles */}
          <div className="absolute top-48 right-12 w-48 h-56 bg-green-500 rounded-[2rem] opacity-60" />
          <div className="absolute bottom-48 right-48 w-56 h-48 bg-emerald-600 rounded-[2rem] opacity-50" />

          {/* Small circle accent */}
          <div className="absolute bottom-32 left-32 w-32 h-32 bg-green-700 rounded-full opacity-40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-start justify-center p-16 text-white max-w-xl">
          <h2
            className={cn(
              'text-4xl lg:text-5xl font-bold mb-6 leading-tight',
              poppins.className
            )}
          >
            Join over 1,580 creators earning money
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Start your journey today and build your dream marketplace store with
            our powerful platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-2xl font-bold">1,580+</p>
              <p className="text-sm text-emerald-100">Active Creators</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-2xl font-bold">$2M+</p>
              <p className="text-sm text-emerald-100">Total Earnings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-emerald-100">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
