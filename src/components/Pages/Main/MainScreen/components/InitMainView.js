import React from 'react';
import { connect } from 'react-redux'
const InitMainView = props => {
    const { userName } = props
    return (
        <div className="main__content-wrapper main__init-wrapper">
            <p>Witaj {userName}</p>
        </div>
    );
}
const mapStateToProps = state => {
    return { userName: state.loginData.user.name }
}
export default connect(mapStateToProps)(InitMainView);