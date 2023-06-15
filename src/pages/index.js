import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import VanillaTilt from "vanilla-tilt";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const options = {
    scale: 1.05,
    speed: 500,
    max: 10,
  };
  return (
    <div>
      <header className="bg-nav">
        <div className="section">
          <div className="flex-container items-center h-screen">
            <Tilt
              options={options}
              className="card rounded overflow-hidden shadow-lg"
            >
              <div className="text-box">
                <div
                  className="pink mono subtext"
                  style={{ marginBottom: "1%" }}
                >
                  Hello 👋 my name is
                </div>
                <div
                  className="text-white main-text"
                  style={{ marginBottom: "1%" }}
                >
                  Parth Ahuja.
                </div>
                <div className="sub-flex-box">
                  <div className="subtext-2">
                    Welcome to my personal website! I&apos;m a graduate student at
                    Purdue University studying Computer Science. I like working
                    on web-apps and DevOps systems. On this website, you can
                    find my social links, resume, and contact information.
                  </div>
                </div>
                <a
                  href="mailto:parthahuj@gmail.com"
                  class="relative inline-block text-lg group"
                  style={{ marginTop: "5%" }}
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Say Hello!</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
                <div className="line"></div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
              </div>
              <div className="social-container socials">
                <button
                  type="button"
                  class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/parthahuja1/"
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span style={{ marginLeft: "5%" }}>LinkedIn</span>
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                  onClick={() => {
                    window.open(
                      "https://github.com/parthahuja89/"
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span style={{ marginLeft: "5%" }}>GitHub</span>
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1WIVE6B3MHMhiQRDUkapcB5oYeaCYQmxz/view"
                    );
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M17.843 1c2.159 0 3.912 1.753 3.912 3.912 0 .395-.053 1.704-1.195 2.813l-8.465 8.465c-.596.671-2.12 1.279-3.299.099-1.178-1.177-.586-2.685.088-3.29l4.409-4.409.707.707-3.164 3.163.014.003-1.411 1.413.004.003c-.97 1.151.618 2.93 1.977 1.572l8.383-8.384c.656-.652.94-1.393.94-2.155 0-1.601-1.299-2.9-2.9-2.9-.783 0-1.495.311-2.018.818l-.003-.003c-.573.573-11.502 11.494-11.534 11.527l-.002-.002c-.795.812-1.286 1.923-1.286 3.148 0 2.483 2.017 4.5 4.5 4.5.65 0 1.84.007 3.52-1.668l10.273-10.267.707.707-10.477 10.477c-1.004 1.077-2.435 1.751-4.023 1.751-3.035 0-5.5-2.465-5.5-5.5 0-1.577.666-3 1.731-4.004 10.668-10.667 10.835-10.839 11.295-11.297.277-.278 1.215-1.199 2.817-1.199" />
                  </svg>

                  <span style={{ marginLeft: "5%" }}>Resume</span>
                </button>
              </div>
            </Tilt>
          </div>
        </div>
      </header>
    </div>
  );
}
