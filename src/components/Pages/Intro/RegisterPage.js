import React, { useState } from 'react';
import { connect } from 'react-redux'
import './css/Register.css'
import Register from "./Reg"
import AfterReg from "./AfterReg"

const RegisterPage = props => {
    const { registrationStatus } = props
    return (
        <>
            {registrationStatus === "waiting" || registrationStatus === "error" ? <Register props={props} /> : <AfterReg />}
        </>
    )
}
const mapStateToProps = state => {
    return { registrationStatus: state.registrationStatus.registrationStatus }
}
export default connect(mapStateToProps)(RegisterPage)