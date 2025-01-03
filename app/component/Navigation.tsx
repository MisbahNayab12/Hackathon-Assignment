"use client"
import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Group from '../../public/Group.png'
import Handbag from '../../public/Handbag.png'
import User from '../../public/User.png'
import { useRouter } from 'next/navigation'
import {useAppSelector } from '@/redux/features/store'
import { StaticImageData } from 'next/image'
import Menu from '../../public/menu.png'
import Close from '../../public/close.png'

interface CartItem {
    name: string;
    id: number;
    imagePath: StaticImageData;
    price: number;
    description: string
    quantity: number
}

export default function Navigation() {
    const [, setCartItems] = useState(0)
    const Router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const cartArray: CartItem[] = useAppSelector((state) => state.cartReducer)
    useEffect(()=> {
        setCartItems(cartArray.length)
    }, [cartArray.length])
    return (
        <div>
            <div className='overflow-hidden flex justify-between items-center lg:mx-14 xl:mx-[200px] 2xl:mx-[300px] font-sans flex-col lg:flex-row gap-5 mt-[30px]'>
                <h1 className='text-center font-bold text-primary text-[24px] leading-8'>Food<span className='text-white'>tuck</span></h1>
                <div id="anchors" className='hidden md:flex'>
                    <ul className=' text-white flex gap-8'>
                        <li><Link href="/" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' >Home</Link></li>
                        <li><Link href="/Menu" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer'>Menu</Link></li>
                        <li><Link href="#blog" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer'>Blog</Link></li>
                        <li><Link href="#page" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer'>Pages</Link></li>
                        <li><Link href="#about" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer' >About</Link></li>
                        <li><Link href="/OurShop" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer'>Shop</Link></li>
                        <li><Link href="#contact" className='hover:text-primary list-none w-full text-center p-4 cursor-pointer'>Contact</Link></li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <div className='flex justify-between items-center p-4  h-[54px]'>
                        <Image src={Group} alt="icon" className='w-[24px] h-[24px] cursor-pointer opacity-30' />
                        <Image src={User} alt="icon1" className='w-[24px] h-[24px] ml-4 cursor-pointer opacity-30' />
                        <Image src={Handbag} alt="icon2" className='w-[24px] h-[24px] ml-4 cursor-pointer' onClick={()=> Router.push('/ShoppingCart')}/>
                    </div>
                </div>

                <Image src={Menu} alt="icon" className='bg-transparent text-white filter invert w-8 cursor-pointer md:hidden' onClick={() => setIsMenuOpen(true)}/>

                    <div className={`absolute md:hidden top-24 left-8 w-full bg-white flex flex-col list-none  items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transformOrigin: 'top center' }}>
                    <Image src={Close} alt="close icon" className="w-8 h-8 cursor-pointer self-end mr-4 mt-4" onClick={() => setIsMenuOpen(false)}/>
                        <li>
                            <Link href="/" className='hover:text-primary' onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/Menu" className='hover:text-primary' onClick={() => setIsMenuOpen(false)}>Menu</Link>
                        </li>
                        <li>
                            <Link href="/Blog" className='hover:text-primary' onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        </li>
                        <li>
                            <Link href="/Page" className='hover:text-primary' onClick={() => setIsMenuOpen(false)}>Pages</Link>
                        </li>
                        <li>
                            <Link href="/About" className='hover:text-primary' onClick={() => setIsMenuOpen(false)}>About</Link>
                        </li>
                        <li>
                            <Link href="/OurShop" className='hover:text-primary' onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className='hover:text-primary' onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </li>
                    </div>
            </div>
        </div>
    )
}
