import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {

  // const [progress, setProgress] = useState(0)

  // useEffect(() =>{
  //   const bar = setInterval(() => {
  //     if(progress<100){
  //       setProgress((progress) => progress+1 )
  //     }
  //   }, 100);
  //   return () => clearInterval(bar);
  // }, [progress])

  return (
    <>
      <ProgressBar/>
    </>
  )
}

export default App
