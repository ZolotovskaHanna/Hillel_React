import React, { useRef, useContext } from "react";
import githubUsers from "../../../service/githubUsers";
import GitHubContext from "../../../contexts/GitHubContext";
import Button from "../../Button/Button";
import { UPDATE_USER_DATA } from "../../../store/actions";

export default function Form({ user, index }) {
  const { dispatch } = useContext(GitHubContext);
  const inputRef = useRef();
  const labelRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = inputRef.current.value.trim();

    if (!username) {
      labelRef.current.classList.add("error");
      return;
    }

    try {
      const response = await githubUsers.getUser(username);
      dispatch({ type: UPDATE_USER_DATA, payload: { ...user, data: response } });
      labelRef.current.classList.remove("error");
    } catch (err) {
      console.error("Ошибка запроса пользователя:", err.response ? err.response.data : err.message);
      labelRef.current.classList.add("error");

      const errorMessage = labelRef.current.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.style.display = "block";
      }
    }
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <label ref={labelRef} className="player-form__label">
        <p className="player-form__title">
          Choose <b>Player {index}</b> username:
        </p>
        <input
          ref={inputRef}
          required
          type="text"
          className="player-form__input"
          placeholder={`Player ${index}`}
          defaultValue={user.username}
        />
        <p className="error-message">Username not exist</p>
      </label>
      <Button title="Submit" />
    </form>
  );
}
