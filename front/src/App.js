/* eslint-disable no-unused-vars */
import react, { useEffect } from 'react'
import './App.css'
import Main from './layout/main'
import Marketing from './layout/marketing'

function App() {
  const showMarketing = true
  useEffect(() => {}, [showMarketing])

  return (
    <>
      {showMarketing || <Marketing />}
      <Main />
    </>
  )
}

export default App
