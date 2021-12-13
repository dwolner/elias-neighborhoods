import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionBlock from './SectionBlock'
import siteData from '@constants/data'

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
                    <p>{siteData.neighborhoodDescription}</p>
                    <br />
                    <h6>Interested in buying or selling in the {siteData.neighborhoodName} community?</h6>

                    <div className='flex flex-wrap justify-center items-start overflow-hidden p-4 mt-4'>
                        <a className='w-20 mx-auto text-center cursor-pointer' target='_blank' href='https://www.compass.com/agents/richard-elias/'>
                            <div className='rounded-full overflow-hidden'>
                                <Image
                                    src='/media/richard_square.jpg' // Route of the image file
                                    height={200} // Desired size with correct aspect ratio
                                    width={200} // Desired size with correct aspect ratio
                                    alt='Your Name'
                                    layout='responsive'
                                />
                            </div>
                            <h6 className='my-2'>Richard</h6>
                        </a>
                        <a className='w-20 mx-auto text-center cursor-pointer' target='_blank' href='https://www.compass.com/agents/george-bukes/'>
                            <div className='rounded-full overflow-hidden'>
                                <Image
                                    src='/media/george_square.jpg' // Route of the image file
                                    height={200} // Desired size with correct aspect ratio
                                    width={200} // Desired size with correct aspect ratio
                                    alt='Your Name'
                                    layout='responsive'
                                />
                            </div>
                            <h6 className='my-2'>George</h6>
                        </a>
                    </div>
                </div>
                <button className='w-full bg-black border border-gray-100 rounded-md my-2 p-2'>
                    <h6>Contact Us!</h6>
                </button>
            </div>
        </SectionBlock>
    )
}
