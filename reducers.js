import * as actions from './actions'
import { combineReducers } from 'redux'

const modalState = (state = {
        contactModalVisible: false,
        videoModalVisible: false
    }, action) => {
    switch (action.type) {
        case actions.TOGGLE_CONTACT_MODAL:
            return { 
                ...state, 
                contactModalVisible: !state.contactModalVisible 
            }
        case actions.TOGGLE_VIDEO_MODAL:
            return {
                ...state,
                videoModalVisible: !state.videoModalVisible
            }

        default:
            return state
    }
}

export default combineReducers({ modalState })
