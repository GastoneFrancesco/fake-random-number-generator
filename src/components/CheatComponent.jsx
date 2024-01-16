import React, { useState, useEffect } from 'react';

export const CheatComponent = () => {

    const [fakeRandom1_4, setFakeRandom1_4] = useState('');
    const [fakeRandom1_8, setFakeRandom1_8] = useState('');
    const [fakeRandom1_24, setFakeRandom1_24] = useState('');

    useEffect(() => {
        
        const localStorageKeys = ['fakeRandom1_4', 'fakeRandom1_8', 'fakeRandom1_24'];
    
        // Loop through localStorage keys
        localStorageKeys.forEach(key => {
            // Check if data already exists in localStorage
            const storedData = localStorage.getItem(key);
    
            // If no data exists, set initial data and store it in localStorage
            if (!storedData) {
                switch (key) {
                    case 'fakeRandom1_4':
                        setFakeRandom1_4(0);
                        localStorage.setItem(key, 0);
                        break;
                    case 'fakeRandom1_8':
                        setFakeRandom1_8(0);
                        localStorage.setItem(key, 0);
                        break;
                    case 'fakeRandom1_24':
                        setFakeRandom1_24(0);
                        localStorage.setItem(key, 0);
                        break;
                    default:
                        break;
                }
            } else {
                // If data exists, set it to the state
                switch (key) {
                    case 'fakeRandom1_4':
                        setFakeRandom1_4(storedData);
                        break;
                    case 'fakeRandom1_8':
                        setFakeRandom1_8(storedData);
                        break;
                    case 'fakeRandom1_24':
                        setFakeRandom1_24(storedData);
                        break;
                    default:
                        break;
                }
            }
        });
    }, []);

    // Function to handle changes and store data in localStorage
    const insertFakeRandomInStorage = (fakeableObject, value) => {
        switch (fakeableObject) {
          case '1-4':
            setFakeRandom1_4(value);
            localStorage.setItem('fakeRandom1_4', value);
            break;
          case '1-8':
            setFakeRandom1_8(value);
            localStorage.setItem('fakeRandom1_8', value);
            break;
          case '1-24':
            setFakeRandom1_24(value);
            localStorage.setItem('fakeRandom1_24', value);
            break;
          default:
            break;
        }
      };


    return (

        <>

            <div className="container">

                <div className='setter-container'>

                    <p>1-4 Fake Random: {fakeRandom1_4}</p>
                    <input
                        type="text"
                        value={fakeRandom1_4}
                        onChange={e => insertFakeRandomInStorage("1-4", e.target.value)}
                        placeholder="Enter data" />

                </div>

                <div className='setter-container'>

                    <p>1-8 Fake Random: {fakeRandom1_8}</p>
                    <input
                        type="text"
                        value={fakeRandom1_8}
                        onChange={e => insertFakeRandomInStorage("1-8", e.target.value)}
                        placeholder="Enter data" />

                </div>

                <div className='setter-container'>

                    <p>1-24 Fake Random: {fakeRandom1_24}</p>
                    <input
                        type="text"
                        value={fakeRandom1_24}
                        onChange={e => insertFakeRandomInStorage("1-24", e.target.value)}
                        placeholder="Enter data" />

                </div>

            </div>


        </>
    )

}