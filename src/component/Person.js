import React from 'react'

function Person({person, key}) {
  return (
    <div>
        <h2>{key} i am {person.name}. {person.age} years old, skill {person.skill}</h2>
    </div>
  )
}

export default Person