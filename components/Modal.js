import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import { XIcon } from '@heroicons/react/outline'

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
}

export default function Modal({ handleClose, children }) {
    return (
        <Backdrop className='z-20' onClick={handleClose}>
            <motion.div className='p-4'>
                <motion.div onClick={(e) => e.stopPropagation()} className='modalContent' variants={dropIn} initial='hidden' animate='visible' exit='exit'>
                    <div className='text-right'>
                        <button className='w-6' onClick={handleClose}>
                            <XIcon color="black" />
                        </button>
                    </div>
                    {children}
                </motion.div>
            </motion.div>
        </Backdrop>
    )
}