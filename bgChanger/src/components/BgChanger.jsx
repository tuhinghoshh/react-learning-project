import React, { useState } from 'react'

function BgChanger() {
    const [color, setColor] = useState('black')
  return (
    <div className='container' style={{backgroundColor: color}}>
        <div className="middle">
            <button onClick={() => setColor("green")} style={{backgroundcolor : "green"}}>LightGreen</button>
            <button onClick={() => setColor('red')}>Red</button>
        </div>
    </div>
  )
}

export default BgChanger