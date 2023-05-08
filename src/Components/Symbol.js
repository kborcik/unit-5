import React from "react"
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";


const Symbol = (props) => {
    const currentDisplay = useSelector(selectDisplay)
  return (
    <div className="symbols">
      <div className="stack">
        <h3>The {currentDisplay.name.common} Flag: </h3>
        {currentDisplay.flags ? (
            <img src={currentDisplay.flags.png} alt=''/>
        ) : (
            "No Flag Found"
        )}
      </div>
      <div className="stack">
        <h3>The {currentDisplay.name.common} Coat of Arms: </h3>
        {currentDisplay.coatOfArms ? (
            <img src={currentDisplay.coatOfArms.png} alt="" />
        ) : (
            "No Coat of Arms Found"
        )}
      </div>
    </div>
  )
};

export default Symbol;
