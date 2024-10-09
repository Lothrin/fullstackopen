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
    <button onClick={props.onClickGood}>Good</button>
    <button onClick={props.onClickNeutral}>Neutral</button>
    <button onClick={props.onClickBad}>Bad</button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
    <tbody>
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
    </tbody>

    </>
  )
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad == 0) { 
    return (
    <>
    <StatisticLine text='No feedback given'/>
    </>
  ) 
} 
  return (
    <> 
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
      <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100 + '%'} />
     
    </>
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
      <Header text='give feedback' />
      <Button onClickBad={setBadHandler} onClickNeutral={setNeutralHandler} onClickGood={setGoodHandler}/>
      <Header text='statistics' />
      <table><Statistics good={good} neutral={neutral} bad={bad} /></table>
    </div>
  )
}

export default App