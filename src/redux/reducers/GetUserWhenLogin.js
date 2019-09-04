
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
        case 'DELETE_TASK':
            if (true) {
                const { i, id, isDeleted } = action.payload
                const newData = { ...data }
                if (isDeleted) {
                    newData.tasks.splice(i, 1);
                    return newData
                } else {
                    return { error: { message: 'error when trying to delete task from serwer', taskId: id } }
                }

            }
        case 'ADD_TASK':
            const { task } = action.payload
            newData.tasks.push(task)
            return newData
        default:
            return data

    }
}
export default loginReducer