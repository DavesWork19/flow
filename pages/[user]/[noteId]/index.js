import Head from 'next/head'
import styles from '@/styles/Note.module.css'
import { useState } from 'react';

//Creates the new Outer File
const AddOuterFile = () => {
    const [fileData, setFileData] = useState({
        title: '',
        titleStyle: ''
    });

    const handleChange = (event) => {
        setFileData(() => ({ 
            title: event.target.value
         }));
    }

    const handleInput = () => {
        setFileData(() => ({ 
            titleStyle: styles.titleStyleInput
         }));
    }

    const handleTitleChange = () => {
        setFileData(() => ({ 
            titleStyle: styles.titleStyle
         }));
    }


    return (
        <div className='mt-3 px-3'> 
            <input className={`${fileData.titleStyle}`} value={fileData.title} onChange={handleChange} onClick={handleInput} placeholder='Enter Title' spellCheck='false' />
            <button className='border border-primary' onClick={handleTitleChange} >Save</button>
            
            <div className='border border-primary rounded-4 p-5'></div>
        </div>
    );
}

//Manages all Outer Files and positions
const OuterContainer = () => {
    const [style, setStyle] = useState(styles.noBox);
    const [allOuterContainers, setAllOuterContainers] = useState([]);
    const [atLeastOneOuterFileExists, setAtLeastOneOuterFileExists] = useState(false);

    const handleRemoval = fileId => {
        const newFiles = allOuterContainers.filter(obj => obj.id !== fileId);
        setAllOuterContainers(oldFiles => [...newFiles]);
    }
    
    const addOuterFile = (event) => {
        event.preventDefault();

        const objectLength = Object.keys(allOuterContainers).length;
        const newObj = {
            id: objectLength,
            file: <AddOuterFile />
        };
        setAllOuterContainers(oldArray => [...oldArray, newObj]);
        setStyle(styles.box);
        setAtLeastOneOuterFileExists(true);
    }

    return (
        <>
            <Head>
                <title>Flow</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main} >
                <h1>Note Title</h1>
            
                <div className='row border border-primary p-3'>
                    <button className={`col-3 ${style}`} onClick={addOuterFile}>Add Outer File</button>
                    <button className='col-3'>Add Class</button>
                    <button className='col-3'>Add Function</button>
                    <button className='col-3'>Add Connection</button>
                </div>
                
                <div>
                    {atLeastOneOuterFileExists && 
                    allOuterContainers.map(files => 
                        <div key={files.id}>
                            {files.file}
                            <button className='rounded-3' onClick={() => handleRemoval(files.id)}>Remove File</button>
                        </div>)}
                </div>
    
            </main>
        </>
    );
}

export default OuterContainer;