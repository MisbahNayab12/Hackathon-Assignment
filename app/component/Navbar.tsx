'use client'
import React from 'react'
import Image from 'next/image'
import Group from '../../public/Group.png'
import Handbag from '../../public/Handbag.png'
import Link from 'next/link'
import { useState } from 'react'
import Menu from '../../public/menu.png'
import Close from '../../public/close.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <nav>
                <h1 className='text-center font-bold text-primary text-[24px] leading-8 mt-[45px]'>Food<span className='text-white'>tuck</span></h1>
                <div className='flex justify-between items-center lg:mx-14 xl:mx-[200px] 2xl:mx-[300px] font-sans flex-col lg:flex-row gap-5 mt-5'>
                    <div id="anchors" className='hidden md:flex'>
                        <ul className=' text-white flex gap-8'>
                            <li><Link href="/" className='hover:text-primary'>Home</Link></li>
                            <li><Link href="/Menu" className='hover:text-primary'>Menu</Link></li>
                            <li><Link href="/Blog" className='hover:text-primary'>Blog</Link></li>
                            <li><Link href="Page" className='hover:text-primary'>Pages</Link></li>
                            <li><Link href="About" className='hover:text-primary'>About</Link></li>
                            <li><Link href="/OurShop" className='hover:text-primary'>Shop</Link></li>
                            <li><Link href="Contact" className='hover:text-primary'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className='flex items-center'>
                        <div className='flex justify-between items-center p-4 border rounded-[27px] border-primary w-[310px] h-[54px]'>
                            <input
                                type="text"
                                placeholder='Search...'
                                className="bg-[#0D0D0D] text-white" />
                            <Image src={Group} alt="icon" className='w-[24px] h-[24px]' />
                        </div>
                        <Image src={Handbag} alt="icon1" className='w-[24px] h-[24px] ml-4' />
                    </div>

                    <Image src={Menu} alt="icon" className='bg-transparent text-white filter invert w-8 cursor-pointer md:hidden' onClick={() => setIsMenuOpen(true)} />

                    {isMenuOpen && (
                        <div className={`absolute md:hidden top-24 left-8 w-full bg-white flex flex-col list-none  items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transformOrigin: 'top center' }}>
                            <Image
                                src={Close}
                                alt="close icon"
                                className="w-8 h-8 cursor-pointer self-end mr-4 mt-4" onClick={() => setIsMenuOpen(false)}/>
                            <li><Link href="/" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link href="/Menu" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
                            <li><Link href="/Blog" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                            <li><Link href="/Page" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' onClick={() => setIsMenuOpen(false)}>Pages</Link></li>
                            <li><Link href="/About" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' onClick={() => setIsMenuOpen(false)}>About</Link></li>
                            <li><Link href="/OurShop" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
                            <li><Link href="/Contact" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}
