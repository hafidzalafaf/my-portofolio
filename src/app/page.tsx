'use client'

import HeroLottie from '@/components/HeroLottie';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="bg-transparent z-50 fixed left-0 top-0 right-0 ">
        <div className="max-w-7xl w-full mx-auto px-4 flex justify-between items-center py-4 ">
          <div className="relative flex gap-2 items-center">
            <Image alt='logo image' src={'/assets/icons/hafidz-logo.png'} width={36} height={36} />
            {/* <h3 className='text-white font-semibold text-xl'>HafidzAL</h3> */}
          </div>
          <div className="flex gap-12 bg-gradientStart bg-opacity-25 rounded-full px-6 py-4">
            <a className="text-gray-300 text-sm hover:text-white transition-all ease-in-out duration-200" href="#about">
              About Me
            </a>
            <a className="text-gray-300 text-sm hover:text-white transition-all ease-in-out duration-200" href="">
              Projects
            </a>
            <a className="text-gray-300 text-sm hover:text-white transition-all ease-in-out duration-200" href="">
              Experiences
            </a>
            <a className="text-gray-300 text-sm hover:text-white transition-all ease-in-out duration-200" href="">
              Testimonial
            </a>
            <a className="text-gray-300 text-sm hover:text-white transition-all ease-in-out duration-200" href="">
              FAQ
            </a>
          </div>
          <button className="border-white border rounded-full px-6 py-3 text-white text-sm ">
            Get In Touch
          </button>
        </div>

      </header>

      <main className="relative bg-background min-h-screen z-0">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-hero-radial z-0">
        </div>
        <section className='max-w-7xl w-full mx-auto px-4 pt-24 relative z-10'>
          <div className="pt-32 flex justify-center items-center flex-col gap-4">
            <h1 className='text-white font-bold text-6xl'>Frontend Developer</h1>
            <p className='text-gray-200 text-sm'> {`{React, Typescript, Javascript, Next.js, Vite, Rest API, Tailwind CSS, Bootstrap CSS, Sass, Git, Github, ... }`}</p>
            <div className="flex gap-4 items-center mt-2">
              <button className="bg-primary rounded-full px-10 py-3 text-white text-sm ">
                Contact Me
              </button>
              <button className="border-white border rounded-full px-10 py-3 text-white text-sm ">
                Download CV
              </button>
            </div>
            <HeroLottie />
          </div>
        </section>
      </main>
    </>
  );
}
