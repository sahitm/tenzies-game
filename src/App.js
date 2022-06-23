import React from "react"
import Die from './Die.js'
import './App.css'
import {nanoid} from 'nanoid'


export default function App() {

    function allNewDice(){
        const newDice = []
        for(let i=0;i<10;i++){
          newDice.push({
            value:Math.ceil(Math.random()*6),
            isHeld: false,
            id: nanoid()
        })
        }
        return newDice
    }

    const [diceNum,SetDiceNum] = React.useState(allNewDice())

    function changeNum(){
      SetDiceNum(allNewDice())
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
            <button className="roll--btn" onClick={changeNum}>Roll</button>
        </main>
    )
}