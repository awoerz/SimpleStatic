import React from 'react'
import './Card.css'
import webSVG from '../../Images/web-browser.svg';
import trashCan from '../../Images/trash-can.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function Card(props) {

    const remove = (passedId) => {
        props.removeFunction(passedId)
    }

    return (
        <>
        <div className='card-container' id={props.id}>
            <button onClick={() => {remove(props.id)}} className="trash-can-container">
                <img className="trash-can-image" src={trashCan} />
            </button>
            <h2>{props.title ? props.title : 'Enter Title'}</h2>
            <img src={webSVG} />
        </div>
        </>
    )
}
