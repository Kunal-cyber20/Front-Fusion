import React from 'react'

const Navbar = () => {
    return (
        <>
        {/* ========== HEADER ========== */}
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-black  backdrop-blur-md border-b border-violet-500">
          <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-x-1">
              <a
                className="flex-none font-semibold text-3xl text-white focus:outline-hidden focus:opacity-80"
                href="https://front-fusion.vercel.app/"
                aria-label=""
              >
                Front-Flow A.I
              </a>
              {/* Collapse Button */}
              <button
                type="button"
                className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-700 text-gray-200 hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-header-base-collapse"
                aria-expanded="false"
                aria-controls="hs-header-base"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-header-base"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block shrink-0 hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
              {/* End Collapse Button */}
            </div>
            {/* Collapse */}
            <div
              id="hs-header-base"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-header-base-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                  <div className="grow">
                    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                      
                      {/* Dropdown */}
                      <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false]">
                        <button
                          id="hs-header-base-dropdown"
                          type="button"
                          className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-200 hover:bg-violet-500 rounded-lg focus:outline-hidden focus:bg-violet-500"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 10 2.5-2.5L3 5" />
                            <path d="m3 19 2.5-2.5L3 14" />
                            <path d="M10 6h11" />
                            <path d="M10 12h11" />
                            <path d="M10 18h11" />
                          </svg>
                          Dropdown
                          <svg
                            className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-black/90 md:backdrop-blur-lg md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-violet-500"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hs-header-base-dropdown"
                        >
                          <div className="py-1 md:px-1 space-y-0.5">
                            <a
                              className="p-2 md:px-3 flex items-center text-sm text-gray-200 rounded-lg hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500"
                              href="/about"
                            >
                              About
                            </a>
                            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                              <button
                                id="hs-header-base-dropdown-sub"
                                type="button"
                                className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-200 rounded-lg p-2 md:px-3 hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500"
                              >
                                Sub Menu
                                <svg
                                  className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                              <div
                                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:mx-2.5! md:top-0 md:end-full ps-7 md:ps-0 md:bg-black/90 md:rounded-lg md:shadow-md before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-violet-500"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="hs-header-base-dropdown-sub"
                              >
                                <div className="p-1 space-y-1">
                                  <a
                                    className="p-2 md:px-3 flex items-center text-sm text-gray-200 rounded-lg hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500"
                                    href="/about"
                                  >
                                    About
                                  </a>
                                  <a
                                    className="p-2 md:px-3 flex items-center text-sm text-gray-200 rounded-lg hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500"
                                    href="#"
                                  >
                                    Downloads
                                  </a>
                                  <a
                                    className="p-2 md:px-3 flex items-center text-sm text-gray-200 rounded-lg hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500"
                                    href="#"
                                  >
                                    Team Account
                                  </a>
                                </div>
                              </div>
                            </div>
                            <a
                              className="p-2 md:px-3 flex items-center text-sm text-gray-200 rounded-lg hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500"
                              href="#"
                            >
                              Downloads
                            </a>
                            <a
                              className="p-2 md:px-3 flex items-center text-sm text-gray-200 rounded-lg hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500"
                              href="#"
                            >
                              Team Account
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Dropdown */}
                      <a
                        className="p-2 flex items-center text-sm text-gray-200 hover:bg-violet-500 rounded-lg focus:outline-hidden "
                        href="/about"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                        About Us
                      </a>
                      <a
                        className="p-2 flex items-center text-sm text-gray-200 hover:bg-violet-500 rounded-lg focus:outline-hidden focus:bg-violet-500"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block "
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                        <span className="sr-only">Notifications</span>
                      </a>
                      <a
                        className="p-2 flex items-center text-sm text-gray-200 hover:bg-violet-500 rounded-lg focus:outline-hidden focus:bg-violet-500"
                        href="/contact"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                          <path d="M18 14h-8" />
                          <path d="M15 18h-5" />
                          <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="my-2 md:my-0 md:mx-2">
                    <div className="w-full h-px md:w-px md:h-4 bg-violet-500" />
                  </div>
                  {/* Button Group */}
                  <div className="flex flex-wrap items-center gap-x-1.5">
                    <a
                      className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-700 bg-transparent text-gray-200 shadow-2xs hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-violet-500"
                      href="/login"
                    >
                      Log in
                    </a>
                    <a
                      className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="/signup"
                    >
                      Sign Up
                    </a>
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
            </div>
            {/* End Collapse */}
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </>
    )
}

export default Navbar;