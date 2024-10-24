import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="relative overflow-hidden py-10">
            <div className="m-auto flex size-full max-w-md flex-col justify-center gap-4 p-6">
              <div className="mb-6 flex flex-col items-center text-center">
                <img
                  src="https://www.shadcnblocks.com/images/block/block-1.svg"
                  alt="logo"
                  className="mb-7 h-10 w-auto"
                />
                <p className="mb-2 text-2xl font-bold">Welcome back</p>
                <p className="text-muted-foreground">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <div className="w-full rounded-md bg-background">
                <div>
                  <div className="grid gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          className="border-muted-foreground"
                        />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary">
                        Forgot password
                      </a>
                    </div>
                    <Button type="submit" className="mt-2 w-full">
                      Sign in
                    </Button>
                    <Button variant="outline" className="w-full">
                      <FcGoogle className="mr-2 size-5" />
                      Sign up with Google
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-3 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don&apos; have an account?</p>
                <a href="#" className="font-medium text-primary">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            className="hidden h-full max-h-screen object-cover lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Login5;
