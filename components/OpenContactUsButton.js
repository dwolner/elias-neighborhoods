import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function OpenContactUsButton({ text }) {
    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    return (
        <div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='save-button' onClick={() => (modalOpen ? close() : open())}>
                {text}
            </motion.button>
        </div>
    )
}
