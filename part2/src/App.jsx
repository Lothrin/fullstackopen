import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '39-44-5323523'
     }
  ]) 
  const [newPerson, setNewPerson] = useState('Name')
  const [newPersonNumber, setNewPersonNumber] = useState('Number')

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
  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newPerson}</div>
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
        {persons.map(person => (
          <p key={person.name}>{person.name} {person.number}</p>
        ))}
      </div>
    </div>
  )
}

export default App