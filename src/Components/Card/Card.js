import React, {useState} from 'react'
import './Card.css'
import webSVG from '../../Images/web-browser.svg';
import trashCan from '../../Images/trash-can.svg';
import Modal from '../../Components/Modal/Modal';

export default function Card(props) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const remove = () => {
        props.removeFunction(props.id)
    }

    return (
        <>
        <div className='card-container' id={props.id}>
            <button className="trash-can-container">
                <img onClick={openModal} className="trash-can-image" src={trashCan} />
            </button>
            <h2>{props.title ? props.title : 'Enter Title'}</h2>
            <img src={webSVG} />
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} confirmButton={remove}/>
        </>
    )
}
