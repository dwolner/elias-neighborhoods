import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import { wrap } from 'popmotion'

const images = [
    '/media/neighborhood_selects/weston_community_photo_1.webp',
    // '/media/neighborhood_selects/weston_community_photo_2.webp',
    '/media/neighborhood_selects/weston_community_photo_3.webp',
    // '/media/neighborhood_selects/weston_community_photo_4.webp',
    '/media/neighborhood_selects/weston_community_photo_5.webp',
    // '/media/neighborhood_selects/weston_community_photo_6.webp',
    '/media/neighborhood_selects/weston_community_photo_7.webp',
    // '/media/neighborhood_selects/weston_community_photo_8.webp',
    '/media/neighborhood_selects/weston_community_photo_9.webp',
    '/media/neighborhood_selects/weston_community_photo_10.webp',
    // '/media/neighborhood_selects/weston_community_photo_11.webp',
    '/media/neighborhood_selects/weston_community_photo_12.webp',
    '/media/neighborhood_selects/weston_community_photo_13.webp',
    '/media/neighborhood_selects/weston_community_photo_14.webp',
    '/media/neighborhood_selects/weston_community_photo_15.webp',
    '/media/neighborhood_selects/weston_community_photo_16.webp',
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
                <ChevronRightIcon color='black' size={16} />
            </div>
            <div className='prev' onClick={() => paginate(-1)}>
                <ChevronLeftIcon color='black' size={16} />
            </div>
        </div>
    )
}
