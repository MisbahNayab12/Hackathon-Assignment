"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import CaretRight from '../../public/CaretRight.png'
import Shopimage1 from '../../public/Shopimage1.png'
import Shopimage2 from '../../public/Shopimage2.png'
import Shopimage3 from '../../public/Shopimage3.png'
import { StaticImageData } from 'next/image'
import Shopimage4 from '../../public/Shopimage4.png'
import Shopimage5 from '../../public/Shopimage5.png'
import Shopimage6 from '../../public/Shopimage6.png'
import Shopimage7 from '../../public/Shopimage7.png'
import Shopimage8 from '../../public/Shopimage8.png'
import Shopimage9 from '../../public/Shopimage9.png'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/features/store'
import { updateCart } from '@/redux/features/cart-slice'

interface Product {
    name: string;
    id: number;
    imagePath: StaticImageData;
    price: number;
    description: string
}

interface CartItem {
    name: string;
    id: number;
    imagePath: StaticImageData;
    price: number;
    description: string
    quantity: number
}

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cartArray: CartItem[] = useAppSelector((state) => state.cartReducer)

    const products: Product[] = [
        {
            name: "Fresh Lime",
            id: 1,
            imagePath: Shopimage1,
            price: 38.00,
            description: "This is a description"
        },
        {
            name: "Chocolate Muffin",
            id: 2,
            imagePath: Shopimage2,
            price: 28.00,
            description: "This is a description"
        },
        {
            name: "Burger",
            id: 3,
            imagePath: Shopimage3,
            price: 21.00,
            description: "This is a description"
        },
        {
            name: "Country Burger",
            id: 4,
            imagePath: Shopimage4,
            price: 45.00,
            description: "This is a description"
        },
        {
            name: "Drink",
            id: 5,
            imagePath: Shopimage5,
            price: 23.00,
            description: "This is a description"
        },
        {
            name: "Pizza",
            id: 6,
            imagePath: Shopimage6,
            price: 43.00,
            description: "This is a description"
        },
        {
            name: "Cheese Butter",
            id: 7,
            imagePath: Shopimage7,
            price: 10.00,
            description: "This is a description"
        },
        {
            name: "Sandwiches",
            id: 8,
            imagePath: Shopimage8,
            price: 25.00,
            description: "This is a description"
        },
        {
            name: "Chicken Chup",
            id: 9,
            imagePath: Shopimage9,
            price: 12.00,
            description: "This is a description"
        },
    ]

    const addToCart = (product: Product) => {
        const itemIndex = cartArray.findIndex((item) => item.id === product.id)

        if (itemIndex !== -1) {
            const updatedCart = cartArray.map((item, index) =>
                index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
            )

            dispatch(updateCart(updatedCart))
        }

        else {
            const newCartItem = {
                name: product.name,
                id: product.id,
                imagePath: product.imagePath,
                price: product.price,
                description: product.description,
                quantity: 1
            };

            const updatedCart = [...cartArray, newCartItem];
            dispatch(updateCart(updatedCart));
        }
    }

    useEffect(() => {
        console.log("cartArray", cartArray);
    }, [cartArray])


    return (
        <div className='bg-white'>
            <div className="bg-hero-image bg-cover bg-center h-80 w-full flex justify-center items-center mt-[30px] ">
                <div className=''>
                    <h1 className='text-white font-sans text-5xl font-bold '>Our Shop</h1>
                    <div className='flex justify-center items-center'>
                        <h2 className='text-white leading-[56px] text-inter'> Home </h2>
                        <Image src={CaretRight} alt="icon" />
                        <h2 className='text-primary'>Shop</h2>
                    </div>
                </div>
            </div>

            <div className='flex justify-center gap-10 mt-20 lg:mx-8 xl:mx-[150px] flex-wrap'>
                {
                    
                    products.map((product) => (
                        <div key={product.id}>
                            <Image src={product.imagePath} alt="image" />
                            <div>
                                <h2 className='font-bold'>{product.name}</h2>
                                <p className='text-primary'>${product.price}</p>
                            </div>
                            <div>
                                <button onClick={() => addToCart(product)} className='w-36 h-10 bg-primary text-white hover:bg-amber-400'> Add to Cart </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Page
