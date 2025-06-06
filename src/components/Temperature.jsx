// The Temperature component must display a numeric temperature. Also, this component must include two buttons:
// One button increases the temperature by one degree
// One button decreases the temperature by one degree

// | Temperature (°C) | Temperature (°F) | Color  |
// | ---------------- | ---------------- | ------ |
// | 26+              | 80+              | Red    |
// | 20–25            | 70–79            | Orange |
// | 15–19            | 60–69            | Yellow |
// | 10–14            | 50–59            | Green  |
// | 9 or below       | 49 or below      | Teal   |

import './Temperature.css';
import { useState } from 'react';

const Temperature = () => {
    const [temp, setTemp] = useState(72);

    const changeTemp = (change) => {
        setTemp(temp + change);
    }

    let nameColor;
    if (temp >= 80) {
        nameColor = 'red';
    } else if (temp >= 70) {
        nameColor = 'orange'
    } else if (temp >= 60) {
        nameColor = 'yellow'
    } else if (temp >= 50) {
        nameColor = 'green'
    } else if (temp <= 49) {
        nameColor = 'teal'
    };


    return (
     <>
        {/* <button onClick={changeTemp(1)}>Increase the Temperature</button> */}
        <button onClick={() => changeTemp(1)}>Increase the Temperature</button>
        <h1>Temperature: <t className={nameColor}>{temp}</t> F </h1>
        {/* <button onClick={changeTemp(-1)}>Decrease the Temperature</button> */}
        <button onClick={() => changeTemp(-1)}>Decrease the Temperature</button>
    </>       
    );
};


export default Temperature;