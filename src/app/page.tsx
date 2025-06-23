'use client'

import HeroLottie from '@/components/HeroLottie';
import TextTypeAnimation from '@/components/TextTypeAnimation';
import { motion } from 'framer-motion';
import Image from 'next/image'

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
            {/* <h3 className='text-white font-semibold text-xl'>HafidzAL</h3> */}
          </div>
          <motion.div
            initial={{ opacity: 1, width: 40, overflow: 'hidden' }}
            animate={{ opacity: 1, width: 'max-content', overflow: 'auto' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex gap-12 bg-gradientStart bg-opacity-25 rounded-full px-6 py-4">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="border-white border rounded-full px-6 py-3 text-white text-sm "
          >
            Get In Touch
          </motion.button>
        </div>

      </header>

      <main className="relative bg-background min-h-screen z-0">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-hero-radial z-0">
        </div>
        <section className='max-w-7xl w-full mx-auto px-4 pt-24 relative z-10'>
          <div className="pt-20 flex justify-center items-center flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              className='text-white font-bold text-6xl'
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
                Download CV
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
        </section>
        <section className='min-h-screen'>

        </section>
      </main>
    </>
  );
}
