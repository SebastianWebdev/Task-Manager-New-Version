const findTaskIndex = (tasks = [], id = "", tempId = "") => {
    const indexById = tasks.findIndex(task => task._id === id)
    const indexByTempId = tasks.findIndex(task => task.temp_Id === tempId)
    return indexById > -1 ? indexById : indexByTempId
}
export default findTaskIndex