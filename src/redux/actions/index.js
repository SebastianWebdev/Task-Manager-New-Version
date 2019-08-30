import taskAppApi from '../../APIs/taskAppApi'
import getDataFromApi from '../../utils/getDataFromApi'
const login = data => async dispatch => {
    try {
        // getting Data from Api
        const { user, tasks, tasksLists, status, token } = await getDataFromApi("", data.loginData)
        // setting token and user id if rememberMe is checked
        const isLoginOK = status === 200 ? true : false
        data.rememberMe ? localStorage.setItem('token', token) : sessionStorage.setItem("token", token)
        data.rememberMe ? localStorage.setItem('userId', user._id) : localStorage.setItem('userId', "null")
        // dispatching data
        dispatch({ type: 'USER_LOGIN', payload: { user, lists: tasksLists, tasks, isLoginOK, isLogged: true } })
    } catch (e) {
        dispatch({ type: 'USER_LOGIN', payload: { user: null, isLoginOK: false, isLogged: false } })
    }
};
const setDataOnInit = data => {
    const { user, tasks, tasksLists, status } = data
    return { type: "USER_REMEMBERED", payload: { user, tasks, lists: tasksLists, status, isLogged: true } }
}
const register = data => async dispatch => {
    try {
        await taskAppApi.post('/users', data);
        dispatch({ type: "USER_REGISTER", payload: { registrationStatus: "ok" } })
    } catch (e) {
        dispatch({ type: "USER_REGISTER", payload: { registrationStatus: "error" } })
    }
}
const setActiveList = data => {
    return { type: "SET_ACTIVE_LIST", payload: { _id: data._id, temp_id: data.temp_id } }
}
const updateTask = data => {
    return { type: 'UPDATE_TASK', payload: { name: data.taskName, description: data.description, index: data.index } }
}
const updateTaskStage = data => {
    return { type: 'UPDATE_TASK_STAGE', payload: { i: data.index, stage: data.stage } }
}
export { login, register, setDataOnInit, setActiveList, updateTask, updateTaskStage }
