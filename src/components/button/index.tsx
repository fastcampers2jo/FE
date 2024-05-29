import styles from "./styles.module.scss";

interface IButton {
  type: "button" | "submit";
  children: string;
  disabled: boolean;
  height?:string
}

const Button = ({ type, children, disabled, height }: IButton) => {
  const buttonclass = [
    styles.button,
    height && styles[`height${height as string}`],
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button type={type} className={buttonclass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
