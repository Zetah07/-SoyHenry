import React from "react";
import "./components/Nav";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>

      <div>
        <Cards characters={characters} />
        <h1>Título</h1>
      </div>
      <hr />
    </div>
  );
}

export default App;
