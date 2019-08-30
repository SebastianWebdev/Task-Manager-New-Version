const registrationReducer = (data = { registrationStatus: "waiting" }, action) => {
    switch (action.type) {
        case 'USER_REGISTER':
            return action.payload

        default:
            return data

    }
}
export default registrationReducer