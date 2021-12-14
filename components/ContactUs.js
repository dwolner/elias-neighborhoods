import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { TOGGLE_CONTACT_MODAL } from '../actions'
import Modal from './Modal'

export default function ContactUs() {
    const contactModalVisible = useSelector((state) => state.modalState.contactModalVisible)
    const dispatch = useDispatch()

    const formInputs = [{
        placeholder: 'Your Name',
        type: 'text'
    }, {
        placeholder: 'Your Email',
        type: 'text'
    }, {
        placeholder: 'Your Zip',
        type: 'text'
    }, {
        placeholder: 'Your Number',
        type: 'text'
    }]
    const inquiryTypes = ['General', 'Buying', 'Selling', 'Concierge', 'Private Exclusive', 'Sellers Home Digest', 'Buyers Home Digest', 'Other']

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
            {contactModalVisible && (
                <Modal handleClose={() => dispatch({ type: TOGGLE_CONTACT_MODAL })}>
                    <div className='px-4'>
                        <h6 className='uppercase'>Weston Community</h6>
                        <h1 className='Compass-Serif-Regular'>Contact</h1>
                        <div className='border-b-2'></div>
                    </div>
                    <div className='px-2 py-4 flex flex-wrap'>
                        {formInputs.map((inputObj) => (
                            <div className='w-full md:w-1/2 p-2'>
                                <input
                                    type={inputObj.type}
                                    className='
                                    w-full 
                                    form-input 
                                    px-4 
                                    py-3 
                                    rounded-md
                                    bg-gray-100
                                    border-transparent
                                    focus:border-gray-500 
                                    focus:bg-white 
                                    focus:ring-0'
                                    placeholder={inputObj.placeholder}
                                />
                            </div>
                        ))}
                        <div className='w-full p-2'>
                            <p className='text-sm pl-1'>Inquiry Type</p>
                            <select
                                className='
                                w-full 
                                form-select 
                                px-4 
                                py-3 
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 
                                focus:bg-white 
                                focus:ring-0'
                                placeholder='Inquiry Type'
                            >
                                {inquiryTypes.map((type) => (
                                    <option value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full flex justify-between p-2'>
                            <button className='bg-black text-gray-100 border border-gray-100 rounded-md my-2 py-2 px-6'>
                                <h6 className='uppercase'>Work With Us</h6>
                            </button>
                            <button className='border border-gray-100 rounded-md my-2 py-2 px-6'>
                                <h6 className='uppercase'>Reset</h6>
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </AnimatePresence>
    )
}
