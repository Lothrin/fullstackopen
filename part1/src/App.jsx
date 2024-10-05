import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const Button = (props) => {
  return (
    <>
    <button onClick={props.onClick}>
      {props.text}
    </button>
    </>
  )
}

const Display = (props) => {
  return (
    <p>
      {props.text} = {props.value}
    </p>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setGoodHandler = () => {
    setGood(good + 1)
  }
  const setNeutralHandler = () => {
    setNeutral(neutral + 1)
  }
  const setBadHandler = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={setGoodHandler} text='good'/>
      <Button onClick={setNeutralHandler} text='neutral'/>
      <Button onClick={setBadHandler} text='bad'/>
      <Header text='statistics'/>
      <Display text='good' value={good}/>
      <Display text='neutral' value={neutral}/>
      <Display text='bad' value={bad}/>
      <Display text='all' value={good + neutral + bad}/>
      <Display text='average' value={(good - bad) / (good + neutral + bad)}/>
      <Display text='positive' value={good / (good + neutral + bad) * 100 + '%'}/>
    </div>
  )
}

export default App