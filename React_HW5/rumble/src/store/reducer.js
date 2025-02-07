import {
  UPDATE_USER_DATA,
  CLEAR_USER,
  TOGGLE_BATTLE_BUTTON,
  TOGGLE_RESTART_BUTTON,
  UPDATE_USER_REPOSITORIES,
  CALCULATE_USERS_SCORE,
  RESET_ALL_USERS,
  CLEAR_SCORES,
  TRIGGER_RESTART
} from "./actions";

export const initialState = {
  users: [], 
  showBattleBtn: false,
  showRestartBtn: false,
  score: []
};

export function reducer(state, { type, payload }) {
  switch (type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id
            ? { ...user, data: payload.data, username: payload.data.login }
            : user
        ),
      };

    case CLEAR_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload.id),
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
              (user.repos?.reduce((stars, repo) => stars + (repo.stargazers_count || 0), 0) || 0),
          }))
          .sort((a, b) => b.score - a.score),
      };

    case RESET_ALL_USERS:
      return {
        ...state,
        users: [],
        score: [],
        showBattleBtn: false,
        showRestartBtn: false
      };

    case CLEAR_SCORES:
      return { ...state, score: [] };

    case TRIGGER_RESTART:
      return { ...state, showRestartBtn: false };

    default:
      return state;
  }
}
