const Header = (course) => {
  return (
  <>
    <h1>{course.name}</h1>
  </>
  )
}

const Part = (exercise) => {
  return (
    <>
      <p>
        {exercise.name} = {exercise.value}
      </p>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Part name= 'Fundamentals of React' value={10}/>
      <Part name= 'Using props to pass data' value={7}/>
      <Part name= 'State of a component' value={14}/>
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

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header name={courseName}/>
      <Content/>
      <Total first={exercises1} second={exercises2} third={exercises3} />
    </div>
  )
}

export default App