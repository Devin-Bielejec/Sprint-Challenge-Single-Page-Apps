import React from "react";

export default function CharacterCard(props) {
  return (
    <div key={props.charInfo.id}>
      <img src={props.charInfo.image}/>
      <h3>{props.charInfo.name}</h3>
      <h5>{props.charInfo.species} {props.charInfo.status}</h5>
      <p>Location: {props.charInfo.location.name}</p>
      <p>Origin: {props.charInfo.origin.name}</p>
      <h4>Episodes</h4>
    </div>
  );
}
