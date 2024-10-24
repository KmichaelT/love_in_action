import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Signup3 = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="relative flex flex-col items-center overflow-hidden pb-6 pt-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="absolute top-10 -z-10 h-full w-[1250px] [mask-image:radial-gradient(circle,red,transparent,transparent,transparent)]"
            >
              <defs>
                <pattern
                  id="innerGrid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    className="stroke-muted-foreground/70"
                    strokeWidth="0.5"
                  />
                </pattern>
                <pattern
                  id="grid"
                  width="160"
                  height="160"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="160" height="160" fill="url(#innerGrid)" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#grid)" />
            </svg>
            <img
              src="https://www.shadcnblocks.com/images/block/block-1.svg"
              alt="logo"
              className="mb-7 h-10 w-auto"
            />
            <p className="mb-2 text-2xl font-bold">Create an account</p>
            <p className="text-muted-foreground">
              Start your 30-day free trial.
            </p>
          </div>
          <div className="z-10 mx-auto w-full max-w-sm rounded-md bg-background p-6 shadow">
            <div>
              <div className="grid gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" placeholder="Enter your email" required />
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
                  <p className="mt-1 text-sm text-muted-foreground">
                    Must be at least 8 characters.
                  </p>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-3 flex justify-center gap-1 text-sm text-muted-foreground">
            <p>Already have an account?</p>
            <a href="#" className="font-medium text-primary">
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup3;
