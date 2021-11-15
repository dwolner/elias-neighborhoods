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
            }}
        >
            <div className='w-full flex justify-center items-center bg-black bg-opacity-50'>
                <h1 className='flex-1 text-center text-4xl text-gray-100'>Welcome to the {siteData.neighborhoodName} Community!</h1>
            </div>
        </div>
    )
}
