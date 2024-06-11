import { useTab } from "stores/useTab";
import styles from "./styles.module.scss";

interface ITabs {
  name: string;
  value: string;
}

interface Prop {
  lists: ITabs[];
}

const Tabs = ({ lists }: Prop) => {
  const { activeTab, setActiveTab } = useTab((state) => state);
  const onActive = (value: string) => {
    setActiveTab(value);
  };
  return (
    <ul className={styles.tabs}>
      {lists.map((list, i) => (
        <li key={i}>
          <button
            className={activeTab === list.value ? styles.on : ""}
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
