import Head from 'next/head'
import styles from '@/styles/Note.module.css'
import { useState } from 'react';
import OuterFile from '@/components/OuterFile';



//Create ability to copy outer file like for versioning





//Manages all Outer Files and positions
const OuterContainer = () => {
    const [style, setStyle] = useState(styles.noBox);
    const [allOuterContainers, setAllOuterContainers] = useState([]);
    const [fileID, setFileID] = useState(0);
    
    const addOuterFile = (event) => {
        event.preventDefault();

        const newFileID = fileID + 1;
        const newObj = {
            id: newFileID,
            file: <OuterFile id={newFileID} />
        };
        setFileID(prevID => prevID + 1);
        setAllOuterContainers(oldArray => [...oldArray, newObj]);
        setStyle(styles.box);
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
                    <button className={`btn btn-outline-primary col-4 ${style}`} onClick={addOuterFile}>Add Outer File</button>
                    <span className='col-4'></span>
                    <button className='col-4'>Add Text File</button>
                </div>
                
                <div className='px-5'>
                    {fileID > 0 && 
                    allOuterContainers.map(files =>
                        <div key={files.id}>
                            {files.file}
                        </div>
                        )}
                </div>

    
            </main>
        </>
    );
}

export default OuterContainer;