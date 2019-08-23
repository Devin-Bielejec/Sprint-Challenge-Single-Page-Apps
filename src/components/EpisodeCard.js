import React from "react";

export default function EpsisodeCard({ id, props }) {
  return (
    <div key={id}>
      <h1>{props.epInfo.name}</h1>
      <h1>Episode: {props.epInfo.episode}</h1>
    </div>
  );
}
