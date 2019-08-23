import React from "react";

export default function LocationCard({ id, name, type, dimension, residents }) {
  return (
    <div key={id}>
      <h1>{name}</h1>
      <h1>{type}</h1>
      <h1>{dimension}</h1>
      <h1>Number of Residents: {residents.length}</h1>
    </div>
  );
}
