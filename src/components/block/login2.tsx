import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login2 = () => {
  return (
    <section className="relative py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6">
            <div className="mb-6 flex flex-col items-center text-center">
              <span className="mb-12 flex items-center gap-4">
                <img
                  src="https://www.shadcnblocks.com/images/block/block-1.svg"
                  alt="logo"
                  className="h-7"
                />
                <p className="text-xl font-bold">Shadcn Blocks</p>
              </span>
              <p className="mb-2 text-2xl font-bold">Log in to your account</p>
              <p className="text-muted-foreground">
                Welcome back! Please enter your details.
              </p>
            </div>
            <div>
              <div className="grid gap-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="border-b-0"
                  />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <Button type="submit" className="mt-2 w-full">
                  Sign in
                </Button>

                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </div>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don&apos;t have an account?</p>
                <a href="#" className="font-medium text-primary">
                  Log in
                </a>
              </div>
              <a
                href="#"
                className="mt-3 flex justify-center text-sm font-medium"
              >
                Forgot password
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login2;
