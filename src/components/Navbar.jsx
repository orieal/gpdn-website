"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logoGpdn from '../../public/logo-gpdn.png'
import Link from 'next/link'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MobileMenu from './MobileMenu';
import { CgClose } from "react-icons/cg";
import { GoChevronRight } from "react-icons/go";



const Navbar = () => {

    const [isShowMenu, setIsShowMenu] = useState(false);

        useEffect(() => {
            if (isShowMenu) {
              document.body.classList.add('overflow-hidden');
            } else {
              document.body.classList.remove('overflow-hidden');
            }
          }, [isShowMenu]);
    
  return (
    <div className='w-full relative'>
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
            <div className='bg-primary hover:bg-[#039187] cursor-pointer transition-all duration-300 ease-in text-white text-sm 2xl:text-xl font-poppins py-3 px-5 rounded-xl hidden items-center justify-around md:flex '>
                <p>Explore</p>
                <GoChevronRight/>
            </div>

            {/* ----Mobile Menu Icon and close icon--- */}
            <div className='md:hidden'>
                {isShowMenu ? <CgClose onClick={()=>setIsShowMenu(!isShowMenu)} className='text-4xl'/> :
                <HiOutlineMenuAlt2 onClick={()=>setIsShowMenu(!isShowMenu)} className='text-4xl '/>
  }
            </div>
        </div>

        {/* -----Mobile Menu------- */}
        <MobileMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu}/>
    </div>
  )
}

export default Navbar