import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

// const Button = (props) => {
//   return (
//     <>
//     <button onClick={props.onClickGood}>Good</button>
//     <button onClick={props.onClickNeutral}>Neutral</button>
//     <button onClick={props.onClickBad}>Bad</button>
//     </>
//   )
// }



// const StatisticLine = (props) => {
//   return (
//     <>
//     <tbody>
//     <tr>
//       <td>{props.text}</td> 
//       <td>{props.value}</td>
//     </tr>
//     </tbody>

//     </>
//   )
// }

// const Statistics = (props) => {
//   if (props.good + props.neutral + props.bad == 0) { 
//     return (
//     <>
//     <StatisticLine text='No feedback given'/>
//     </>
//   ) 
// } 
//   return (
//     <> 
//       <StatisticLine text='good' value={props.good} />
//       <StatisticLine text='neutral' value={props.neutral} />
//       <StatisticLine text='bad' value={props.bad} />
//       <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
//       <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
//       <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100 + '%'} />
     
//     </>
//   )
// }
const Button = (props) => {
  return (
    <>
    <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}
const DisplayPoints = (props) => {
  if (props.points == 0) { 
       return (
       <>
       <p></p>
       </>
     ) 
   } 
  return (
    <>
    <p>has {props.points} votes</p>
    </>
  )
}

const App = () => {
  // // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  // const setGoodHandler = () => {
  //   setGood(good + 1)
  // }
  // const setNeutralHandler = () => {
  //   setNeutral(neutral + 1)
  // }
  // const setBadHandler = () => {
  //   setBad(bad + 1)
  // }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
 
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const setSelectedHandler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
   
  }
  
  const setPointsHandler = () => {
    const copy = [...points]
    copy[selected] +=1
    setPoints(copy)
    
  }

  const maxVotesIndex = points.indexOf(Math.max(...points))
  return (
    <div>
      {/* <Header text='give feedback' />
      <Button onClickBad={setBadHandler} onClickNeutral={setNeutralHandler} onClickGood={setGoodHandler}/>
      <Header text='statistics' />
      <table><Statistics good={good} neutral={neutral} bad={bad} /></table> */}
      <Header text='Anecdote of the day' />
      {anecdotes[selected]} <br />
      <DisplayPoints points={points[selected]}/>
      <Button onClick={setPointsHandler} text='vote'/>
      <Button onClick={setSelectedHandler} text='next anecdote'/>
      <Header text='Anecdote with most votes' />
      {anecdotes[maxVotesIndex]} <br />
      <DisplayPoints points={points[maxVotesIndex]} />
    </div>
  )
}

export default App