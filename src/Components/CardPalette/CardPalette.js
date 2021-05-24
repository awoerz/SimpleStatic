import React, {useState, useRef} from 'react';
import Card from '../Card/Card';
import './CardPalette.css';
import webSVG from '../../Images/web-browser.svg'

function CardPalette() {

    const [cards, setCards] = useState([]);
    const [id, setId] = useState(1);
    const inputRef = useRef(null);

    const addCard = () => {
        const card = {
            id: id,
            name: inputRef.current.value,
            pic: webSVG
        }

        const cardArray = [...cards, card];
        setCards(cardArray);
    
        const updatedId = id + 1;
        setId(updatedId);

        inputRef.current.value = null;
    }

    const removeCard = (passedId) => {
        const currentCardArray = [...cards];
        const newArray = currentCardArray.filter(card => card.id != passedId);
        setCards(newArray)
    }

    return (
        <>
        <div className="outer-container">
            <h1 className="header-text">Sites</h1>
            <div className="input-area">
                <input ref={inputRef} type="text" placeholder="New Site Name"/>
                <button onClick={addCard} >Add Site</button>
            </div>
            <div className='card-palette-container'>
                {Object.keys(cards).map((key) => {
                    return (
                        <li key={cards[key].id} >
                        <Card title={cards[key].name} id={cards[key].id} removeFunction={removeCard}/>
                        </li>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default CardPalette;