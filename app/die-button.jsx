'use client';

import { useState } from 'react';

export default function DieButton() {
    const [dieCounter, setDieCounter] = useState(0);

    function handleClick() {
        setDieCounter(dieCounter+1);
        console.log("hola michin volador")
    
    }
    return <button onClick={handleClick}>☠️ Die counter: {dieCounter}</button>
}