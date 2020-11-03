import React from 'react'

export default function ComponentTitle(props) {
    return (
        <div className="component-title-container">
            <h3 className="component-title">{props.title}</h3>
            <div />
        </div>
    )
}
