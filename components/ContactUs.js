import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'

export default function ContactUs() {
    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    return (
        <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            exitBeforeEnter={true}
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
        >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}>
                <h1>Contact Us</h1>    
            </Modal>}
        </AnimatePresence>
    )
}
