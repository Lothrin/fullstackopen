const PersonForm = ({addPerson, newPerson, handlePersonChange, newPersonNumber, handlePersonNumberChange }) => {
    return (

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
    )
}

export default PersonForm;