import React from 'react';
import Card from '../Card/Card';
import './CardPalette.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function CardPalette() {
    return (
        <>
        <Router>
        <h1>Sites</h1>
        <div className='card-palette-container'>
            <Route path='/'>
                <Card title='Card One' />
            </Route>
            <Route path='/'>
                <Card title='Card Two' />
            </Route>
        </div>
        </Router>
        </>
    )
}
