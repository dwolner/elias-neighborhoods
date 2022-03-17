import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import siteData from '@constants/data'
import OpenContactUsButton from './OpenContactUsButton'

export default function Hero() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div
            className='flex'
            style={{
                backgroundImage: 'url(/media/weston_house.jpeg)',
                width: '100%',
                height: '50vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <video
                loop
                muted
                autoPlay={true}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    objectFit: 'cover',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                }}
            >
                <source src='/media/weston_neighborhood_header_720p.mp4' type='video/mp4' />
            </video>
            <div className='w-full flex justify-center items-center bg-black bg-opacity-20'>
                <div className='flex-1 p-4 text-center'>
                    <h1 className='text-4xl text-gray-100'>Welcome to the</h1>
                    <h1 className='text-6xl text-gray-100 my-4'>{siteData.neighborhoodName} Community!</h1>
                    <div className='w-40 m-auto'>
                        <OpenContactUsButton text='Get Started' />
                    </div>
                </div>
            </div>
        </div>
    )
}
