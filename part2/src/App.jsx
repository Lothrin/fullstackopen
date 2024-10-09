import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newPerson, setNewPerson] = useState('Name')
  const [newPersonNumber, setNewPersonNumber] = useState('Number')

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
      {/* <div>debug: {newPerson}</div> */}
      <div>
          filter shown with: <input onChange={handleSearch} />
        </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newPersonNumber} onChange={handlePersonNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {displayPersons.map(person => (
          <p key={person.name}>{person.name} {person.number}</p>
        ))}
      </div>
    </div>
  )
}

export default App