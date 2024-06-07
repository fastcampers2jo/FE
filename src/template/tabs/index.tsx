import { useState } from "react";
import styles from "./styles.module.scss";

interface ITabs {
  name: string;
  value: string;
}

interface Prop {
  lists: ITabs[];
}

const Tabs = ({ lists }: Prop) => {
  const [isActive, setIsActive] = useState("");
  const onActive = (value: string) => {
    setIsActive(value);
  };
  return (
    <ul className={styles.tabs}>
      {lists.map((list, i) => (
        <li key={i}>
          <button
            className={isActive === list.value ? styles.on : ""}
            onClick={() => onActive(list.value)}
          >
            {list.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
