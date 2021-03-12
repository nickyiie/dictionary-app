import React, { Component } from 'react';
import Speech from 'react-speech';

//https://www.npmjs.com/package/react-speech

function SpeechButton ({word}) {
    return <Speech text={word}/>
}

export default SpeechButton;

