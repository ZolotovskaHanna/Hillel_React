import React from "react";
import "./style.sass";
import BattlePlayers from "./Player/BattlePlayers/BattlePlayers";
import Button from "../Button/Button";
import GitHubContext from "../../contexts/GitHubContext";
import useBattleState from "../../hooks/useBattleState";
import useBattleEffects from "../../hooks/useBattleEffects";
import useBattleActions from "../../hooks/useBattleActions";

export default function Dashboard() {
  const [state, dispatch] = useBattleState();
  useBattleEffects(state, dispatch);
  const { startBattle, restartBattle } = useBattleActions(state, dispatch);

  return (
    <GitHubContext.Provider value={{ ...state, dispatch }}>
      <div className="dashboard-container">
        <h1>Let's Get Ready to Rumble 🥊</h1>
        <BattlePlayers />
        {state.showBattleBtn && <Button title="Battle!" handleClick={startBattle} />}
        {state.showRestartBtn && <Button title="Restart 🔄" handleClick={restartBattle} />}
      </div>
    </GitHubContext.Provider>
  );
}
