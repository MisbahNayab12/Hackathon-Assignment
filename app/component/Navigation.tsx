import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Group from '../../public/Group.png'
import Handbag from '../../public/Handbag.png'
import User from '../../public/User.png'

export default function Navigation() {
    return (
        <div>
            <div className='flex justify-between items-center lg:mx-14 xl:mx-[200px] 2xl:mx-[300px] font-sans flex-col lg:flex-row gap-5 mt-[30px]'>

                <h1 className='text-center font-bold text-primary text-[24px] leading-8  '>Food<span className='text-white'>tuck</span></h1>
                <div id="anchors" className='hidden md:flex'>
                    <ul className=' text-white flex gap-8'>
                        <li>
                            <Link href="/" className='hover:text-primary'>Home</Link>
                        </li>
                        <li>
                            <Link href="/Menu" className='hover:text-primary'>Menu</Link>
                        </li>
                        <li>
                            <Link href="#blog" className='hover:text-primary'>Blog</Link>
                        </li>
                        <li>
                            <Link href="#page" className='hover:text-primary'>Pages</Link>
                        </li>
                        <li>
                            <Link href="#about" className='hover:text-primary'>About</Link>
                        </li>
                        <li>
                            <Link href="/Shop" className='hover:text-primary' >Shop</Link>
                        </li>
                        <li>
                            <Link href="#contact" className='hover:text-primary'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <div className='flex justify-between items-center p-4  h-[54px]'>
                        <Image src={Group} alt="icon" className='w-[24px] h-[24px]' />
                        <Image src={User} alt="icon1" className='w-[24px] h-[24px] ml-4' />
                        <Image src={Handbag} alt="icon2" className='w-[24px] h-[24px] ml-4' />
                    </div>

                </div>
            </div>
        </div>
    )
}
