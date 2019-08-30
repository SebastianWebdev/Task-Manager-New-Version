const activeListReducer = (data = {}, action) => {
    switch (action.type) {
        case `SET_ACTIVE_LIST`:
            return action.payload
        default:
            return data
    }
}
export default activeListReducer 