import service from "../service/githubUsers";
import { UPDATE_USER_REPOSITORIES, TRIGGER_RESTART } from "../store/actions";

export default function useBattleActions(state, dispatch) {
  const startBattle = async () => {
    try {
      const usersWithRepos = await Promise.all(
        state.users.map((user) =>
          service.getUserRepos(user.data.login).then((repos) => ({ ...user, repos }))
        )
      );
      usersWithRepos.forEach((user) => {
        dispatch({ type: UPDATE_USER_REPOSITORIES, payload: user });
      });
    } catch (err) {
      console.error("Error fetching user repositories:", err);
    }
  };

  const restartBattle = () => {
    dispatch({ type: TRIGGER_RESTART, payload: true });
  };

  return { startBattle, restartBattle };
}
