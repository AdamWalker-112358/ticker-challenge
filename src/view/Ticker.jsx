import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Ticker = ({ message }) => {
    
    const letters = useRef(message.split(''))
    const [displayedLetters, setDisplayedLetters] = useState(() => [letters.current.shift()])
    
    // Option 1 with setInterval
    // useEffect(() => {
    //     const interval = window.setInterval(() => {
    //         if (letters.current.length) setDisplayedLetters((displayedLetters) => [...displayedLetters, letters.current.shift()])
    //         else window.clearInterval(interval)
    //     }, 500)        
    // }, [])

    // Option 2 with setTimeout and render cycle
    useEffect(function setup() {
        setTimeout(() => {
            if (letters.current.length)
                setDisplayedLetters((displayedLetters) => [...displayedLetters, letters.current.shift()])    
        }, 500)
        console.log('state-effect')
    }, [displayedLetters])
    


    return (
        <Styles>
            {displayedLetters.map( (letter, index) => <span key={index}>{letter}</span>)}
        </Styles>
    );
}


const Styles = styled.div`

    font-family: 'Courier New', Courier, monospace;
    padding: 5px;
    border: 1px solid purple;
    display: flex;
    gap: 1px;

    span {
        border: 1px solid green;
        padding: 5px;
        background-color: green;
        color: white;
        flex-basis: 20px;
    }

`

export default Ticker;
