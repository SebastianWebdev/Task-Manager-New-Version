import React from 'react'
const ListData = (props) => {
    const { activeList, handler, activeListInputs, isListEddited } = props
    return (
        <div className="listHead" data-listid={activeList[0]._id}>
            <textarea placeholder="Nazwa" value={activeListInputs.tittle} data-listid={activeList[0]._id} onChange={handler} name="list-tittle" type="text" className="list-input" />
            <textarea placeholder="Opis" className="list-input" value={activeListInputs.description} data-listid={activeList[0]._id} onChange={handler} name="list-description" type="text" />
            {isListEddited ? <button data-listid={activeList[0]._id} onClick={handler} className="save-btn save-btn-list" >Zapisz zmiany</button> : null}
        </div>
    );
}
export default ListData;