import React from 'react'
import ControlBar from './components/ControlBar'
import Info from './components/Info'

const App:React.FC = () => {
  return (
    <div className='w-[100%] h-[100vh]'>
      <ControlBar/>
      <Info/>
    </div>
  )
}

export default App
