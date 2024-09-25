import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {

  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? 'on' : 'off';
  const toggleBGColor = {backgroundColor: isOn ? "#4caf50": ""}
  
  return (

<>
    <h1 style={{color: "#000", textAlign: "center"}}>Toggle Switch <IoIosSwitch style={{color: "#000", textAlign: "center"}}/></h1>
    <div className="toggle-switch" style={toggleBGColor} onClick={handleToggleSwitch}>
      <div className={`switch ${checkIsOn} `}>
        <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
    </>
  );

};
