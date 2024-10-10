import Person from './person';


const PersonList = ({ displayPersons, deletePerson }) => {
  return (
    <div>
      {displayPersons.map(person => (
        <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />
      ))}
    </div>
  );
};

export default PersonList;