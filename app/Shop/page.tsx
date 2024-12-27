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


export default function page() {
  return (
    <div>
      <div className="bg-hero-image bg-cover bg-center h-80 w-full flex justify-center items-center mt-[30px]">
        <div className=''>
          <h1 className='text-white font-sans text-5xl font-bold '>Shop Details</h1>
          <div className='flex justify-center items-center'>
            <h2 className='text-white leading-[56px] text-inter'> Home </h2>
            <Image src={CaretRight} alt="icon" />
            <h2 className='text-primary'>Shop details</h2>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='flex lg:mx-14 xl:mx-[150px] gap-6 py-32'>
          <div>
            <Image src={Shop2} alt="image" className='mb-7' />
            <Image src={Shop3} alt="image" className='mb-7' />
            <Image src={Shop4} alt="image" className='mb-7' />
            <Image src={Shop5} alt="image" className='mb-7' />
          </div>

          <div>
            <Image src={Shop1} alt="image" className='w-[491px] h-[596px]' />
          </div>

          <div>
            <div className='flex justify-between items-center w-[530px]'>
              <h1 className='text-white px-6 py-3 rounded-lg bg-primary'> In stock</h1>
              <div className='flex text-[#828282] justify-between items-center '>
                <Image src={ArrowL} alt="image" />
                <p>Prev</p>
                <p className='ml-5'>Next</p>
                <Image src={ArrowR} alt="image" />
              </div>
            </div>
            <h1 className='text-[48px] font-bold font-sans'>Yummy Chicken Chup</h1>
            <p className='w-[530px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className='border mt-5'></div>
            <h1 className='font-bold text-[32px] mt-5'>54.00$</h1>
            <div className='flex gap-5 mt-4'>
              <Image src={Stars} alt="image" />
              <div className='border h-5 w-0'></div>
              <p className='text-[#828282]'>5.0 Rating </p>
              <div className='border h-5 w-0'></div>
              <p className='text-[#828282]'>22 Review </p>
            </div>
            <p className='text-[#828282] mt-4'>Dictum/cursus/Risus</p>

            <div className='flex gap-5 mt-4'>
              <div className='flex justify-between items-center'>
                <div className='border w-10 h-10 flex justify-center items-center'>
                  <Image src={Minus} alt="image" />
                </div>
                <p className='border w-10 h-10 text-center p-2'>1</p>
                <div className='border w-10 h-10 flex justify-center items-center'>
                  <Image src={Plus} alt="image" />
                </div>
              </div>
              <div className='flex justify-center items-center bg-primary h-10 w-[191px] gap-3'>
                <Image src={Handbag} alt="image" />
                <p className='text-white'>Add to Cart</p>
              </div>
            </div>
            <div className='border mt-7'></div>
            <div className='flex justify-between items-center w-60 mt-7'>
              <Image src={Heart} alt="image" />
              <p className='text-[#828282]'>Add to Wishlist</p>
              <Image src={Compare} alt="image" />
              <p className='text-[#828282]'>Compare</p>
            </div>
            <p className='text-[#828282] mt-3'>Category: Pizza</p>
            <p className='text-[#828282] mt-3'>Tag: Our Shop</p>

            <div className='flex mt-3 gap-4'>
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

        <div className='lg:mx-14 xl:mx-[150px] gap-6 py-32'>
          <div className='flex'>
            <p className='text-white bg-primary h-10 w-[191px] gap-3 text-center ml-4'> Description</p>
            <p>Reviews</p>
          </div>
        </div>

      </div>
    </div>
  )
}
