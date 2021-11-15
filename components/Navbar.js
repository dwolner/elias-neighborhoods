import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import siteData from '@constants/data'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

export default function Navbar() {
    const router = useRouter()
    console.log(router.asPath)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className='w-full mx-auto px-3 py-3 bg-black'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='flex flex-1'>
                    <h1 className='text-gray-100'>
                        {siteData.neighborhoodName} Community - {siteData.city}, {siteData.zip}
                    </h1>
                </div>
                <div className='flex flex-1 justify-center'>
                    <Image src='/media/logos/RichardElias_CompassLockupHorizontal-White.png' layout='intrinsic' width={225} height={75} alt='Richard Elias Compass Logo' />
                </div>
                <div className='flex flex-1 justify-end relative'>
                    {siteData.socialLinks.map((social) => {
                        return (
                            <a href={social.link} target='_blank' key={social.link} className='col p-2 text-base font-normal text-gray-100'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className={`bi bi-{{social.type}} h-5 w-5`} viewBox={social.viewBox}>
                                    <path d={social.svgPath} />
                                </svg>
                            </a>
                        )
                    })}
                    <button aria-label='Toggle Dark Mode' type='button' className='w-10 h-10 p-3 rounded focus:outline-none' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {mounted && (theme === 'dark' ? <SunIcon /> : <MoonIcon />)}
                    </button>
                </div>
            </div>
        </div>
    )
}