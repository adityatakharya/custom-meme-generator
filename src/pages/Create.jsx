import React, { useRef, useEffect, useState, createRef } from 'react';
import Text from '../components/Text';
import { useSearchParams } from 'react-router-dom';
import { exportComponentAsJPEG } from 'react-component-export-image';
import "./Create.css";
import Preloader from '../components/Preloader';

function Create() {
    const [currParams] = useSearchParams();
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const newRef = createRef();

    useEffect(() => {
        const simulateDelay = async () => {
            try {
                setTimeout(() => {
                    setLoading(false);
                }, 1300);
            } catch (error) {
                console.error('Error fetching memes:', error);
                setLoading(false); 
            }
        };
    
        simulateDelay();
    }, []);

    const handleOnClick = () => {
        setCount(count + 1);
    }

    if (loading) {
        return <Preloader />; // Show preloader while loading
    }

    return (
        <div className='min-vh-100 text-center'>
            <div ref={newRef} className='main-meme-container'>
                <img src={currParams.get("imgsrc")} width="500px" className='mt-5' alt="Meme" />
                {Array(count).fill(0).map((el, index) => 
                    <Text key={index} />
                )}
            </div>
            <button className="button" onClick={handleOnClick}>
                Add Text
            </button>
            <a onClick={() => exportComponentAsJPEG(newRef, {fileName: `export_${Date.now()}`})}>
                <svg viewBox="0 0 256 256" height="32" width="38" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12" fill="currentColor"></path>
                </svg>
            </a>
        </div>
    );
}

export default Create;
