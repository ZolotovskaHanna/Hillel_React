import { useReducer } from "react";
import {
  UPDATE_USER_DATA,
  CLEAR_USER,
  TOGGLE_BATTLE_BUTTON,
  UPDATE_USER_REPOSITORIES,
  CALCULATE_USERS_SCORE,
  TOGGLE_RESTART_BUTTON,
  RESET_ALL_USERS,
  CLEAR_SCORES,
  TRIGGER_RESTART,
} from "../store/actions";

const initArgs = {
  users: [
    { id: 1, username: "tmcw" },
    { id: 2, username: "isaacs" },
    // { id: 3, username: "postmodern" },
    // { id: 4, username: "fsouza" },
    // { id: 5, username: "mrdoob" },
    // { id: 6, username: "hadley" },
    // { id: 7, username: "darwin" },
    // { id: 8, username: "jaspervdj" },
  ],
  showBattleBtn: false,
  showRestartBtn: false,
  score: [],
  restartAction: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id ? { ...user, data: payload.data, username: payload.data.login } : user
        ),
      };
    case CLEAR_USER:
      return {
        ...state,
        users: state.users.map((user) => (user.id === payload.id ? { id: user.id } : user)),
      };
    case TOGGLE_BATTLE_BUTTON:
      return { ...state, showBattleBtn: payload };
    case TOGGLE_RESTART_BUTTON:
      return { ...state, showRestartBtn: payload };
    case UPDATE_USER_REPOSITORIES:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id ? { ...user, repos: payload.repos } : user
        ),
      };
    case CALCULATE_USERS_SCORE:
      return {
        ...state,
        score: state.users
          .map((user) => ({
            id: user.id,
            score:
              (user.data?.followers || 0) +
              (user.repos ? user.repos.reduce((stars, repo) => stars + repo.stargazers_count, 0) : 0),
          }))
          .sort((a, b) => b.score - a.score),
      };
    case RESET_ALL_USERS:
      return { ...state, users: state.users.map((user) => ({ id: user.id })) };
    case CLEAR_SCORES:
      return { ...state, score: [] };
    case TRIGGER_RESTART:
      return { ...state, restartAction: payload };
    default:
      return state;
  }
};

export default function useBattleState() {
  return useReducer(reducer, initArgs);
}
