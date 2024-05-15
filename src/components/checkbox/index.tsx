import styles from "./styles.module.scss";

const Checkbox = ({
  name,
  value,
  id,
  children,
  color,
  border,
}: {
  name: string;
  value: string;
  id: string;
  children: string;
  color: string;
  border?: string;
}) => (
  <div>
    <input
      type="checkbox"
      name={name}
      value={value}
      id={id}
      className={`${styles.input} ${styles[color]} ${styles[border as string]}`}
    />
    <label htmlFor={id}>{children}</label>
  </div>
);

export default Checkbox;
