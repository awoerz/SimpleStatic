import React, {useState, useRef} from 'react';
import Card from '../Card/Card';
import './CardPalette.css';
import webSVG from '../../Images/web-browser.svg'

function CardPalette() {

    const [cards, setCards] = useState([]);
    const [id, setId] = useState(1);
    const inputRef = useRef(null);
    const testInput = useRef(null);

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
            <h1>Sites</h1>
            <div>
                <input ref={inputRef} type="text" placeholder="New Site Name"/>
                <button onClick={addCard} >Add Site</button>
            </div>
            <br></br>
            {/* 
            <div>
                <input ref={testInput} type="number" />
                <button onClick={() => {removeCard(testInput.current.value)} }> Remove Site</button>
            </div>
            */}
            <div className='card-palette-container'>
                {Object.keys(cards).map((key) => {
                    return (
                        <li key={cards[key].id} >
                        <Card title={cards[key].name} id={cards[key].id} removeFunction={removeCard}/>
                        </li>
                    )
                })}
            </div>
        </>
    )
}

export default CardPalette;