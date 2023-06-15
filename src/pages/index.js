import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import VanillaTilt from 'vanilla-tilt';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const options = {
    scale: 1.05,
    speed: 500,
    max: 10
  };
  return (
    <div>
      <header className="bg-nav">
        <nav
          className="nav mx-auto flex max-w-7xl items-center justify-end p-6 nav-bar"
          aria-label="Global"
        >
          
          <Popover.Group className="flex gap-x-12">
            <a
              href="https://www.linkedin.com/in/parthahuja1/"
              className="leading-6 nav-bar-elem"
            >
              <div className="pink inline-block"> 01 </div> LinkedIn
            </a>

            <a
              href="https://github.com/parthahuja89/"
              className="leading-6 nav-bar-elem"
            >
              <div className="pink inline-block"> 02 </div> GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1WIVE6B3MHMhiQRDUkapcB5oYeaCYQmxz/view?usp=share_link"
              className="leading-6 nav-bar-elem"
            >
              <div className="pink inline-block"> 03 </div> Resume
            </a>
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Main Page
                  </a>
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Me
                  </a>
                  <a
                    href="#project"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1WIVE6B3MHMhiQRDUkapcB5oYeaCYQmxz/view?usp=share_link"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="section">
        <div className="flex-container items-center h-screen">
          <Tilt options={options} className="card rounded overflow-hidden shadow-lg">
            <div className="text-box">
              <div className="pink mono subtext" style={{ marginBottom: "1%" }}>
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
                  Welcome to my personal website! On this website, you can learn
                  more about my skills, experience, and projects, and get in
                  touch to discuss potential collaborations.
                </div>
              </div>
              <div className="line"></div>
              <div className="pink mono subtext" style={{ marginTop: "2%" }}>
                Work experience <br />
                <div className="work-subtext">
                  LabCorp - Software Engineer Intern <br />
                  (May 2023 - Aug 2023)
                </div>
                <div className="work-subtext">
                  Citrix - Software Engineer Intern <br />
                  (May 2020 - Aug 2020)
                </div>
                <div className="work-subtext">
                  Willis Towers Watson - Software Engineer Intern <br />
                  (Aug 2019 - May 2020)
                </div>
              </div>
              <div className="line"></div>
              <a href="mailto:parthahuj@gmail.com" class="relative inline-block text-lg group" style={{marginTop: "5%"}}>
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Let's Talk</span>
              </span>
              <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
