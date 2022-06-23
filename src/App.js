import React from "react"
import Die from './Die.js'
import './App.css'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"

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
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = diceNum.every(die => die.isHeld)
        const firstValue = diceNum[0].value
        const allSameValue = diceNum.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [diceNum])


    function rollDice() {
        if(!tenzies) {
            SetDiceNum(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDice()
            }))
        } else {
            setTenzies(false)
            SetDiceNum(allNewDice())
        }
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
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {diceElements}
            </div>
            <button className="roll--btn" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}