import React from 'react'
import Navbar from './component/Navbar'
import Image from 'next/image'
import Hero from '../public/Hero.png'
import Group from '../public/Group 1000002057.png'
import AboutImage1 from '../public/about-image-1.png'
import AboutImage2 from '../public/about-image-2.png'
import AboutImage3 from '../public/about-image-3.png'
import TickIcon from '../public/tick-icon.png'
import Food1 from '../public/food1.png'
import Food2 from '../public/food2.png'
import Food3 from '../public/food3.png'
import Food4 from '../public/food4.png'

export default function page() {
  return (
    <div>
      <Navbar/>

      <div >
        <div className='flex justify-between items-center flex-col md:flex-row mt-10 text-center lg:text-left'>
          <div>
            <Image src={Group} alt="image" className='lg:mx-4 xl:mx-[50px] 2xl:ml-[242px] hidden xl:inline-block' />
          </div>

          <div className='2xl:w-[472px] h-[356px] mx-5 md:mx-0 lg:ml-[48px] 2xl:ml-[18px]'>
            <h2 className='font-greatVibes text-primary font-normal leading-10 text-[30px] 2xl:text-[32px]'> Its Quick & Amusing! </h2>
            <h1 className='text-white font-bold text-[55px] xl:text-[60px] leading-[68px] w-[400px] lg:w-[478px] 2xl:w-[472px] h-[136px]'> <span className='text-primary'>Th</span>e Art of speed food Quality</h1>
            <p className='text-white lg:text-[14px] 2xl:text-[16px] mx-6 lg:mx-0 md:w-[350px] lg:w-[418px] h-[48px] leading-6 mt-20 lg:mt-6 font-normal font-sans 2xl:leading-[24px] 2xl:mt-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
            <button className='text-[16px] font-normal leading-6 font-sans text-white bg-primary rounded-[30px] w-[190px] h-[60px] mt-14 lg:mt-8'> See Menu </button>
          </div>

          <div className=' md:mr-[48px] 2xl:mr-[200px] lg:w-[720px] lg:h-[513px] 2xl:w-[877.8px] 2xl:h-[670px] 2xl:ml-[120px] mt-20'>
            <Image src={Hero} alt="HeroImage" />
          </div>

        </div>
      </div>

      <div className='flex justify-between items-center flex-col md:flex-row text-center md:text-left xl:mx-[150px] 2xl:mx-[300px] mt-24 md:mt-40 lg:mt-5 xl:gap-9 xl:mt-10'>
        <div className='lg:ml-[48px] md:ml-10'>
          <h2 className='font-greatVibes text-primary font-normal leading-10 text-[30px] 2xl:text-[32px]'> About Us </h2>
          <h1 className='text-white font-bold text-[43px] xl:text-[48px] leading-[56px] w-[374px] lg:w-[446px] h-[110px]'> <span className='text-primary'>We</span> Create the best foody product </h1>
          <p className='text-white lg:text-[14px] 2xl:text-[16px] mx-6 md:mx-0 md:w-[320px] lg:w-[420px] lg:h-[124px] 2xl:w-[526px] 2xl:h-[130px] leading-6 mt-20 lg:mt-6 font-normal font-sans 2xl:leading-[24px] 2xl:mt-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat. </p>

          <div className='flex gap-2 2xl:gap-4 mt-6 ml-4 md:ml-0 items-center'>
            <Image src={TickIcon} alt="tickicon" className='w-[17px] h-[12.24px]' />
            <p className='text-white leading-[26px]'>  Lacus nisi, et ac dapibus sit eu velit in consequat. </p>
          </div>
          <div className='flex gap-2 2xl:gap-4 mt-4 ml-4 md:ml-0  items-center'>
            <Image src={TickIcon} alt="tickicon" className='w-[17px] h-[12.24px]' />
            <p className='text-white leading-[26px]'> Quisque diam pellentesque bibendum non dui volutpat fringilla. </p>
          </div>
          <div className='flex gap-2 2xl:gap-4 mt-4 ml-4 md:ml-0  items-center'>
            <Image src={TickIcon} alt="tickicon" className='w-[17px] h-[12.24px]' />
            <p className='text-white leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>

          <button className='text-[16px] font-normal leading-6 font-sans text-white bg-primary rounded-[30px] w-[190px] h-[60px] mt-10 lg:mt-8'>Read More</button>
        </div>

        <div className='md:mr-[48px] xl:mr-[10px] 2xl:ml-40 mt-10'>
          <Image src={AboutImage1} alt="aboutimage" className='lg:w-[322px] xl:w-[600px] xl:h-[270px] 2xl:w-[660px] 2xl:h-[330px]rounded-[6px] mr-5' />
          <div className='flex justify-between items-center mt-[12px] flex-col gap-3 xl:gap-0 xl:flex-row'>
            <Image src={AboutImage2} alt="aboutimage" className='xl:w-[295px] 2xl:w-[320px] 2xl:h-[155px] rounded-[6px] mr-5' />
            <Image src={AboutImage3} alt="aboutimage" className=' xl:w-[295px]  2xl:w-[320px] 2xl:h-[155px] rounded-[6px] mr-5' />
          </div>
        </div>
      </div>

      <div className='mt-24 md:mt-40 xl:ml-[48px]'>
        <h2 className='font-greatVibes text-primary font-normal leading-10 text-[30px] 2xl:text-[32px] text-center'>Food Category </h2>
        <h1 className='text-white font-bold text-[48px] leading-[56px] text-center'><span className='text-primary'>Ch</span>oose Food Item</h1>
        <div className='flex justify-between items-center md:mt-14 mb-20 flex-col md:flex-row md:flex-wrap gap-8 md:mx-5 lg:justify-evenly xl:flex-row xl:mr-[200px] xl:ml-[300px]'>
          <Image src={Food1} alt="foodimage" className='w-[306px] h-[329px]' />
          <Image src={Food2} alt="foodimage" className='w-[306px] h-[329px]' />
          <Image src={Food3} alt="foodimage" className='w-[306px] h-[329px]' />
          <Image src={Food4} alt="foodimage" className='w-[306px] h-[329px]' />
        </div>
      </div>

    </div>
  )
}
