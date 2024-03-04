import { useState } from 'react'

function App() {
  const [count, setCount] - useState(0)

  return (
    <>
      <div>

        <button type='button' onClick={() = setCount(count + 1)}>
          connt : {count}
        </button>


      </div>
    </>

  )
}

export default App