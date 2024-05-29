import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useMessage } from "stores/useMessage";
import styles from "./styles.module.scss";

const SnackBar = () => {
  const { message, clearMessage } = useMessage((state) => state);
  const props = useSpring({
    opacity: message ? 0.7 : 0,
    config: { duration: 500 },
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 3000);
    return () => clearTimeout(timer);
  }, [clearMessage, message]);
  if (message) {
    return (
      <animated.div style={props} className={styles.snackBar}>
        <p>{message}</p>
      </animated.div>
    );
  }
  return null;
};

export default SnackBar;
