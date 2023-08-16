import { useState, useEffect } from "react";
import "../styles/App.css";
import ShowCard from "./Showcard";
import Card from "./Card";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [pokeInfos, setPokeInfos] = useState([]);
  console.log(pokeInfos);

  const whenClick = () => {
    if (inputValue.length < 1) {
      alert(`Remplir s'il vous plait `);
    } else {
      const cardInfos = fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      ).then((res) => {
        res
          .json()
          .then((json) => {
            console.log(json);

            let poke_takeInfos = {
              poke_id: json.id,
              poke_type: json["types"][0]["type"]["name"],
              poke_img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${json.id}.svg`,
              poke_name: json.species.name,
            };

            setPokeInfos((prevInfos) => [...prevInfos, poke_takeInfos]);

            // <ShowCard pokeInfo={pokeInfos[pokeInfos.length - 1]} />
          })
          .catch(() => {
            alert(`Nom de pokémon non exixstant`);
          });
      });
    }
  };

  return (
    
    <div className="App">
      <img id="pokedex-logo" src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png"></img>
      <input id="search-bar"
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button id="search-button" onClick={whenClick}>Search</button>
      <div>

          <div className="card-content">
            {pokeInfos.map((pokeInfo, index) => (

              <Card
                card_id={pokeInfo.poke_id}
                card_type={pokeInfo.poke_type}
                card_img={pokeInfo.poke_img}
                card_name={pokeInfo.poke_name}
              />

            ))}
          </div>

      </div>
    </div>
  );
}

export default App;
