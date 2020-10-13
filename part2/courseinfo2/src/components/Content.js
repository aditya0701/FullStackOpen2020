import React from 'react'

const Content = ({course}) => {
    return (
      <div>
        {course.parts.map(cor => <p key={cor.id}>{cor.name} {cor.exercises}</p>)}
      </div>
    )
  }

  export default Content