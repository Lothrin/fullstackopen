const Person = ({ person, deletePerson }) => {
    return (
      <>
      <p>{person.name} {person.number}</p>
      <button onClick={deletePerson}>delete</button></>
    );
  };
  
  export default Person;