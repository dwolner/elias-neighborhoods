import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionBlock from './SectionBlock'

export default function Listings() {
    const listings = [
        {
            address: '9014 Hightail Drive',
            address2: 'Santee, CA 92071',
            price: '$880,000',
            soldDate: '11/21/20',
            imageFilename: '9014hightail.jpg',
            url: 'https://www.compass.com/listing/9014-hightail-drive-santee-ca-92071/631933008752205817/',
        },
        {
            address: '8869 Trailridge Avenue',
            address2: 'Santee, CA 92071',
            price: '$975,000',
            soldDate: '5/24/21',
            imageFilename: '8869trailridge.jpg',
            url: 'https://www.compass.com/listing/8869-trailridge-avenue-santee-ca-92071/784069718392897657/',
        },
        {
            address: '8860 Hightail Drive',
            address2: 'Santee, CA 92071',
            price: '$1,100,000',
            soldDate: '9/24/21',
            imageFilename: '8860hightail.jpg',
            url: 'https://www.compass.com/listing/8860-hightail-drive-santee-ca-92071/862933980860371145/',
        },
    ]
    return (
        <SectionBlock customClass='lg:py-8 bg-topo text-gray-100'>
            <div className='flex flex-wrap justify-center items-start overflow-hidden px-4 py-8'>
                <div className='w-full px-4'>
                    <h6>Recent Listings</h6>
                </div>
                <AnimatePresence>
                    {listings.map((item) => {
                        return (
                            <motion.a key={item.address} className='w-full sm:w-1/2 md:w-1/3 p-4' href={item.url} target='_blank' whileHover={{ scale: 1.05 }}>
                                <div className='relative overflow-hidden z-0'>
                                    <div className='ribbon z-10 text-center'>
                                        <h6 className='p-1 mt-1 text-sm'>SOLD {item.soldDate}</h6>
                                    </div>
                                    <Image
                                        src={`/media/listings/${item.imageFilename}`}
                                        height={427} // Desired size with correct aspect ratio
                                        width={640} // Desired size with correct aspect ratio
                                        alt={item.imageFilename}
                                        layout='responsive'
                                    />
                                    <div className='absolute bottom-0 w-full p-4 caption-gradient'>
                                        <h5 className='mt-4'>{item.price}</h5>
                                        <h6>{item.address}</h6>
                                        <h6 className='text-sm'>{item.address2}</h6>
                                    </div>
                                </div>
                            </motion.a>
                        )
                    })}
                </AnimatePresence>
            </div>
        </SectionBlock>
    )
}
