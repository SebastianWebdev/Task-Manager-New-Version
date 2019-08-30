
const loginReducer = (data = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return action.payload
        case 'USER_REMEMBERED':
            return action.payload
        case 'UPDATE_TASK':
            const { name, description, index } = action.payload
            const newData = { ...data }

            newData.tasks[index].name = name
            newData.tasks[index].description = description

            return newData

        default:
            return data

    }
}
export default loginReducer