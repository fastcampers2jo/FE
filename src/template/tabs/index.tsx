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
  const [isActive, setIsActive] = useState(0);
  const onActive = (id: number) => {
    setIsActive(id);
  };
  return (
    <ul className={styles.tabs}>
      {lists.map((list, i) => (
        <li key={i}>
          <button className={isActive === i ? styles.on : ""} onClick={() => onActive(i)}>{list.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
