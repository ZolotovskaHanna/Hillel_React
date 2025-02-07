import React, { useContext, useState, useEffect } from "react";
import { CLEAR_USER } from "../../../../store/actions";
import GitHubContext from "../../../../contexts/GitHubContext";
import Button from "../../../Button/Button";
import Statistics from "../../Statistics/Statistics";
import Status from "../../Status/Status";

export default function PlayerCard({ user }) {
  const { score, restartAction, dispatch } = useContext(GitHubContext);
  const [showUserStatistics, setShowUserStatistics] = useState(false);
  const [showUserStatus, setShowUserStatus] = useState(false);
  const resetUser = () => dispatch({ type: CLEAR_USER, payload: user });

  useEffect(() => {
    if (score?.length > 0) {
      setShowUserStatistics(true);
      setShowUserStatus(true);
    }
  }, [score]);

  useEffect(() => {
    if (restartAction) {
      setShowUserStatistics(false);
      setShowUserStatus(false);
    }
  }, [restartAction]);

  if (!user.data) return null;

  return (
    <div className="player-card">
      {showUserStatus && <Status user={user} />}
      <img className="player-statistics__img" src={user.data.avatar_url} alt={user.data.login} />
      <p className="player-statistics__title">{user.data.login}</p>
      {showUserStatistics ? <Statistics user={user} /> : <Button title="Reset" handleClick={resetUser} />}
    </div>
  );
}
