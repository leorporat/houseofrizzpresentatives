import Card from '../Components/Card.jsx'
import a000055_200 from '../congressmembers1_files/a000055_200.jpg'
import a000148_200 from '../congressmembers1_files/a000148_200.jpg'
import { useState, useEffect } from 'react';

// const fs = require('fs')
// var maleImages;
// var maleNames;

// fs.readFile('congressmaleimages.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     maleImages = data.split('\n')
// })

// fs.readFile('congressmalenames.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     maleNames = data.split('\n')
// })

function VoteGuysView() {

    const [lines, setLines] = useState("");

    useEffect(() => {
        fetch('congressmalenames.txt')
        .then(response => response.text())
        .then(test => setLines(test.split('\n')))
    }, []);

    const[buttonText, setButtonText] = useState('Click Me');

    const handleButtonClick = () => {
        console.log("Button was clicked");
        console.log(lines)
        setButtonText('Clicked')
    }

    return (
        <div className='guys-selections'>
            <Card
            image={a000055_200}
            name={lines[0]}/>
            <Card
            image={a000148_200}
            name='Other Fuckface' />
            <button onClick={handleButtonClick}>
                {buttonText}

            </button>
        </div>
    )
}

export default VoteGuysView