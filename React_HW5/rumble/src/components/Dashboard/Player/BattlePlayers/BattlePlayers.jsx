import React, { useContext } from "react";
import Player from "../Player";
import GitHubContext from "../../../../contexts/GitHubContext";

export default function BattlePlayers() {
  const { users } = useContext(GitHubContext);

  return (
    <div className="battle-players">
      {users.map((user, index) => <Player key={user.id} user={user} index={index + 1} />)}
    </div>
  );
}

