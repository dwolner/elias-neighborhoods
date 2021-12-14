import * as actions from './actions'
import { combineReducers } from 'redux'

const modalState = (state = { contactModalVisible: false }, action) => {
    switch (action.type) {
        case actions.TOGGLE_CONTACT_MODAL:
            return { ...state, contactModalVisible: !state.contactModalVisible }

        default:
            return state
    }
}

export default combineReducers({ modalState })
