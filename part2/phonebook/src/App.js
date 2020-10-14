import React, { useState } from 'react'
import Filter from './component/Filter'
import Numbers from './component/Numbers'
import PersonForm from './component/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('Type New Name')
  const [ newNumber, setNewNumber ] = useState('Add phone Number')
  const [ filter, setNewFilter] = useState('')
  const [ filterOn, setFilterOn] = useState(false)
 
  const addName = (event) => {
    event.preventDefault()
    if (persons.filter(e => e.name === newName).length > 0) {
        alert(`${newName} is already added to phonebook`)
      }
    else{
        const nameObject = {
            name: newName,
            number: newNumber
          }
        
          setPersons(persons.concat(nameObject))
      }
      setNewName('')
      setNewNumber('')
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    if(filter!==""){
        setFilterOn(true)
    }
    else{
        setFilterOn(false)
    }
  }

  const namesToDisplay = filterOn ? 
  persons.filter
  (obj =>obj.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h1>Add A New Name</h1>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} 
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Numbers namesToDisplay={namesToDisplay} />
    </div>
  )
}

export default App