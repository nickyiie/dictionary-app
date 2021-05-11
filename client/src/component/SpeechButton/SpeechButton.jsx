import React, { Component } from 'react';
import Speech from 'react-speech';
// import './SpeechButton.scss';

//https://www.npmjs.com/package/react-speech

function SpeechButton ({word}) {
    return <Speech className='speech-button' text={word}/>
}

export default SpeechButton;

