import taskAppApi from '../APIs/taskAppApi'
const updateTaskToDatabase = async data => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token')
    const { id, body } = data
    try {
        taskAppApi.patch(`/tasks/${id}`, body, { headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
        console.log(error, "coś poszło nie tak z wysłaniem zmian na server przy tasku");
    }
}
export default updateTaskToDatabase