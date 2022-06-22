import React from "react"
import Die from './Die.js'
import './App.css'


export default function App() {

    function allNewDice(){
        const newDice = []
        for(let i=0;i<10;i++){
          newDice.push(Math.ceil(Math.random()*6))
        }
        return newDice
    }

    const [diceNum,SetDiceNum] = React.useState(allNewDice())

    const diceElements = diceNum.map(dienum => <Die num={dienum}/>)
    
    return (
        <main className="main">
            <div className="container">
                {diceElements}
            </div>
        </main>
    )
}