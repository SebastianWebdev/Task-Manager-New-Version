import React from 'react'
import { Link } from 'react-router-dom'
const AfterReg = props => {
    return (
        <div className="reg-log-wrapper">
            <h1>Konto zostało zarejestrowane</h1>
            <Link to="/login" className="postreg-link" >Możesz się zalogować</Link>
        </div>
    )
}
export default AfterReg