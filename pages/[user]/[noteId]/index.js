import Head from 'next/head'
import styles from '@/styles/Note.module.css'
import { useState } from 'react';

//Creates the new file
const AddFile = () => {
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
        <div className='mt-3 p-3'> 
            <input className={`${fileData.titleStyle}`} value={fileData.title} onChange={handleChange} onClick={handleInput} placeholder='Enter Title' spellCheck='false' />
            <button className='border border-primary' onClick={handleTitleChange} >Save</button>
            
            <div className='border border-primary p-5'></div>
        </div>
    );
}

//Manages all files and positions
const Files = () => {
    const [style, setStyle] = useState(styles.noBox);
    const [allFiles, setAllFiles] = useState([]);
    const [atLeastOneFileExists, setAtLeastOneFileExists] = useState(false);

    const handleRemoval = (count) => {
        let copyOfObject = { ...allFiles }
        delete copyOfObject['propertyToRemove']

        setShopCart( shopCart => ({
            ...copyOfObject
            }));
    }
    
    const addFile = (event) => {
        event.preventDefault();
    
        
        const objectLength = Object.keys(allFiles).length;
        const newObj = {
            id: objectLength,
            file: <AddFile />
        };
        setAllFiles(oldArray => [...oldArray, newObj]);
        setStyle(styles.box);
        setAtLeastOneFileExists(true);
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
                    <button className={`col-3 ${style}`} onClick={addFile}>Add File</button>
                    <button className='col-3'>Add Class</button>
                    <button className='col-3'>Add Function</button>
                    <button className='col-3'>Add Connection</button>
                </div>
                
                <div>
                    {atLeastOneFileExists && 
                    allFiles.map(files => 
                        <div key={files.id}>
                            {files.file}
                        </div>)}
                </div>
    
            </main>
        </>
    );
}

export default Files;