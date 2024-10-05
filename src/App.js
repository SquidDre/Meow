// src/App.js

import React, { useState } from 'react';
import CatList from './CatList';

const App = () => {
    const [zodiacSign, setZodiacSign] = useState('Aries'); // Default zodiac sign
    const [inputValue, setInputValue] = useState(zodiacSign); // State for input field

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update input value
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setZodiacSign(inputValue); // Update zodiac sign with the input value
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Cat Adoption App</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your zodiac sign"
                    className="border border-gray-300 p-2 rounded mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
            <CatList zodiacSign={zodiacSign} />
        </div>
    );
};

export default App;
