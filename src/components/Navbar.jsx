import Image from 'next/image'
import React from 'react'
import logoGpdn from '../../public/logo-gpdn.png'
import Link from 'next/link'
import { HiOutlineMenuAlt2 } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className='w-full '>
        <div className='w-full flex justify-between items-center'>
            {/* ----- Logo and Navlinks------- */}
            <div className='flex justify-between items-center gap-16'>
                <div className='w-32 2xl:w-48'>
                    <Image className='w-full' src={logoGpdn}/>
                </div>
                <div className='font-normal text-[#0C0E12] text-lg 2xl:text-2xl justify-between gap-8 2xl:gap-20 hidden md:flex'>
                    <Link href={'/'}>
                        <button className=''>Home</button>
                    </Link>
                    <Link href={'/about'}>
                        <button className=''>About</button>
                    </Link>
                    <Link href={'/blog'}>
                        <button className=''>Blog</button>
                    </Link>
                    <Link href={'/contact'}>
                        <button className=''>Contact</button>
                    </Link>
                </div>
            </div>

            {/* ---Get Started button--- */}
            <button className='bg-primary text-white text-xs 2xl:text-xl font-poppins py-3.5 px-5 rounded-md hidden md:block'>Get Started</button>

            {/* ----Mobile Menu Icon--- */}
            <div className='md:hidden'>
                <HiOutlineMenuAlt2 className='text-4xl '/>
            </div>
        </div>
    </div>
  )
}

export default Navbar