const Header = (course) => {
  return (
  <>
    <h1>{course.name}</h1>
  </>
  )
}

const Content = (exercise) => {
  return (
    <>
      <p>
        {exercise.name} = {exercise.value}
      </p>
    </>
    )
}

const Total = (value) => {
  return (
    <>
    <p>Number of exercises = {value.first + value.second + value.third}</p>
    </>
  )
}


const App = () => {
  const courseName = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={courseName}/>
      <Content name={part1} value={exercises1}/>
      <Content name={part2} value={exercises2}/>
      <Content name={part3} value={exercises3}/>
      <Total first={exercises1} second={exercises2} third={exercises3} />
    </div>
  )
}

export default App