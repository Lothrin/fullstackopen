import { useState, useEffect } from 'react'
import  Filter  from './components/filter'
import PersonForm from './components/form'
import PersonList from './components/person_list'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState('')
  const [newPersonNumber, setNewPersonNumber] = useState('')
  const [searchPersons, setSearch] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])


  const filterPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchPersons.toLowerCase())
  );

  const displayPersons = searchPersons ? filterPersons : persons;


  const addPerson = (event) => {
    event.preventDefault();
    
    const personObject = {
      name: newPerson,
      number: newPersonNumber
    };
  
    const personExists = persons.some(person => person.name === newPerson);
    console.log(personExists);
  
    if (!personExists) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson)); 
          setNewPerson('');
          setNewPersonNumber(''); 
        })
        .catch(error => {
          console.error("Error adding person:", error); 
        });
    } else {
      alert(`${newPerson} is already added to phonebook`);
    }
  };
  

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }
  const handlePersonNumberChange = (event) => {
    console.log(event.target.value)
    setNewPersonNumber(event.target.value)
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const deletePerson = (id) => {
    personService.deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch(error => {
        console.error("Error deleting person:", error);
      });
  };
  return (
    <div>
      <h2>Phonebook</h2>
    <Filter handleSearch={handleSearch}/>
      <h3>Add a new person</h3>
      <PersonForm 
        newPerson={newPerson} 
        newPersonNumber={newPersonNumber} 
        handlePersonChange={handlePersonChange} 
        handlePersonNumberChange={handlePersonNumberChange} 
        addPerson={addPerson} 
      />
      <h3>Numbers</h3>
      <PersonList displayPersons={displayPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App