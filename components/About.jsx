import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='font-roboto selection:bg-[#F0FFFF] selection:text-[#00001F]  w-full md:h-screen flex bg-[#00001F] text-[#F0FFFF] text-center'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-8'>
        <h1 className='font-regular py-8 text-4xl'>
          What we bring to the tablet
        </h1>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-10 pt-4 text-center'>

          <motion.div whileHover={{scale: 1.05}}>
            <div className='p-6 rounded-xl bg-[#F0FFFF] bg-opacity-10 hover:bg-opacity-20'>
              <div className='justify-center items-center'>
                <div className='flex flex-col px-8'>
                  <p className='text-xl pt-4 pb-2 select-none'>- Self-paced Learning -</p>
                  <p className='font-light text-md py-4'>
                    You'll be able to move at your own speed. Whether you grind multiple chapters of content
                    during all-nighters or space it out during the day, we have it ready at your disposal.
                    The ball is in your park.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{scale: 1.05}}>
            <div className='p-6 rounded-xl bg-[#F0FFFF] bg-opacity-10 hover:bg-opacity-20'>
              <div className='justify-center items-center'>
                <div className='flex flex-col px-8'>
                  <p className='text-xl pt-4 pb-2 select-none'>- Inclusive Community -</p>
                  <p className='font-light text-md py-4'>
                    We know how hard COVID hit students like us since 2020. That's why our platform ensures
                    a welcoming and engaging community solely for learning. In other words: you're not alone!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{scale: 1.05}}>
            <div className='p-6 rounded-xl bg-[#F0FFFF] bg-opacity-10 hover:bg-opacity-20'>
              <div className='justify-center items-center'>
                <div className='flex flex-col px-8'>
                  <p className='text-xl pt-4 pb-2 select-none'>- By Students for Students -</p>
                  <p className='font-light text-md py-4'>
                    This platform is not only catered for students like you, but is also made by students.
                    Our lessons guarantee a wide variety of topics taught by upperclassmen with trusted
                    experience in their field.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default About
