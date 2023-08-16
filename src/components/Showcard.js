import { useState } from "react";
import Card from "./Card";


function ShowCard (pokeInfo) {
  const [components, setComponents] = useState([]);
  
    return (
        <div>
    
          <div className="contain-card">
    
            {components.map((component, index) => (
    
              <div key={index}>{component}</div>
    
            ))}
            
          </div>
        </div>
      );

}

export default ShowCard