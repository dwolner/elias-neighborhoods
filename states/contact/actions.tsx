export const MODAL_VISIBLE = false

export const toggleContatModal = (modalVisible: boolean) => (dispatch) => {
    return dispatch({ type: MODAL_VISIBLE, modalVisible })
}
