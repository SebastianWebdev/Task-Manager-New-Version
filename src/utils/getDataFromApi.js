import taskAppApi from '../APIs/taskAppApi'
const getDataFromApi = async (token, loginData = null) => {
    if (loginData) {
        const loginResponse = await taskAppApi.post('/users/login', loginData)
        const tasks = await taskAppApi.get('/tasks', { headers: { Authorization: `Bearer ${loginResponse.data.token}` } })
        const tasksLists = await taskAppApi.get('/lists', { headers: { Authorization: `Bearer ${loginResponse.data.token}` } })
        return { user: loginResponse.data.user, tasks: tasks.data, tasksLists: tasksLists.data, token: loginResponse.data.token, status: loginResponse.status }
    }
    if (token) {
        const user = await taskAppApi.get('users/me', { headers: { Authorization: `Bearer ${token}` } })
        const tasks = await taskAppApi.get('/tasks', { headers: { Authorization: `Bearer ${token}` } })
        const tasksLists = await taskAppApi.get('/lists', { headers: { Authorization: `Bearer ${token}` } })
        return { user: user.data, tasks: tasks.data, tasksLists: tasksLists.data, status: user.status }
    } else { throw new Error("You must past a token to this function getDataFromApi or past loginData to get Token from API") }
}
export default getDataFromApi