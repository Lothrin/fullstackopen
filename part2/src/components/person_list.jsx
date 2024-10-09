import Person from './person';

const PersonList = ({ displayPersons }) => {
  return (
    <div>
      {displayPersons.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

export default PersonList;