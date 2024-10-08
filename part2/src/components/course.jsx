import Header from "./header";
import Content from "./content";

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <p>Total exercises: {totalExercises}</p>
      </>
    );
  };

  export default Course;