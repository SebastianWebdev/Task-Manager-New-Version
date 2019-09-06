import React, { useState, useEffect } from 'react';
import './styles/DropDown.css'
const DropDownOption = props => {
    const { option, handle, activeOption, styles } = props
    const activeStyle = styles ? styles : { backgroundColor: "blue", cursor: "pointer" }

    const handleClick = e => {
        handle(option.id, option.tittle)
    }

    return (
        <li style={activeOption === option.id ? activeStyle : null} className="dropDown__item" onClick={handleClick}>
            <p className="dropDown__item__title">
                {option.tittle}
            </p>
        </li>
    );
}

const DropDownMenu = props => {
    const { options, callback, defaultOption, activeOptionStyles } = props
    const [activeOption, setActiveOption] = useState("default");
    const [activeOptionName, setActiveOptionName] = useState(defaultOption.tittle ? defaultOption.tittle : options[0].tittle)
    const [dropOpen, setDropOpen] = useState(false);

    const handleOption = (id, name) => {
        setActiveOption(id);
        setActiveOptionName(name);
        setDropOpen(false);
    }

    useEffect(() => {
        callback(activeOption)
    }, [activeOption])

    const dropElements = options.map(i => <DropDownOption styles={activeOptionStyles} activeOption={activeOption} key={i.id} option={i} handle={handleOption} />)

    if (defaultOption) {
        dropElements.splice(0, 0, <DropDownOption styles={activeOptionStyles} activeOption={activeOption} key={defaultOption.id} option={defaultOption} handle={handleOption} />)
    }
    const styleDropOpen = { transform: 'scaleY(1)' }
    const styleDropClose = { transform: 'scaleY(0)' }
    const syleIconClose = {}
    const styleIconOpen = { color: "#1d75a8" }

    const handleOpenDrop = e => {
        if (dropOpen) {
            setDropOpen(false)
        } else {
            setDropOpen(true)
        }
    }

    return (
        <div className="drop-down-menu">
            <div onClick={handleOpenDrop} className="dropDown__init-window">
                <p className="drop-down-menu__name">{activeOptionName}</p>
                <i style={dropOpen ? styleIconOpen : null} className="fas fa-sort-down"></i>
            </div>
            <ul style={dropOpen ? styleDropOpen : styleDropClose} className="drop-down-menu__list">
                {dropElements}
            </ul>

        </div>
    );
}

export default DropDownMenu;