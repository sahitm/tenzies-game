import React from "react"
import Die from './Die.js'
import './App.css'


export default function App() {
    
    const array = [1,2,3,4,5,6]
    const [num , setNum ] = React.useState(1)
    
    function handleChange(){
        const newNum = array[Math.floor(Math.random()*6)]
        setNum(prevNum => newNum)
    }
    
    return (
        <main className="main">
            <div className="container">
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
                <Die num={num} handleChange={handleChange}/>
            </div>
        </main>
    )
}