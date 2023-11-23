import React from 'react'

function Header(props) {
    return (
    <>
        <h1>{props.info}</h1>
        <h2>My number is {props.myNumber}</h2>
    </>
    )
}

export default Header