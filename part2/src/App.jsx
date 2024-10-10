import { useState, useEffect } from 'react'
import axios from 'axios'
import  Filter  from './components/filter'
import PersonForm from './components/form'
import PersonList from './components/person_list'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState('')
  const [newPersonNumber, setNewPersonNumber] = useState('')
  const [searchPersons, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  const filterPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchPersons.toLowerCase())
  );

  const displayPersons = searchPersons ? filterPersons : persons;

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      number: newPersonNumber
    }

    const personExists = persons.some(person => person.name === newPerson);
    console.log(personExists);

    if (!personExists) {

    setPersons(persons.concat(personObject))
    setNewPerson('')
    setNewPersonNumber('')}
    else {
      alert(`${newPerson} is already added to phonebook`)
    }
    }

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
      <PersonList displayPersons={displayPersons} />
    </div>
  )
}

export default App