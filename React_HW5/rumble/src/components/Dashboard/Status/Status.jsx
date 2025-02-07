import React, { useContext } from "react";
import GitHubContext from "../../../contexts/GitHubContext";

export default function Status({ user }) {
  const { score } = useContext(GitHubContext);

  const scoreResult = () => {
    let index = score.findIndex((item) => item.id === user.id);
    return index === 0 ? "🥳 Winner!" : `🥵 Loser ${index + 1}/${score.length}`;
  };

  return <p className="player-status">{scoreResult()}</p>;
}
