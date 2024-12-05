import React, { useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {

  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  }

  return (
    <>
      <div className="toggle-switch" style={{backgroundColor : isOn ? "#4caf50" : "" }} onClick={handleToggleSwitch}>
        <div className= {`switch ${isOn ? "on" : "off"} `}>
          <span className="switch-state">{isOn ? "on" : "off"}</span>
        </div>
      </div>
    </>
  )
}

export default ToggleSwitch;
