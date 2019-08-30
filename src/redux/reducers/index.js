import { combineReducers } from 'redux'

import loginReducer from './GetUserWhenLogin'

import registrationReducer from './registrationReducer'

import activeListReducer from './setActiveListReducer'

export default combineReducers({
    loginData: loginReducer,
    registrationStatus: registrationReducer,
    activeList: activeListReducer,
})