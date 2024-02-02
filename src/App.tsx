import { useState } from 'react'
import { MultiInput } from './multi-input'

function App() {

  const [numbers, setNumbers] = useState([123, 1324123, 0])

  return (
    <div className="p-8">

      <MultiInput
        type='number'
        setItems={setNumbers}
        items={numbers}
        addItem={() => setNumbers(numbers.concat(0))}
      />
    </div>
  )
}

export default App
