import { useState } from 'react'
import  Filter  from './components/filter'
import PersonForm from './components/form'
import PersonList from './components/person_list'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newPerson, setNewPerson] = useState('')
  const [newPersonNumber, setNewPersonNumber] = useState('')

  const [searchPersons, setSearch] = useState('')

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