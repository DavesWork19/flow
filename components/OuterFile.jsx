import React from "react";
import Draggable from "react-draggable";
import styles from '@/styles/Note.module.css'
import { useState } from 'react';
import { useRef } from "react";

//Creates the new Outer File
const OuterFile = ({id}) => {
    const [fileData, setFileData] = useState({
        title: '',
        titleStyle: '',
        saveButton: ''
    });
    const draggableNodeRef = useRef({});

    const handleSubmit = event => {
        event.preventDefault();
        setFileData(() => ({ 
            title: fileData.title,
            titleStyle: styles.titleStyle,
            saveButton: styles.saveButton  
        }));
    }

    const handleTitleChange = event => {
        event.preventDefault();
        setFileData(() => ({
            title: event.target.value
        }));
    }


    return (
        <Draggable nodeRef={draggableNodeRef}>
        
            <div className='mt-3' ref={draggableNodeRef}> 

            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                    className={fileData.titleStyle}
                    type="text" 
                    value={fileData.title}
                    onChange={handleTitleChange}
                    placeholder='Title'
                    spellCheck='false'
                    />
                </label>
                <button type='submit' className={fileData.saveButton}>Save</button>
            </form>

            <div className='border border-primary rounded-4 p-5'></div>
            </div>

        </Draggable>
    );
}

export default OuterFile;