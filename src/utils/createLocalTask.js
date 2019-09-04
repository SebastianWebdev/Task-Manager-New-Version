const createLocalTask = (name, description, list, userId) => {
    const createdAt = new Date().toISOString()
    const tempId = new Date().getTime()
    if (!userId) {
        userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : sessionStorage.getItem("userId")
    }
    const body = {
        completed: false,
        owner: userId,
        description: description,
        name: name,
        stage: 1,
        list,
        createdAt,
        updatedAt: createdAt,
        _id: '',
        temp_Id: tempId
    }
    return body
}
export default createLocalTask