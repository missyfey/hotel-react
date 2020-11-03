import React from 'react'

export default function Title(props) {
    return (
        <div className="title">
            <h1 className="title-header">{props.title}</h1>
            <div />
            <p className="subtitle">{props.subtitle}</p>
        </div>
    )
}
