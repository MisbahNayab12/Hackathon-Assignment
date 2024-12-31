import React from 'react'
import Image from 'next/image'
import Post from '../../public/post.png'
import Watch from '../../public/Watch.png'
import FbIcon from '../../public/f.png'
import PIcon from '../../public/p.png'
import TweeterIcon from '../../public/t.png'
import InstaIcon from '../../public/i.png'
import YoutubeIcon from '../../public/y.png'

export default function Footer() {
    return (
        <div className='mt-10 lg:mt-16'>
            <div>
                <div className='flex justify-between items-center flex-col md:flex-row px-10 lg:px-[135px] py-8 lg:[py-50]'>
                    <div>
                        <h1 className='text-white    text-2xl md:text-4xl lg:ml-[50px]    font-semibold font-sans'><span className='text-primary'>St</span>ill You Need Our Support?</h1>
                        <div className='md:w-3/4 w-full'>
                            <p className='text-white font-sans   text-sm md:text-base font-light lg:ml-[50px] mt-4'>Don't wait make a smart & logical quote here. Its pretty easy.</p>
                        </div>
                    </div>

                    <div className="flex mt-6 md:mt-0">
                        <input type="text" placeholder='Enter Your Email' className="bg-primary text-white     py-2 px-4 md:py-3 md:px-6 rounded-l-md focus:outline-none      placeholder-white" />
                        <button className='text-primary bg-white    py-2 px-4 md:py-3 md:px-6 rounded-r-md     '>Subscribe Now</button>
                    </div>
                </div>
                <hr className=' border-primary mx-10 md:mx-[135px]'></hr>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap lg:flex-row justify-center 2xl:px-[135px] 2xl:justify-between gap-20 lg:gap-10 mx-[20px] md:mx-0 lg:mx-[50px] mt-10 px-10 md:px-0'>
                <div className='w-[300px]'>
                    <h1 className='font-bold font-sans text-white'>About Us.</h1>
                    <p className=' text-white mt-8'>orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
                    <div className='flex mt-6 gap-3'>
                        <Image src={Watch} alt="image" />
                        <div className='text-white'>
                            <h2>Opening Hours</h2>
                            <p>Mon-Sat(8:00 - 6:00)</p>
                            <p>Sunday- Closed</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 text-white place-items-start lg:w-[400px] gap-5 font-sans'>
                    <h1 className='font-bold'>Useful Links</h1>
                    <h1 className='font-bold'>Help?</h1>
                    <p >About</p>
                    <p>FAQ</p>
                    <p>News</p>
                    <p>Terms & Conditions</p>
                    <p>FAQ</p>
                    <p>Partners</p>
                    <p>Reporting</p>
                    <p>Team</p>
                    <p>Documentation</p>
                    <p>Menu</p>
                    <p>Support Policy</p>
                    <p>Contact</p>
                    <p>Privacy</p>
                </div>

                <div className='w-[300px]'>
                    <h1 className='font-bold text-white'>Recent Post</h1>
                    <div className='flex mt-8 gap-3 mb-3'>
                        <Image src={Post} alt="image" />
                        <div>
                            <h2 className='text-white'>Is fastfood good for your body?</h2>
                            <p className=' text-gray-400'>February 28,2022</p>
                        </div>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <Image src={Post} alt="image" />
                        <div>
                            <h2 className='text-white'>Change your food habit with organic food</h2>
                            <p className='text-gray-400'>February 28,2022</p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <Image src={Post} alt="image" />
                        <div>
                            <h2 className='text-white'>Do you like fastfood for your life?</h2>
                            <p className='text-gray-400'>February 28,2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#4F4F4F] p-5 mt-7'>
                <div className='lg:mx-[90px]'>
                    <div className='flex md:justify-between flex-col md:flex-row items-center'>
                        <p className='text-white'> Copyright © 2022 by Misbah. All Rights Reserved. </p>
                        <div className='flex justify-between md:justify-center items-center gap-5 mt-3 md:mt-0'>
                            <div className="w-10 h-10 flex justify-center items-center bg-white rounded">
                                <Image src={FbIcon} alt="Facebook" />
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-white rounded">
                                <Image src={TweeterIcon} alt="Twitter" />
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-white rounded">
                                <Image src={InstaIcon} alt="Instagram" />
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-white rounded">
                                <Image src={YoutubeIcon} alt="YouTube" />
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-white rounded">
                                <Image src={PIcon} alt="Pinterest" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
