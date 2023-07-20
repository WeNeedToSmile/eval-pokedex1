import React, { useState } from "react";
import "../styles/Button.css";
import Card from "./Card";

function ShowCard() {
  const [inputValue, setInputValue] = useState("");
  const [components, setComponents] = useState([]);

  const WhenClick = () => {

    if (inputValue.length<1) {
      alert(`Remplir s'il vous plait `)
    } else {
    const cardInfos = fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputValue}`
    )
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log(json);
            setComponents((prevComponents) => [...prevComponents, <Card />]);
          })
          .catch(() => {
            alert(`Nom de pokémon non exixstant`)
          });
      })
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>

      <button onClick={WhenClick}>Search</button>

      <div className="contain-card">

        {components.map((component, index) => (

          <div key={index}>{component}</div>

        ))}
        
      </div>
    </div>
  );
}

export default ShowCard;
