import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../public/assets/logo-white.png'
import {AiOutlineMenu} from 'react-icons/ai';
import {BsMoon, BsSun} from 'react-icons/bs';
import {RxCross1} from 'react-icons/rx'
import {useTheme} from 'next-themes'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const {theme, setTheme} = useTheme();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      }
      else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? 'font-roboto fixed w-full h-20 shadow-xl z-[100] select-none bg-gradient-to-r from-[#11173a] via-[#191970] to-[#008080] text-[#F0FFFF]' :
    'font-roboto fixed w-full h-20 z-[100] select-none bg-gradient-to-r from-[#11173a] via-[#191970] to-[#008080] text-[#F0FFFF]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='ml-8 md:ml-0 flex items-center'>
          <Image src={LogoImg} alt="/" width='60' height='60' />
          <h2 className='font-light ml-2 text-[#F0FFFF]'>verbose</h2>
        </div>
        <div>
          <ul className='font-medium hidden md:flex text-[#ecf0f3]'>

            <motion.div whileTap={{scale: 0.90}}>
              <Link href='/'>
                <li className='ml-4 text-sm uppercase px-6 p-3 rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Courses</li>
              </Link>
            </motion.div>

            <motion.div whileTap={{scale: 0.90}}>
              <Link href='/'>
                <li className='ml-4 text-sm uppercase px-6 p-3 rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Resources</li>
              </Link>
            </motion.div>

            <motion.div whileTap={{scale: 0.90}}>
              <Link href='/'>
                <li className='ml-4 text-sm uppercase px-6 p-3 rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Login</li>
              </Link>
            </motion.div>

            <motion.div whileTap={{scale: 0.90}}>
              <Link href='/'>
                <li className='ml-4 text-sm uppercase px-6 p-3 rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Sign Up</li>
              </Link>
            </motion.div>

          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu className='mr-8 text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080]' size = {25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-full sm:w-[60%] md:w-[45%] h-screen bg-[#11173a] p-12 ease-in duration-500' : 'fixed left-[-100%] h-screen top-0 p-12 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-end'>
              <div onClick={handleNav} className='text-xl text-[#ecf0f3] -mt-8 -mr-6 rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100 p-4 cursor-pointer'>
                <RxCross1 />
              </div>
            </div>
          </div>
          <div className='font-roboto py-12 flex flex-col'>
            <ul className='uppercase'>

              <motion.div whileTap={{scale: 0.90}}>
                <Link href='/'>
                  <li onClick={()=> setNav(false)} className='mb-4 p-6 px-10 text-md text-[#ecf0f3] rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Courses</li>
                </Link>
              </motion.div>

              <motion.div whileTap={{scale: 0.90}}>
                <Link href='/'>
                  <li onClick={()=> setNav(false)} className='mb-4 p-6 px-10 text-md text-[#ecf0f3] rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Resources</li>
                </Link>
              </motion.div>

              <motion.div whileTap={{scale: 0.90}}>
                <Link href='/'>
                  <li onClick={()=> setNav(false)} className='mb-4 p-6 px-10 text-md text-[#ecf0f3] rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Login</li>
                </Link>
              </motion.div>

              <motion.div whileTap={{scale: 0.90}}>
                <Link href='/'>
                  <li onClick={()=> setNav(false)} className='mb-4 p-6 px-10 text-md text-[#ecf0f3] rounded-full hover:bg-[#BBEBE9] hover:bg-opacity-10 ease-in duration-100'>Sign Up</li>
                </Link>
              </motion.div>

            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
