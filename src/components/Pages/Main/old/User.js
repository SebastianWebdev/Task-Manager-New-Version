import React, { useEffect, useState } from 'react'
import './components Css/User.css'
//import AddAvatar from './addAvatar'
const User = (props) => {
    const { _id, avatar, } = props.user
    const { handlers, isUserEddited, userInputs } = props
    const { name, email } = userInputs
    const [isAddAvatar, setIsAddAvatar] = useState(false)
    const [isAvatarFocus, setIsAvatarFocus] = useState(false)
    useEffect(() => {
        return handlers.userResetInputs()
    }, [])
    const btnHandler = e => {
        setIsAddAvatar(true)
    }
    const handleCloseAddAvatar = () => {
        setIsAddAvatar(false)
    }
    const mouseHandler = e => {
        if (e.type === "mouseenter") {
            setIsAvatarFocus(true)
        } else {
            setIsAvatarFocus(false)
        }
    }
    const visible = {
        visibility: 'visible'
    }
    const hidden = {
        visibility: 'hidden'
    }
    /* return (
         <div className="user-wrapper" data-userid={_id}>
             {isAddAvatar ? <AddAvatar closeAvatar={handleCloseAddAvatar} setAvatar={handlers.setNewAvatarToLocaState} userId={_id} /> : <div onMouseLeave={mouseHandler} onMouseEnter={mouseHandler} className="avatar-wrapper">{avatar ? <img className="user-avatar-img" src={avatar} alt="user avatar" /> : <i className="fas fa-user no-img-avatar"></i>}
                 <div style={isAvatarFocus ? visible : hidden} className="avatar-settings">
                     <button onClick={btnHandler} className="avatar-settings-btn btn-rec">Zmień avatar</button>
                 </div>
             </div>}
             <label className="userLabels" htmlFor='userName'>Nazwa</label>
             <input data-type="name" onChange={handlers.userInputsHandler} id="userName" value={name} className="input-disp input-user input-user_name" type="text" />
             <label className="userLabels" htmlFor='userEmail'>E-mail</label>
             <h1 className="input-disp input-user input-user_email">{email}</h1>
             {isUserEddited ? <button onClick={handlers.userSaveHandler} className="user-button-save save-btn"> Zapisz zmiany</button> : null}
         </div>
     );*/
    return (
        <div></div>
    )
}

export default User;