import React from "react";
import Player from "./Player";
import players from "./players";

function PlayersList() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
