import { useState } from 'react'
import './App.css'
import { DerivedState} from './components/DerivedState'
import { LiftStateUp } from './components/LiftStateUp'

function App() {
  const [users, setUsers] = useState(0)

  return (
    <>
    {/* <DerivedState /> */}
   <LiftStateUp />
    </>
  )
}
 
export default App
