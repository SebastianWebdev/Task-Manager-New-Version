import taskAppApi from '../APIs/taskAppApi'
const updateTaskToDatabase = async data => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token')
    const { id, body, type } = data
    const auth = { Authorization: `Bearer ${token}` }
    if (type === "patch") {
        try {
            taskAppApi.patch(`/tasks/${id}`, body, { headers: auth })
        } catch (error) {
            console.log(error, "coś poszło nie tak z wysłaniem zmian na server przy tasku");
        }
    }
    if (type === 'delete') {
        try {
            taskAppApi.delete(`/tasks/${id}`, { headers: auth })

        } catch (error) {
            console.log(error, `Deleting task ID:${id} went wrong`);
        }

    }
    if (type === "add") {
        const { name, description, list, temp_Id } = body

        try {
            const response = await taskAppApi.post(`/tasks/`, { name, description, list_id: list, temp_Id }, { headers: auth })
            return response.data
        } catch (error) {
            console.log(error, `Adding task faild`);
        }
    }

}
export default updateTaskToDatabase