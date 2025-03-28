import React from 'react';
import Particles from '@/components/Particles';

const Login = () => {
  return (
    <div className='relative h-screen bg-black'>
      <div className="absolute top-0 left-0 w-full h-screen">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={20000}
          particleSpread={40}
          speed={0.06}
          particleBaseSize={60}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      <div className="flex items-center justify-center h-full">
        <div className="bg-white border w-full max-w-md border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Log in
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Don't have an account yet?
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                  href="../examples/html/signup.html"
                >
                  Sign up here
                </a>
              </p>
            </div>
            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <label
                        htmlFor="password"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Password
                      </label>
                      <a
                        className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                        href="../examples/html/recover-account.html"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        aria-describedby="password-error"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label htmlFor="remember-me" className="text-sm dark:text-white">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;