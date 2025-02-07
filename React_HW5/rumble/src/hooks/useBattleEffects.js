import { useEffect } from "react";
import {
  TOGGLE_BATTLE_BUTTON,
  CALCULATE_USERS_SCORE,
  TOGGLE_RESTART_BUTTON,
  RESET_ALL_USERS,
  CLEAR_SCORES,
  TRIGGER_RESTART,
} from "../store/actions";

export default function useBattleEffects(state, dispatch) {
  useEffect(() => {
    console.log("Users updated:", state.users);
  }, [state.users]);

  useEffect(() => {
    const everyUserHasData = state.users.every((user) => user.data && Object.keys(user.data).length);
    dispatch({ type: TOGGLE_BATTLE_BUTTON, payload: everyUserHasData });
  }, [state.users]);

  useEffect(() => {
    const everyUserHasRepos = state.users.every((user) => user.repos);
    if (everyUserHasRepos) dispatch({ type: CALCULATE_USERS_SCORE });
  }, [state.users]);

  useEffect(() => {
    console.log("Score updated:", state.score);
    if (state.score.length) {
      dispatch({ type: TOGGLE_BATTLE_BUTTON, payload: false });
      dispatch({ type: TOGGLE_RESTART_BUTTON, payload: true });
    }
  }, [state.score]);

  useEffect(() => {
    if (state.restartAction) {
      dispatch({ type: RESET_ALL_USERS });
      dispatch({ type: TOGGLE_RESTART_BUTTON, payload: false });
      dispatch({ type: CLEAR_SCORES });
      dispatch({ type: TRIGGER_RESTART, payload: false });
    }
  }, [state.restartAction]);
}
