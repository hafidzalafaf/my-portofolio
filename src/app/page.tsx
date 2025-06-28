'use client'

import HeroLottie from '@/components/HeroLottie';
import TextTypeAnimation from '@/components/TextTypeAnimation';
import { motion } from 'framer-motion';
import Image from 'next/image'
import animationData from "@/assets/animations/hand-wave.json";
import ChevronDown from "@/assets/animations/chevron-down.json";
import Lottie from 'lottie-react';

export default function Home() {


  const ToolsTexts = [
    'React.', 1000,
    'Typescript.', 1000,
    'Javascript.', 1000,
    'Next.js.', 1000,
    'Vite.', 1000,
    'Web3.', 1000,
    'Rest API.', 1000,
    'Tailwind CSS.', 1000,
    'Bootstrap CSS.', 1000,
    'Sass.', 1000,
    'Git.', 1000,
    'Github.', 1000,
    'Ethers.', 1000,
    'Viem.', 1000,
    'Wagmi.', 1000,
    'Redux.', 1000,
    'Websocket.', 1000,
  ]

  return (
    <>
      {/* HEADER SECTION */}
      <header className="bg-transparent z-50 fixed left-0 top-0 right-0 ">
        <div className="max-w-7xl w-full mx-auto px-4 flex justify-between items-center py-4 ">
          <div className="relative flex gap-2 items-center w-">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", }}

            >
              <Image alt='logo image' src={'/assets/icons/hafidz-logo.png'} width={36} height={36} />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 1, width: 40, overflow: 'hidden' }}
            animate={{ opacity: 1, width: 'max-content', overflow: 'auto' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex gap-12 bg-gradientStart bg-opacity-25 backdrop-blur-xl rounded-full px-6 py-4">
              {['About Me', 'Projects', 'Experiences', 'Testimonial', 'FAQ'].map((text, index) => (
                <motion.a
                  key={text}
                  href={`#${text.toLowerCase().replace(/\s+/g, '')}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200 text-nowrap"
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="border-gray-400 border rounded-full px-6 py-3 text-gray-400 hover:text-white hover:border-white transition-all ease-in-out duration-300 text-sm "
          >
            Get In Touch
          </motion.button>
        </div>

      </header>

      {/* MAIN CONTENT */}
      <main className="relative bg-background min-h-screen z-0">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-hero-radial z-0">
        </div>
        <section className='max-w-7xl w-full mx-auto px-4 pt-24 relative z-10'>
          <div className="pt-20 flex justify-center items-center flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              className="flex items-center gap-1 bg-white px-4 py-1 rounded-full"
            >
              <motion.p initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }} className='text-background text-sm text-nowrap'> {`Hi, I'm Hafidz`}
              </motion.p>
              <motion.div initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 1.3 }} className="size-7">
                <Lottie animationData={animationData} loop autoplay />
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              className='text-white font-bold text-7xl'
            >
              Frontend Developer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
              className="flex items-center gap-1 "
            >
              <p className='text-gray-200 text-sm'> I build fast, scalable, and intuitive web apps using
              </p>
              <TextTypeAnimation teks={ToolsTexts} />
            </motion.div>
            <div className="flex gap-4 items-center mt-2">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
                className="bg-primary rounded-full px-10 py-3 text-white text-sm "
              >
                Contact Me
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                className="border-white border rounded-full px-10 py-3 text-white text-sm "
              >
                Latest Project
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
              className="flex justify-center"
            >
              <HeroLottie />
            </motion.div>
          </div>
          <div className="flex justify-start absolute left-0 top-[95vh] gap-1 cursor-pointer">
            <p className='text-white text-sm '>Scroll Down</p>
            <div className="size-6">
              <Lottie animationData={ChevronDown} loop autoplay />
            </div>
          </div>
          {/* <div className="flex justify-start absolute right-0 flex-col bottom-[20%] gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2 }} className=" flex justify-between gap-2">
              <p className='text-gray-400 text-sm'>Years Of <br /> Experiences</p>
              <h3 className='text-4xl font-bold text-gray-200 flex items-start'>3 <span className='text-gray-200 text-4xl'>+</span></h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.2 }} className=" flex justify-between gap-2">
              <p className='text-gray-400 text-sm'>Complete <br /> Project</p>
              <h3 className='text-4xl font-bold text-gray-200 flex items-start'>30 <span className='text-gray-200 text-4xl'>+</span></h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.4 }} className=" flex justify-between gap-2">
              <p className='text-gray-400 text-sm'>Clients </p>
              <h3 className='text-4xl font-bold text-gray-200 flex items-start'>15 <span className='text-gray-200 text-4xl'>+</span></h3>
            </motion.div>
          </div> */}
        </section>
        <section className='max-w-7xl w-full mx-auto px-4 pt-6 pb-10 relative z-10 flex justify-between gap-8 items-center'>
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} className="flex flex-col gap-4">
            <h6 className='text-white font-semibold text-lg'>User Centric Thinking</h6>
            <p className='text-gray-400 text-sm'>Design and build interfaces that are intuitive, accessible and enjoyable to use.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }} className="bg-gray-500 h-20 w-[1px] rounded-full"></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }} className="flex flex-col gap-4">
            <h6 className='text-white font-semibold text-lg'>Atention to Detail</h6>
            <p className='text-gray-400 text-sm'>Small design inconsistencies or broken UI interactions can negatively affect user experience.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }} className="bg-gray-500 h-20 w-[1px] rounded-full"></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }} className="flex flex-col gap-4">
            <h6 className='text-white font-semibold text-lg'>Collaboration</h6>
            <p className='text-gray-400 text-sm'>Work effectively with designers, backend developers, and product managers to bring ideas to life.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }} className="bg-gray-500 h-20 w-[1px] rounded-full"></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }} className="flex flex-col gap-4">
            <h6 className='text-white font-semibold text-lg'>Problem Solving</h6>
            <p className='text-gray-400 text-sm'>Analyze issues logically, debug efficiently, and create effective solutions.</p>
          </motion.div>
        </section>
        <section className='min-h-screen'>

        </section>
      </main>
    </>
  );
}
