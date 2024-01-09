import React, { useState, useEffect } from 'react';

export const CheatComponent = () => {

    const [fakeRandom1_4, setFakeRandom1_4] = useState('');
    const [fakeRandom1_8, setFakeRandom1_8] = useState('');
    const [fakeRandom1_24, setFakeRandom1_24] = useState('');

    useEffect(() => {
        // Check if data already exists in localStorage
        const storedData = localStorage.getItem('fakeRandom1_4');

        // If no data exists, set initial data and store it in localStorage
        if (!storedData) {
            setFakeRandom1_4(0);
            localStorage.setItem('fakeRandom1_4', 0);
        } else {
            // If data exists, set it to the state
            setFakeRandom1_4(storedData);
        }
    }, []); // The empty dependency array ensures the effect runs only on mount

    // Function to handle changes and store data in localStorage
    const insertFakeRandom1_4 = (event) => {
        const newData = event.target.value;
        setFakeRandom1_4(newData);
        localStorage.setItem('fakeRandom1_4', newData);
    };



    useEffect(() => {
        // Check if data already exists in localStorage
        const storedData = localStorage.getItem('fakeRandom1_8');

        // If no data exists, set initial data and store it in localStorage
        if (!storedData) {
            setFakeRandom1_8(0);
            localStorage.setItem('fakeRandom1_8', 0);
        } else {
            // If data exists, set it to the state
            setFakeRandom1_8(storedData);
        }
    }, []); // The empty dependency array ensures the effect runs only on mount

    // Function to handle changes and store data in localStorage
    const insertFakeRandom1_8 = (event) => {
        const newData = event.target.value;
        setFakeRandom1_8(newData);
        localStorage.setItem('fakeRandom1_8', newData);
    };



    useEffect(() => {
        // Check if data already exists in localStorage
        const storedData = localStorage.getItem('fakeRandom1_24');

        // If no data exists, set initial data and store it in localStorage
        if (!storedData) {
            setFakeRandom1_24(0);
            localStorage.setItem('fakeRandom1_24', 0);
        } else {
            // If data exists, set it to the state
            setFakeRandom1_24(storedData);
        }
    }, []); // The empty dependency array ensures the effect runs only on mount

    // Function to handle changes and store data in localStorage
    const insertFakeRandom1_24 = (event) => {
        const newData = event.target.value;
        setFakeRandom1_24(newData);
        localStorage.setItem('fakeRandom1_24', newData);
    };


    return (

        <>

            <div className="container">

                <div className='setter-container'>

                    <p>1-4 Fake Random: {fakeRandom1_4}</p>
                    <input
                        type="text"
                        value={fakeRandom1_4}
                        onChange={insertFakeRandom1_4}
                        placeholder="Enter data" />

                </div>

                <div className='setter-container'>

                    <p>1-8 Fake Random: {fakeRandom1_8}</p>
                    <input
                        type="text"
                        value={fakeRandom1_8}
                        onChange={insertFakeRandom1_8}
                        placeholder="Enter data" />

                </div>

                <div className='setter-container'>

                    <p>1-24 Fake Random: {fakeRandom1_24}</p>
                    <input
                        type="text"
                        value={fakeRandom1_24}
                        onChange={insertFakeRandom1_24}
                        placeholder="Enter data" />

                </div>

            </div>


        </>
    )

}