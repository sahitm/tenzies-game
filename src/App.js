import React from "react"
import Die from './Die.js'
import './App.css'
import {nanoid} from 'nanoid'


export default function App() {

    function generateNewDice(){
        return {
            value:Math.ceil(Math.random()*6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice(){
        const newDice = []
        for(let i=0;i<10;i++){
          newDice.push(generateNewDice())
        }
        return newDice
    }

    const [diceNum,SetDiceNum] = React.useState(allNewDice())


    function rollDice(){
        SetDiceNum(oldDice => oldDice.map(dice => {
            return dice.isHeld ?
                   dice :
                   generateNewDice()
                   
        }))
    }

    function holdDie(id){
        SetDiceNum(oldDice => oldDice.map(dice => {
            return dice.id === id ?
                {...dice , isHeld : !dice.isHeld} :
                dice

        }))
    } 

    const diceElements = diceNum.map(dienum => (
        <Die num={dienum.value} 
             isHeld={dienum.isHeld}                                                
             key={dienum.id}                                                    
             holdDie={() => holdDie(dienum.id)}
        />
    ))
    
    return (
        <main className="main">
            <div className="container">
                {diceElements}
            </div>
            <button className="roll--btn" onClick={rollDice}>Roll</button>
        </main>
    )
}