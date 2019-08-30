import React from 'react'
import "./components Css/List.css"
import ListData from './ListData'
import Stage from './Stage'
const List = props => {

    return (
        <div className="app-window-box box-full" >
            {<ListData />}
            <div className="tasks-wrapper">
                <Stage stageName='Do Zrobienia' />
                <Stage stageName='W trakcie' />
                <Stage stageName='Zrobione' />
            </div>
        </div >
    )
}
export default List