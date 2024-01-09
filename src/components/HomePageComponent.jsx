import React from "react";

export const HomePageComponent = () => {

    let goneNumber1_8 = new Set();
    let goneNumber1_24 = new Set();

    const generate1_4 = () => {
        generateRandomLetter(parseInt(localStorage.getItem('fakeRandom1_4')));
    }

    const generate1_8 = () => {

        document.getElementById('result').innerHTML = "Estrazione...";

        setTimeout(function() {

            generateRandom(8, parseInt(localStorage.getItem('fakeRandom1_8')), goneNumber1_8);

          }, 1000);
        
    }

    const generate1_24 = () => {

        document.getElementById('result').innerHTML = "Estrazione...";

        setTimeout(function() {

            generateRandom(24, parseInt(localStorage.getItem('fakeRandom1_24')), goneNumber1_24);

          }, 1000);
          
    }

    const reset = () => {
        goneNumber1_8.clear();
        goneNumber1_24.clear();
        document.getElementById('result').innerHTML = "Clicca per iniziare";
    }

    const generateRandom = (max, fakeRandom, goneNumber) => {

        let randomNumber = null;

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

        document.getElementById('result').innerHTML = randomNumber;

        return randomNumber;
    }

    const generateRandomLetter = (fakeRandom) => {

        document.getElementById('result').innerHTML = "Estrazione...";

        setTimeout(function() {

            let number = generateRandom(4, fakeRandom, null);
            document.getElementById('result').innerHTML = String.fromCharCode(number + 64);

          }, 1000);

    }

    return (

        <>

            <div className="container">

                <h2 id="result">Clicca per iniziare</h2>

                <div className="buttons-container">
                    <button className="button" onClick={generate1_4}>A - D</button>

                    <button className="button" onClick={generate1_8}>1 - 8</button>

                    <button className="button" onClick={generate1_24}>1 - 24</button>

                    <button className="button" onClick={reset}>RESET</button>
                </div>

            </div>

        </>
    )

}