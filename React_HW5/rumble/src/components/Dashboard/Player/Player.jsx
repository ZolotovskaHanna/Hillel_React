import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import PlayerCard from "./PlayerCard/PlayerCard";

export default function Player({ user, index }) {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setShowForm(() => !(user.data && Object.keys(user.data).length));
  }, [user.data]);

  return (
    <div className="player">
      {showForm ? <Form user={user} index={index} /> : <PlayerCard user={user} />}
    </div>
  );
}
