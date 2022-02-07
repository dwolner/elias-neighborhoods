import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionBlock from './SectionBlock'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    TOGGLE_VIDEO_MODAL
} from '../actions'
import Modal from './Modal'


export default function Videos() {
    const videoModalVisible = useSelector((state) => state.modalState.videoModalVisible)
    const [selectedVideoData, setSelectedVideoData] = useState(undefined);
    const dispatch = useDispatch()

    const listings = [
        {
            title: 'Likely To Sell',
            videoFilename: '01_likely_to_sell.mp4',
            videoCoverImage: '01_likely_to_sell.webp'
        },
        {
            title: 'Seller Process',
            videoFilename: '02_seller_process.mp4',
            videoCoverImage: '02_seller_process.webp'
        },
        {
            title: 'Seller Tips',
            videoFilename: '03_seller_tips.mp4',
            videoCoverImage: '03_seller_tips.webp'
        },
        {
            title: 'Compass For Sellers',
            videoFilename: '04_compass_for_sellers.mp4',
            videoCoverImage: '04_compass_for_sellers.webp'
        },
    ]
    return (
        <SectionBlock customClass='lg:py-8 bg-black text-gray-100'>
            <div className='flex flex-wrap justify-center items-start overflow-hidden px-4 py-8'>
                <div className='w-full px-4'>
                    <h6>Relevant Videos</h6>
                </div>
                <AnimatePresence>
                    {listings.map((item) => {
                        return (
                            <motion.a key={item.title} className='w-full sm:w-1/2 md:w-1/4 p-2' whileHover={{ scale: 1.05 }} onClick={e => {
                                setSelectedVideoData(item)
                                dispatch({
                                    type: TOGGLE_VIDEO_MODAL
                                })
                            }}>
                                <div className='relative overflow-hidden z-0'>
                                    <Image
                                        src = {
                                            `/media/videoCoverImage/${item.videoCoverImage}`
                                        }
                                        height={640} // Desired size with correct aspect ratio
                                        width={640} // Desired size with correct aspect ratio
                                        alt = {
                                            item.videoCoverImage
                                        }
                                        layout='responsive'
                                    />
                                    {/* <div className='absolute bottom-0 w-full p-4 caption-gradient'>
                                        <h5 className='mt-4'>{item.price}</h5>
                                        <h6>{item.title}</h6>
                                        <h6 className='text-sm'>{item.address2}</h6>
                                    </div> */}
                                </div>
                            </motion.a>
                        )
                    })}
                    {
                        videoModalVisible && selectedVideoData && (
                        <Modal key="videoModal" handleClose={() => dispatch({ type: TOGGLE_VIDEO_MODAL })}>
                            <div className='px-4 text-black'>
                                <h6 className='uppercase'>{selectedVideoData.title}</h6>
                                <div className='border-b-2'></div>
                            </div>
                            <div className='px-2 py-4 flex flex-wrap'>
                                <video autoPlay controls muted loop width="100%">
                                    <source src={`/media/videos/${selectedVideoData.videoFilename}`} type="video/mp4"></source>
                                </video>
                            </div>
                        </Modal>
                    )}
                </AnimatePresence>
            </div>
        </SectionBlock>
    )
}
