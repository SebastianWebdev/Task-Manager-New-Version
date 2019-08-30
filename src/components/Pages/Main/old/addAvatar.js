import React, { useState } from 'react'
import './components Css/AddAvatar.css'
import handleDroppedFiles from '../functions/handleDroppedFiles'
import previevFiles from '../functions/previevFile'
import PrevImg from './PrevImg'
import checkAvatar from '../functions/checkAvatar'
const AddAvatar = (props) => {
    const { setAvatar, closeAvatar } = props
    const [droppedFile, setDroppedFile] = useState()
    const [isclicked, setIsclicked] = useState(false)
    const [isFile, setIsFile] = useState(false)
    const [prevurl, setPrevUrl] = useState([])
    const [isUploaded, setIsUploaded] = useState(false)
    const [isOnDraggedArea, setIsOnDraggedArea] = useState(false)
    const dragHandler = e => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter") {
            setIsOnDraggedArea(true)
        } else if (e.type === "dragleave") {
            setIsOnDraggedArea(false)
        } else if (e.type === "dragover") {
            setIsOnDraggedArea(true)
        } else if (e.type === "drop") {
            setIsOnDraggedArea(false)
            const dt = e.dataTransfer
            const file = dt.files
            if (file.length !== 1) {
                alert("Możesz wybrać tylkok jedno zdjęcie")
            } else if (checkAvatar(file[0].type)) {
                setDroppedFile(file)
                setIsclicked(false)
                const reader = previevFiles(file)
                reader.onloadend = () => {
                    const src = reader.result
                    setPrevUrl(src)
                    setIsFile(true)
                }
            } else {
                alert("Zły rodzaj pliku!")
            }
        }
    }
    const handleInput = e => {
        e.preventDefault()
        setIsclicked(false)
        const file = e.target.files
        setDroppedFile(file)
        const reader = previevFiles(file)
        reader.onloadend = () => {
            const src = reader.result
            setPrevUrl(src)
            setIsFile(true)
        }
    }
    const handleClick = e => {
        handleDroppedFiles(droppedFile).then(res => {
            if (res.status === 200) {
                setIsUploaded(true)
                setIsclicked(true)
                setTimeout(() => {
                    closeAvatar()
                    setAvatar(prevurl)
                }, 1000)
            }
        })
    }

    return (
        <div className='uploud-avatar-wrapper'>
            <div className={`dragg-area ${isOnDraggedArea ? 'highlight' : null}`} onDragEnter={dragHandler} onDragLeave={dragHandler} onDragOver={dragHandler} onDrop={dragHandler}>
                {isUploaded ? <p className="drop-desc">Zdjęcie zostało wysłane</p> : <> <p className="drop-desc">Przeciągnij tutaj Plik</p>
                    <p className="drop-desc">Albo Wybierz z listy </p><i className="fas fa-arrow-down"></i>
                    <form action="">
                        <label className="avatar-input-label btn-rec" htmlFor="avatar-input">Wybierz avatar</label>
                        <input onChange={handleInput} type="file" id="avatar-input" name="avatar"
                            accept="image/png, image/jpeg" />
                    </form> </>}

                {isFile ? <div className="previev-galery">
                    <PrevImg url={prevurl} />
                    {!isclicked ? <button onClick={handleClick} className="send-avatar-button save-btn">Wyślij zdjęcie</button> : null}
                </div> : null}
            </div>

        </div>
    );
}

export default AddAvatar;