
const loginReducer = (data = {}, action) => {
    const newData = { ...data }


    switch (action.type) {
        case 'USER_LOGIN':
            return action.payload
        case 'USER_REMEMBERED':
            return action.payload
        case 'UPDATE_TASK':
            const { name, description, index } = action.payload
            newData.tasks[index].name = name
            newData.tasks[index].description = description
            return newData
        case 'UPDATE_TASK_STAGE':
            const { i, stage } = action.payload
            newData.tasks[i].stage = stage
            return newData
        default:
            return data

    }
}
export default loginReducer