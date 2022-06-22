import React from 'react'

export default function Die(props){

    const array = [1,2,3,4,5,6]
    const Randomnum = array[Math.floor(Math.random()*6)]

    return (
        <div className="die--box" onClick={props.handleChange}>
            {Randomnum}
        </div>
    )
}