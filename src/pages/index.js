
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//componentdidmount 

import About from './about_me'
import Projects from './projects'
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-nav">
      <nav className="nav mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8 nav-bar" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">

          <a href="#about" className="leading-6 nav-bar-elem">
            <div className="pink inline-block"> 01 </div> About 
          </a>
          
          <a href="#project" className="leading-6 nav-bar-elem">
            <div className="pink inline-block"> 02 </div> Projects
          </a>
          <a href="https://drive.google.com/file/d/1WIVE6B3MHMhiQRDUkapcB5oYeaCYQmxz/view?usp=share_link" className="leading-6 nav-bar-elem">
            <div className="pink inline-block"> 03 </div> Resume
          </a>
          
        </Popover.Group>

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
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
      <div className='section'>
      <div className="flex justify-start items-center h-screen" style={{ marginLeft:'10%'}}>
      <div className="w-1/2 h-2/3">
          <div className="pink subtext" style={{ marginBottom: "1%" }}>
            Hello 👋 my name is
          </div>
          <div
            className="text-white main-text"
            style={{ marginBottom: "1%", marginLeft: "-0.5%" }}
          >
            Parth Ahuja.
          </div>
          <div className="subtext-2">
            Welcome to my personal website! I am a developer with a focus on Back-End/DevOps. I am passionate about building reliable and scalable software systems. On this website, you can learn more about my skills, experience, and projects, and get in touch to discuss potential collaborations.
          </div>
          <button
            className="px-4 py-2 border border-#02dbb7 text-#02dbb7 rounded-md hover:bg-#02dbb7 hover:text-white"
            style={{ marginTop: "4%" }}
            onClick={() => window.location = 'mailto:parthahuj@gmail.com'}
          >
            Contact Me
          </button>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </div>
    </div>
    </div>
    <div className="fixed bottom-0 right-0 flex flex-col p-4 space-y-3">
      <a href="https://www.linkedin.com/in/parthahuja1/" className="text-sm font-semibold leading-6 text-gray-900 flex items-center" style={{ marginBottom: '10%' }}>
        <img src="/linkedin.svg" className="h-8 w-8 svg mr-2" aria-hidden="true" />
      </a>
      <a href="https://github.com/parthahuja89/" className="text-sm font-semibold leading-6 text-gray-900 flex items-center" style={{ marginBottom: '10%' }}>
        <img src="/github.svg" className="h-8 w-8 svg mr-2" aria-hidden="true" />
      </a>
      <a href="https://www.instagram.com/theoldclassified/" className="text-sm font-semibold leading-6 text-gray-900 flex items-center" style={{ marginBottom: '10%' }}>
        <img src="/insta.svg" className="h-8 w-8 svg mr-2" aria-hidden="true" />
      </a>
      <div className='items-center' style={{ height: '60px', borderLeft: '1px solid #999', marginBottom: '10%', marginLeft: '40%'}}></div>
    </div>
    
    <div className='section flex items-center justify-center' id="about">
      <About style={{marginBottom:"10%"}}/>
    </div>
    <div className='section flex items-center justify-center' id="project">
      <Projects style={{marginBottom:"10%"}}/>
    </div>
    </header>
  )
}
