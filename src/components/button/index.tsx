import styles from "./styles.module.scss";

interface IButton {
  type: "button" | "submit";
  children: string;
  disabled: boolean;
  height?:string
  width?:string
}

const Button = ({ type, children, disabled, height, width }: IButton) => {
  const buttonclass = [
    styles.button,
    height && styles[`height${height as string}`],
    width && styles[`width${width as string}`],
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
