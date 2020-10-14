import React from 'react'
const Numbers = ({namesToDisplay}) => <div>{namesToDisplay.map(person => <p key={person.name}>{person.name} {person.number}</p>)}</div>
export default Numbers