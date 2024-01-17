import React, { useState } from "react";

export const HomePageComponent = () => {

    const [goneNumber1_8, setGoneNumber1_8] = useState(new Set());
    const [goneNumber1_24, setGoneNumber1_24] = useState(new Set());
    const [result, setResult] = useState("Clicca per iniziare");

    const generateRandom = (max, fakeRandom, goneNumber) => {

        let randomNumber;

        randomNumber = fakeRandom === 0 ? Math.floor(Math.random() * max) + 1 : fakeRandom;

        if (goneNumber !== null) {
            if (goneNumber.size === max) {
                alert('NUMERI FINITI');
                return;
            }

            while (goneNumber.has(randomNumber)) {
                randomNumber = Math.floor(Math.random() * max) + 1;
            }

            goneNumber.add(randomNumber);

        }

        setResult(randomNumber);
        return randomNumber;

    };

    const handleGenerate = (max, goneNumberState, fakeRandomKey) => {

        setResult("Estrazione...");

        let fakeRandomValue = parseInt(localStorage.getItem(fakeRandomKey));

        setTimeout(() => {

            if (max === 4) {

                let number = generateRandom(4, fakeRandomValue, null);
                setResult(String.fromCharCode(number + 64));

            } else {

                generateRandom(max, fakeRandomValue, goneNumberState);
            }

        }, 1000);

    };

    const reset = () => {
        setGoneNumber1_8(new Set());
        setGoneNumber1_24(new Set());
        setResult("Clicca per iniziare");
    };

    return (
        <>
            <div className="container">
                <h2 id="result">{result}</h2>

                <div className="buttons-container">
                    <button className="button" onClick={() => handleGenerate(4, null, 'fakeRandom1_4')}>A - D</button>

                    <button className="button" onClick={() => handleGenerate(8, goneNumber1_8, 'fakeRandom1_8')}>1 - 8</button>

                    <button className="button" onClick={() => handleGenerate(24, goneNumber1_24, 'fakeRandom1_24')}>1 - 24</button>

                    <button className="button" onClick={reset}>RESET</button>
                </div>
            </div>

            
        </>
    );
};

export default HomePageComponent;