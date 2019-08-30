import React from 'react';
import './styles/LoadingSmall.css'
const LoadingSmall = props => {
    return (
        <div className="loading_small--bg">
            <div className="loading_bars--wrapper">
                <div className="loading_bar">
                    <div className="loading_bar--end"></div>
                    <div className="loading_bar--end"></div>
                </div>
                <div className="loading_bar">
                    <div className="loading_bar--end"></div>
                    <div className="loading_bar--end"></div>
                </div>
                <div className="loading_bar">
                    <div className="loading_bar--end"></div>
                    <div className="loading_bar--end"></div>
                </div>
                <div className="loading_bar">
                    <div className="loading_bar--end"></div>
                    <div className="loading_bar--end"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingSmall;