import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TeamMemberCard name={"John Doe"} title={"Software Engineer"} experience={"2 years"}/>
    <TeamMemberCard name={"Ivneet Singh"} title={"Prompt Engineer"} experience={"3 years"}/>
    <TeamMemberCard name={"Kritika "} title={"Software Engineer"} experience={"1.5 years"}/>
    </>
  )
}

export default App
