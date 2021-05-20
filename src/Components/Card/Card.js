import React from 'react'
import './Card.css'
import webSVG from '../../Images/web-browser.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function Card(props) {
    return (
        <Link to='/'>
            <div className='card-container' id="card">
                <h2>{props.title ? props.title : 'Enter Title'}</h2>
                <img src={webSVG} />
            </div>
        </Link>
    )
}
