"use client"
import React from 'react'
import Image from 'next/image'
import CaretRight from '../../public/CaretRight.png'
import Shop1 from '../../public/Shop1.png'
import Shop2 from '../../public/Shop2.png'
import Shop3 from '../../public/Shop3.png'
import Shop4 from '../../public/Shop4.png'
import Shop5 from '../../public/Shop5.png'
import ArrowR from '../../public/ArrowRight.png'
import ArrowL from '../../public/Project Status.png'
import Stars from "../../public/Star.png"
import Minus from "../../public/Minus.png"
import Plus from "../../public/Plus.png"
import Handbag from '../../public/Handbag.png'
import Heart from '../../public/Heart.png'
import Compare from '../../public/compare.png'
import Youtube from '../../public/youtube.png'
import Instagram from '../../public/Instagram.png'
import Facebook from '../../public/facebook.png'
import Social from '../../public/social.png'
import Tweeter from '../../public/tweeter.png'
import Arrow1 from '../../public/Arrow1.png'
import Arrow2 from '../../public/Arrow2.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Page() {
  const [likes,setlikes] = useState(0)
  const router = useRouter()

  return (
    <div>
      <div className="bg-hero-image bg-cover bg-center h-80 w-full flex justify-center items-center mt-[30px]">
        <div className=''>
          <h1 className='text-white font-sans text-5xl font-bold'>Shop Details</h1>
          <div className='flex justify-center items-center'>
            <h2 className='text-white leading-[56px] text-inter'> Home </h2>
            <Image src={CaretRight} alt="icon" />
            <h2 className='text-primary'>Shop details</h2>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='md:flex-col lg:flex lg:flex-row lg:mx-8 xl:mx-[150px] gap-6 md:py-32 2xl:mx-[600px] 2xl:gap-32'>
          <div className='hidden md:flex md:justify-center md:gap-10 lg:hidden xl:block'>
            <Image src={Shop2} alt="image" className='mb-7 xl:mb-9 xl:mt-3 2xl:mt-0' />
            <Image src={Shop3} alt="image" className='mb-7 xl:mb-9' />
            <Image src={Shop4} alt="image" className='mb-7 xl:mb-9' />
            <Image src={Shop5} alt="image" className='mb-7 xl:mb-9' />
          </div>

          <div className='flex justify-center'>
            <Image src={Shop1} alt="image" className='w-[300px] object contain lg:w-[491px] lg:h-[596px] mt-10 md:mt-0' />
          </div>

          <div>
            <div className='hidden md:flex md:justify-center lg:justify-between lg:items-center lg:w-[530px] md:gap-14 lg:gap-0 md:mt-8 lg:mt-0'>
              <h1 className='text-white px-6 py-3 rounded-lg bg-primary '> In stock</h1>
              <div className='flex text-[#828282] justify-between items-center'>
                <Image src={ArrowL} alt="image" />
                <p>Prev</p>
                <p className='ml-5'>Next</p>
                <Image src={ArrowR} alt="image" />
              </div>
            </div>
            <h1 className='text-[48px] font-bold font-sans text-center lg:text-left mt-10 lg:mt-0'>Yummy Chicken Chup</h1>
            <p className='lg:w-[530px] text-center mx-5 lg:mx-0 lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className='border mt-5'></div>
            <h1 className='font-bold text-[32px] mt-5 text-center lg:text-left'>54.00$</h1>
            <div className='flex gap-5 mt-4 justify-center lg:justify-start'>
              <Image src={Stars} alt="image" />
              <div className='border h-5 w-0'></div>
              <p className='text-[#828282]'>5.0 Rating </p>
              <div className='border h-5 w-0'></div>
              <p className='text-[#828282]'>22 Review </p>
            </div>
            <p className='text-[#828282] mt-4 text-center lg:text-start'>Dictum/cursus/Risus</p>

            <div className='flex gap-5 mt-4 justify-center lg:justify-start'>
              <div className='flex justify-between items-center'>
                <button className='border w-10 h-10 flex justify-center items-center' onClick={()=>{setlikes(likes-1)}}>
                  <Image src={Minus} alt="image" />
                </button>
                <p className='border w-10 h-10 text-center p-2'>{likes}</p>
                <button className='border w-10 h-10 flex justify-center items-center' onClick={()=>{setlikes(likes+1)}}>
                  <Image src={Plus} alt="image" />
                </button>
              </div>
              <div className='flex justify-center items-center bg-primary h-10 w-[191px] gap-3 hover:bg-amber-400'>
                <Image src={Handbag} alt="image" />
                <button className='text-white' onClick={() => {router.push("/ShoppingCart")}}>Add to Cart</button>
              </div>
            </div>
            <div className='border mt-7'></div>
            <div className='flex lg:justify-between items-center lg:w-60 mt-7 justify-center gap-3 lg:gap-0'>
              <Image src={Heart} alt="image"/>
              <p className='text-[#828282]'>Add to Wishlist</p>
              <Image src={Compare} alt="image" />
              <p className='text-[#828282]'>Compare</p>
            </div>
            <p className='text-[#828282] mt-3 text-center lg:text-left'>Category: Pizza</p>
            <p className='text-[#828282] mt-3 text-center lg:text-left'>Tag: Our Shop</p>

            <div className='flex mt-3 gap-4 justify-center lg:justify-start'>
              <p className='text-[#828282]'>Share  : </p>
              <Image src={Youtube} alt="image" />
              <Image src={Facebook} alt="image" />
              <Image src={Tweeter} alt="image" />
              <Image src={Social} alt="image" />
              <Image src={Instagram} alt="image" />
            </div>
            <div className='border mt-7'></div>
          </div>
        </div>

        <div className='lg:mx-14 xl:mx-[150px] gap-6'>
          <div className='flex'>
            <p className='text-white bg-primary h-10 w-[191px] gap-3 text-center p-2 font-sans'> Description</p>
            <p className='h-10 ml-5 gap-3 text-center p-2 font-sans'>Reviews (24)</p>
          </div>
          <p className='mt-7 text-[#828282]'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
          <p className='mt-7 text-[#828282]'>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
          <h2 className='mt-7 text-[18px] text-[#4F4F4F]'>Key Benefits</h2>
          <p className='mt-7'><span className='font-extrabold mr-5'>.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='mt-7'><span className='font-extrabold mr-5'>.</span> Maecenas ullamcorper est et massa mattis condimentum.</p>
          <p className='mt-7'><span className='font-extrabold mr-5'>.</span>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</p>
          <p className='mt-7'><span className='font-extrabold mr-5'>.</span>Etiam nec massa et lectus faucibus ornare congue in nunc.</p>
          <p className='mt-7'><span className='font-extrabold mr-5'>.</span>Mauris eget diam magna, in blandit turpis.</p>
        </div>

        <div className='mt-40'>
          <div className='flex justify-between lg:mx-14 xl:mx-[150px]'>
            <h1 className='font-sans font-bold text=[32px]'>Similar Products</h1>
            <div className='flex gap-5'>
              <Image src={Arrow2} alt="image"/>
              <Image src={Arrow1} alt="image"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
