import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiTwitter, FiGithub, FiMail} from 'react-icons/fi';
import {motion} from 'framer-motion'

const easing = [.6, -.05, .01, .9]

const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0
  },

  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: .8,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Main = () => {
  return (
    <motion.div initial='initial' animate='animate'>
      <div id='home' className='font-roboto selection:text-[#11173a] selection:bg-[#F0FFFF] selection:bg-opacity-50 w-full h-screen text-center'>
        <div className='max-w-[1440px] w-full h-full mx-auto p-12 flex justify-center items-center'>
          <motion.div variants={stagger}>
            <div>
              <motion.div variants={fadeInUp}>
                <h1 className='font-medium py-3 text-[#F0FFFF]'>
                  Redefine Learning
                </h1>
                <h2 className='font-light py-5 max-w-[65%] m-auto text-[#F0FFFF]'>
                  Looking for help with classes? Verbose has your back. Sign up to learn ASAP!
                </h2>

                <div className='max-w-[200px] m-auto -mb-24 py-4 select-none'>
                  <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
                    <Link href=''>
                      <div className='font-medium text-[#F0FFFF] cursor-pointer text-sm uppercase px-6 p-3 rounded-full bg-[#BBEBE9] bg-opacity-10 hover:bg-opacity-20 ease-in duration-100'>
                        <h3>I Want to Learn!</h3>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Main
