import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h1>{props.title ? props.title : 'Enter Title'}</h1>
        </div>
    )
}
