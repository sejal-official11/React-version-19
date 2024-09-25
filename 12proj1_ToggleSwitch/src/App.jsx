import { useState } from 'react'
import { ToggleSwitch } from './components/ToggleSwitch'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <ToggleSwitch />
    
    </section>
  )
}

export default App
