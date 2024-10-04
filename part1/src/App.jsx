// const Header = (course) => {
//   console.log(course)
//   return (
//   <>
//     <h1>{course.name}</h1>
//   </>
//   )
// }

// const Part = (exercise) => {
//   console.log(exercise)
//   return (
//     <>
//       <p>
//         {exercise.name} = {exercise.value}
//       </p>
//     </>
//   )
// }

// const Content = () => {
//   return (
//     <>
//       <Part name= 'Fundamentals of React' value={10}/>
//       <Part name= 'Using props to pass data' value={7}/>
//       <Part name= 'State of a component' value={14}/>
//     </>
//     )
// }

// const Total = (value) => {
//   console.log(value)
//   return (
//     <>
//     <p>Number of exercises = {value.first + value.second + value.third}</p>
//     </>
//   )
// }


const App = () => {
  const course = 'Half Stack application development'
  const part1= {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2= {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3= {
    name: 'State of a component',
    exercises: 14
  }

  const total = (p1, p2, p3) => {
    return ( p1 + p2 + p3)
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} =  {part1.exercises}</p>
      <p>{part2.name} =  {part2.exercises}</p>
      <p>{part3.name} =  {part3.exercises}</p>
      <p>Number of exercises = {total(part1.exercises, part2.exercises, part3.exercises)}</p>
    </div>
  )
}

export default App