import { Contact } from './state'
import * as contactActions from './actions'

const initialState: Contact = {
    modalVisible: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case contactActions.MODAL_VISIBLE:
            return Object.assign({}, state, { modalVisible: action.modalVisible })
        default:
            return state
    }
}
