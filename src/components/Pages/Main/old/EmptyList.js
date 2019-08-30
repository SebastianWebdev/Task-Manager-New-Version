import React from "react"
import './components Css/EmptyList.css'
const EmptyList = (props) => {
    const { data } = props
    return (
        <div className="app-window-box box-empty">
            <h1 className="empty-list-text">Witaj {data.user.name}</h1>
            {data.lists.length > 0 ? <h1 className="empty-list-text">Zacznij pracę ze swoimi zadaniami</h1> : <h1 className="empty-list-text">Dodaj listę Zadań</h1>}
        </div>
    );
}

export default EmptyList;