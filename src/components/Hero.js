import React from 'react'

export default function Hero(props) {
    return (
        <header className={`hero ${props.hero}`}>
            {props.children}
        </header>
    )
}
//set default props
Hero.defaultProps = {
    hero : 'defaultHero'
}


