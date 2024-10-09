import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header header= 'Web development curriculum' />
      <h2>{course.name}</h2>
      <Content parts={course.parts} />
      <p><b>Total exercises: {totalExercises}</b></p>
    </div>
  );
};

export default Course;
