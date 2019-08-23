import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
    .then( res => {
      console.log(res);
    })
    .catch( err => console.log("Error:", err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
