import React from 'react'

const TeamMemberCard = ({name,title,experience}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{title}</h3>
      <h4>{experience}</h4>
    </div>
  )
}

export default TeamMemberCard