import React, { useState } from 'react'
import { connect } from 'react-redux'
import LoadingSmall from '../../LoadingSmall'
import { login } from '../../../redux/actions/index'
const Login = props => {
    // state from redux
    let { isLoginOk } = props
    // local state
    const [loginPassword, setloginPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [waitingForResponse, setWaitingForResponse] = useState(false)

    const handlePassword = e => {
        setloginPassword(e.target.value)
    }
    const handleEmail = e => {
        setLoginEmail(e.target.value)
    }
    const handleRememberMe = e => {
        setRememberMe(e.target.checked)
    }
    const handleSubmit = async e => {
        e.preventDefault()

        setWaitingForResponse(true)
        // actions creators
        await props.login({
            loginData: {
                email: loginEmail,
                password: loginPassword,
            },
            rememberMe,
        })
        setWaitingForResponse(false)
        // reseting form
        setLoginEmail("")
        setloginPassword("")
        setRememberMe(false)
    }
    return (
        <>
            {waitingForResponse ? <LoadingSmall /> : null}
            <div className="reg-log-wrapper">
                <h1>Zaloguj się do konta</h1>
                {isLoginOk === false ? <h2 className="login-alert">Zły login lub hasło</h2> : null}
                <form className="log-form" id="login" onSubmit={handleSubmit}  >
                    <label htmlFor="reg-mail">Email</label>
                    <input onChange={handleEmail} name="email" value={loginEmail} id="reg-mail" placeholder="Podaj email" type="email" />
                    <label htmlFor="reg-pass">Hasło</label>
                    <input onChange={handlePassword} name="pass" value={loginPassword} id="reg-pass" placeholder="hasło" type="password" />
                    <label htmlFor="rememberMe">Zapamiętaj mnie</label>
                    <input onChange={handleRememberMe} type="checkbox" id="rememberMe" name="rememberMe" />
                    <button type="submit" className="reg-sub">Zaloguj się</button>
                </form>
            </div >
        </>
    )
}

const mapStateToProps = state => {
    return { isLoginOk: state.loginData.isLoginOK }
}

export default connect(mapStateToProps, { login })(Login)