import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionBlock from './SectionBlock'
import siteData from '@constants/data'
import OpenContactUsButton from './OpenContactUsButton'

export default function About() {
    return (
        <SectionBlock customClass='lg:py-8 bg-topo text-gray-100'>
            <div className='flex flex-wrap justify-center items-start overflow-hidden p-8'>
                <div className='w-full md:w-1/4 mx-auto text-left'>
                    <Image
                        src='/media/DSC05875.webp' // Route of the image file
                        height={500} // Desired size with correct aspect ratio
                        width={500} // Desired size with correct aspect ratio
                        alt='Your Name'
                        layout='responsive'
                    />
                </div>
                <div className='w-full md:w-3/4 mx-auto text-left text-lg py-6 md:py-0 md:pl-6'>
                    <h3 className='text-gray-100 leading-tight'>{siteData.neighborhoodName} Community</h3>
                    <h3 className='text-gray-100 leading-tight'>
                        {siteData.city} {siteData.zip}
                    </h3>
                    <h6 className='text-sm mt-6'>Community agents:</h6>
                    <div className='flex flex-wrap justify-start items-start py-4'>
                        <AnimatePresence>
                            <motion.a key='richard' className='flex mr-6 mt-2 items-center text-left cursor-pointer' target='_blank' href='https://www.compass.com/agents/richard-elias/' whileHover={{ scale: 1.05 }}>
                                <div className='w-20 rounded-full overflow-hidden'>
                                    <Image
                                        src='/media/richard_square.webp' // Route of the image file
                                        height={200} // Desired size with correct aspect ratio
                                        width={200} // Desired size with correct aspect ratio
                                        alt='Your Name'
                                        layout='responsive'
                                    />
                                </div>
                                <div>
                                    <h6 className='mx-2 text-md'>Richard</h6>
                                    <h6 className='mx-2 text-sm'>619-672-2020</h6>
                                    <h6 className='mx-2 text-sm'>richard.elias@compass.com</h6>
                                    <h6 className='mx-2 text-sm'>DRE 01104411</h6>
                                </div>
                            </motion.a>
                            <motion.a key='george' className='flex mr-6 mt-2 items-center text-left cursor-pointer' target='_blank' href='https://www.compass.com/agents/george-bukes/' whileHover={{ scale: 1.05 }}>
                                <div className='w-20 rounded-full overflow-hidden'>
                                    <Image
                                        src='/media/george_square.webp' // Route of the image file
                                        height={200} // Desired size with correct aspect ratio
                                        width={200} // Desired size with correct aspect ratio
                                        alt='Your Name'
                                        layout='responsive'
                                    />
                                </div>
                                <div>
                                    <h6 className='mx-2 text-md'>George</h6>
                                    <h6 className='mx-2 text-sm'>808-256-8028</h6>
                                    <h6 className='mx-2 text-sm'>george.bukes@compass.com</h6>
                                    <h6 className='mx-2 text-sm'>DRE 01937149</h6>
                                </div>
                            </motion.a>
                        </AnimatePresence>
                    </div>
                </div>
                <div className='w-full py-4'>
                    <p className='py-4'>{siteData.neighborhoodDescription}</p>
                </div>
                <div className='flex-1 border-t-2 pt-8'>
                    <h6>Interested in buying or selling in the {siteData.neighborhoodName} community?</h6>
                    <OpenContactUsButton text='Get Started!' />
                </div>
            </div>
        </SectionBlock>
    )
}
