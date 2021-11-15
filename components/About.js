import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionBlock from './SectionBlock'
import siteData from '@constants/data'

export default function About() {
    return (
        <SectionBlock customClass='lg:py-8 bg-black text-gray-100'>
            <div className='flex flex-wrap justify-center items-start overflow-hidden p-4'>
                <div className='w-full sm:w-1/4 mx-auto text-left'>
                    <Image
                        src='/media/weston_house.jpeg' // Route of the image file
                        height={500} // Desired size with correct aspect ratio
                        width={500} // Desired size with correct aspect ratio
                        alt='Your Name'
                        layout='responsive'
                    />
                </div>
                <div className='w-full sm:w-3/4 mx-auto text-left text-lg py-4 px-1 md:pl-4'>
                    <p>{siteData.neighborhoodDescription}</p>
                    <br />
                    <h6>Interested in buying or selling in the {siteData.neighborhoodName} community?</h6>

                    <button className='w-full bg-black border border-gray-100 rounded-md my-2 p-2'>
                        <h6>Contact Us!</h6>
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-start overflow-hidden p-4'>
                <div className='w-40 mx-auto text-center'>
                    <div className='rounded-full overflow-hidden'>
                        <Image
                            src='/media/richard_square.jpg' // Route of the image file
                            height={500} // Desired size with correct aspect ratio
                            width={500} // Desired size with correct aspect ratio
                            alt='Your Name'
                            layout='responsive'
                        />
                    </div>
                    <h6 className='my-2'>Richard Elias</h6>
                </div>
                <div className='w-40 mx-auto text-center'>
                    <div className='rounded-full overflow-hidden'>
                        <Image
                            src='/media/richard_square.jpg' // Route of the image file
                            height={500} // Desired size with correct aspect ratio
                            width={500} // Desired size with correct aspect ratio
                            alt='Your Name'
                            layout='responsive'
                        />
                    </div>
                    <h6 className='my-2'>George</h6>
                </div>
            </div>
        </SectionBlock>
    )
}
