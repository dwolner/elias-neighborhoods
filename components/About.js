import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionBlock from './SectionBlock'
import siteData from '@constants/data'
import OpenContactUsButton from './OpenContactUsButton'

export default function About() {
    return (
        <SectionBlock customClass='lg:py-8 bg-black text-gray-100'>
            <div className='flex flex-wrap justify-center items-start overflow-hidden p-8'>
                <div className='w-full md:w-1/4 mx-auto text-left'>
                    <Image
                        src='/media/weston_house.jpg' // Route of the image file
                        height={500} // Desired size with correct aspect ratio
                        width={500} // Desired size with correct aspect ratio
                        alt='Your Name'
                        layout='responsive'
                        maxWidth='600px'
                    />
                </div>
                <div className='w-full md:w-3/4 mx-auto text-left text-lg py-6 md:py-0 md:pl-6'>
                    <h3 className='text-gray-100 leading-tight'>{siteData.neighborhoodName} Community</h3>
                    <h3 className='text-gray-100 leading-tight'>
                        {siteData.city}, {siteData.zip}
                    </h3>
                    <h6 className='text-sm mt-6'>Community agents:</h6>
                    <div className='flex flex-wrap justify-start items-start overflow-hidden py-4'>
                        <a className='flex mr-6 items-center text-center cursor-pointer' target='_blank' href='https://www.compass.com/agents/richard-elias/'>
                            <div className='w-20 rounded-full overflow-hidden'>
                                <Image
                                    src='/media/richard_square.jpg' // Route of the image file
                                    height={200} // Desired size with correct aspect ratio
                                    width={200} // Desired size with correct aspect ratio
                                    alt='Your Name'
                                    layout='responsive'
                                />
                            </div>
                            <h6 className='m-4'>Richard</h6>
                        </a>
                        <a className='flex mr-6 items-center text-center cursor-pointer' target='_blank' href='https://www.compass.com/agents/george-bukes/'>
                            <div className='w-20 rounded-full overflow-hidden'>
                                <Image
                                    src='/media/george_square.jpg' // Route of the image file
                                    height={200} // Desired size with correct aspect ratio
                                    width={200} // Desired size with correct aspect ratio
                                    alt='Your Name'
                                    layout='responsive'
                                />
                            </div>
                            <h6 className='m-4'>George</h6>
                        </a>
                    </div>
                </div>
                <div className='w-full py-4'>
                    <p className='py-4'>{siteData.neighborhoodDescription}</p>
                </div>
                <div className='flex-1 border-t-2 pt-8'>
                    <h6>Interested in buying or selling in the {siteData.neighborhoodName} community?</h6>
                    <OpenContactUsButton text='Contact Us!' />
                </div>
            </div>
        </SectionBlock>
    )
}
