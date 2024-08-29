import React, { useEffect, useState } from 'react'


function ProgressBar(color) {
  // const [percent , setPercent] = useState(progress)
  // useEffect(()=> {
  //   setPercent(Math.mim(100,Math.max(value,0)))
  // }, [value])


  const [progress, setProgress] = useState(0)

  useEffect(() =>{
    const bar = setInterval(() => {
      if(progress<100){
        setProgress((progress) => progress+1 )
      }
    }, 100);
    return () => clearInterval(bar);
  }, [progress])

  return (
    <div className='container'>
        <div className="progressbar">
          <div className="progressN" style={{width: `${progress}%`}}>
          width: {`${progress}%`}
          </div>
        </div>
    </div>
  )
}

export default ProgressBar