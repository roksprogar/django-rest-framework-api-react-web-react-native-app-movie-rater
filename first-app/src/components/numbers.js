import React, { useState, useEffect } from 'react'

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three'])
    const [letters, setLetters] = useState(['a', 'b', 'c'])

    const addNumber = () => {
        setNumbers([...numbers, 'four'])
    }

    const addLetter = () => {
        setLetters([...letters, 'd'])
    }

    useEffect( () => {
        console.log('our use effect triggers ')
    }, [letters])

    return (
        <>
            <h1>Numbers</h1>
            {
                numbers.map( num => {
                return <h4>{num}</h4>
                })
            }
            <button onClick={addNumber}>Add a number</button>

            <h1>Letters</h1>
            {
                letters.map( letter => {
                return <h4>{letter}</h4>
                })
            }
            <button onClick={addLetter}>Add a letter</button>
        </>
    )
}

export default Numbers