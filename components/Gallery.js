import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import { wrap } from 'popmotion'

const images = [
    '/media/neighborhood_selects/DSC05833.webp',
    '/media/neighborhood_selects/DSC05848.webp',
    '/media/neighborhood_selects/DSC05853.webp',
    '/media/neighborhood_selects/DSC05871.webp',
    '/media/neighborhood_selects/DSC05875.webp',
    '/media/neighborhood_selects/DSC05895.webp',
    '/media/neighborhood_selects/DSC05921.webp',
    '/media/neighborhood_selects/DSC05925.webp',
    '/media/neighborhood_selects/DSC05928.webp',
]
const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
}

export default function Hero() {
    const [[page, direction], setPage] = useState([0, 0])
    const imageIndex = wrap(0, images.length, page)

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <div className='w-full bg-black relative flex justify-center items-center'>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    // variants={variants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag='x'
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1)
                        }
                    }}
                    style={{
                        // maxWidth: '900px',
                        height: '600px',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    {/* <Image
                        className='galleryImage'
                        src={images[imageIndex]}
                        height={1066} // Desired size with correct aspect ratio
                        width={1600} // Desired size with correct aspect ratio
                        alt={images[imageIndex]}
                        layout=''
                    /> */}
                    <img className='galleryImage' src={images[imageIndex]} alt={images[imageIndex]} />
                </motion.div>
            </AnimatePresence>
            <div className='next' onClick={() => paginate(1)}>
                <ChevronRightIcon color='black' />
            </div>
            <div className='prev' onClick={() => paginate(-1)}>
                <ChevronLeftIcon color='black' />
            </div>
        </div>
    )
}
