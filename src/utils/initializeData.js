import getDataFromApi from './getDataFromApi'
const initializeData = async () => {
    const token = localStorage.getItem('token')
    if (token) {
        return getDataFromApi(token)
    }
    return null
}
export default initializeData