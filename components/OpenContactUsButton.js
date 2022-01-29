import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { TOGGLE_CONTACT_MODAL } from '../actions'

export default function OpenContactUsButton({ text }) {
    const dispatch = useDispatch()

    return (
        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.9 }} className='w-full bg-black text-gray-100 border border-gray-100 rounded-md my-2 py-2 px-4' onClick={() => dispatch({ type: TOGGLE_CONTACT_MODAL })}>
            {text}
        </motion.button>
    )
}
