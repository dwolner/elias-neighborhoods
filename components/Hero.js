import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import siteData from '@constants/data'

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
                autoPlay='true'
                style={{
                    width: '100%',
                    height: 'auto',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                }}
            >
                <source src='/media/weston_neighborhood_header_720p.mp4' type='video/mp4' />
            </video>
            <div className='w-full flex justify-center items-center bg-black bg-opacity-50'>
                <div className='flex-1'>
                    <h1 className='text-center text-4xl text-gray-100'>Welcome to the {siteData.neighborhoodName} Community!</h1>
                    <div className='text-center'>
                        <button className='bg-black text-gray-100 border border-gray-100 rounded-md my-2 py-2 px-4'>
                            <h6>Get Started</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
