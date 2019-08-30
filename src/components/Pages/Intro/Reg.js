import React, { useState } from 'react';
import { connect } from 'react-redux';
import checkRegisterValidation from '../../../utils/checkRegisterValidation';

import { register } from '../../../redux/actions';

import LoadingSmall from '../../LoadingSmall'
const Register = props => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [WaitingForResponse, setWaitingForResponse] = useState(null)
    const handleName = e => {
        setName(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const valid = checkRegisterValidation(name, password, email)
        if (valid) {
            setIsValid(true)
            setWaitingForResponse(true)
            await props.register({ name, email, password })
            setWaitingForResponse(false)
        } else {
            setIsValid(false)
            setName("")
            setPassword("")
            setEmail("")
        }


    }
    return (
        <>
            {WaitingForResponse ? <LoadingSmall /> : null}
            <div className="reg-log-wrapper">
                <h1>Stwórz Konto</h1>
                {!isValid || props.registrationStatus === "error" ? <h2 className="login-alert">Złe dane przy rejestracji</h2> : null}
                <form className="log-form" id="reg" onSubmit={handleSubmit}  >
                    <label htmlFor="reg-name">Nazwa</label>
                    <input onChange={handleName} name="name" value={name} id="reg-name" placeholder="Podaj swoje imię i nazwisko" type="text" />
                    <label htmlFor="reg-mail">Email</label>
                    <input onChange={handleEmail} name="email" value={email} id="reg-mail" placeholder="Podaj email" type="email" />
                    <label htmlFor="reg-pass">Hasło</label>
                    <input onChange={handlePassword} name="pass" value={password} id="reg-pass" placeholder="hasło" type="password" />
                    <button type="submit" className="reg-sub">Stwórz nowe konto</button>
                </form>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    const { registrationStatus } = state.registrationStatus
    if (registrationStatus === "ok") { } else {
        return { registrationStatus: state.registrationStatus.registrationStatus }
    }

}
export default connect(mapStateToProps, { register })(Register)