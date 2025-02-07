import React, { useContext } from "react";
import GitHubContext from "../../../contexts/GitHubContext";

export default function Statistics({ user }) {
  const { score } = useContext(GitHubContext);

  return (
    <ul className="player-statistics">
      <li>
        <span role="img" aria-label="Followers">👥</span> Followers: {user.data.followers}
      </li>
      <li>
        <span role="img" aria-label="Stars">🌟</span> Repositories stars:{" "}
        {user.repos.reduce((stars, repo) => stars + (repo.stargazers_count || 0), 0)}
      </li>
      <li className="total-score">
        <span role="img" aria-label="Total Score">🏁</span> Total score: {score.find((item) => item.id === user.id)?.score || 0}
      </li>
    </ul>
  );
}
