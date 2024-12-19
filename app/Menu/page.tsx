import React from 'react'
import Image from 'next/image'
import CaretRight from '../../public/CaretRight.png'
import starter from '../../public/starter-menu.png'
import coffee from '../../public/Coffee.png'


export default function page() {
  return (
    <div>
    <div className="bg-hero-image bg-cover bg-center h-80 w-full flex justify-center items-center mt-[30px]">
      <div className=''>
        <h1 className='text-white font-sans text-5xl font-bold '>Our Menu</h1>
        <div className='flex justify-center items-center'>
          <h2 className='text-white leading-[56px] text-inter'> Home </h2>
          <Image src={CaretRight} alt="icon" />
          <h2 className='text-primary'>Menu</h2>
        </div>
      </div>
    </div>

    <div className='bg-white'>
    <div className='flex lg:mx-14 xl:mx-[200px] justify-between py-32'>
      <Image src={starter} alt="starterimage" className='w-[448px] h-[626px]'/>
      <div>
      <Image src={coffee} alt="coffeeicon"/>
        <h1 className='font-sans font-bold text-5xl leading-[56px]'>Starter Menu</h1>
        <div className='flex justify-between gap-32'>
          <div>
            <h1 className='font-sans font-bold text-2xl mt-4'>Alder Grilled Chinook Salmon</h1>
            <p className='font-sans text-[16px] mt-2'>Toasted French bread topped with romano, cheddar</p>
            <p className='font-sans text-[16px] mt-1 text-gray-600'>560 CAL</p>
            <div className='border mt-5'></div>
          </div>

          <div>
            <p className='text-primary text-[24px] mt-5'>32$</p>
          </div>
        </div>

        <div className='flex justify-between gap-32 mt-1'>
          <div>
            <h1 className='font-sans font-bold text-2xl mt-5 text-primary'>Berries and creme tart</h1>
            <p className='font-sans text-[16px] mt-2'>Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className='font-sans text-[16px] mt-1 text-gray-600'>700 CAL</p>
            <div className='border mt-5 w-96'></div>
          </div>

          <div>
            <p className='text-primary text-[24px] mt-5'>43$</p>
          </div>
        </div>

        <div className='flex justify-between gap-32 mt-1'>
          <div>
            <h1 className='font-sans font-bold text-2xl mt-5'>Tormentoso Bush Pizza Pintoage</h1>
            <p className='font-sans text-[16px] mt-2'>Ground cumin, avocados, peeled and cubed</p>
            <p className='font-sans text-[16px] mt-1 text-gray-600'>1000 CAL</p>
            <div className='border mt-5 w-96'></div>
          </div>

          <div>
            <p className='text-primary text-[24px] mt-5'>14$</p>
          </div>
        </div>

        <div className='flex justify-between gap-32 mt-1'>
          <div>
            <h1 className='font-sans font-bold text-2xl mt-5'>Spicy Vegan Potato Curry</h1>
            <p className='font-sans text-[16px] mt-2'>Spreadable cream cheese, crumbled blue cheese</p>
            <p className='font-sans text-[16px] mt-1 text-gray-600'>560 CAL</p>
            <div className='border mt-5 w-96'></div>
          </div>

          <div>
            <p className='text-primary text-[24px] mt-5'>35$</p>
          </div>
        </div>
        
      </div>

    </div>
    </div>

    </div>
  )
}
