import React from "react";

export default function EpisodeCard({ id, name, episode}) {
  return (
    <div id={id}>
      <h1>{name}</h1>
      <h1>Episode: {episode}</h1>
    </div>
  );
}
