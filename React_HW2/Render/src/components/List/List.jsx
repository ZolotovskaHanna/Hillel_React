import React, { useState, useEffect } from "react";
import "./style.sass";

const animals = [
  { type: "turtle", icon: "🐢" },
  { type: "octopus", icon: "🐙" },
  { type: "fish", icon: "🐠" },
  { type: "flamingo", icon: "🦩" },
  { type: "penguin", icon: "🐧" },
];

export default function List() {
  const [list, setList] = useState(animals);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setList((prevList) => {
        const inactiveItems = prevList.filter((item) => !item.active);

        if (inactiveItems.length === 0) {
          clearInterval(interval);
          setIntervalId(null);
          return prevList;
        }

        const randomIndex = Math.floor(Math.random() * inactiveItems.length);
        const randomItem = inactiveItems[randomIndex];

        console.log("Random item ➤", randomItem);

        return prevList.map((item) =>
          item.type === randomItem.type ? { ...item, active: true } : item
        );
      });
    }, 1000);

    setIntervalId(interval); 

    return () => clearInterval(interval);
  }, []);

  return (
    <table className="animal-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.type} className={item.active ? "active" : ""}>
            <td>{item.type}</td>
            <td>{item.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
