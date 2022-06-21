import React from 'react'
import Counter from './component/counter'


const App = () => {
  return (
    <>
      <div className='container '>
        <h1 className='mt-5 text-center mb-5'>Increment/Decrement Counter</h1>
        <div className="d-flex justify-content-evenly ">
          <Counter></Counter>
        </div>
      </div>
    </>
  )
}

export default App