import { Back } from "assets";
import "styles/mobile.scss";

interface ITop {
  children: string;
}

const loginTop = ({ children }: ITop) => {
  const onBack = () => window.history.back();
  return (
    <div className="loginTop">
      <Back onClick={() => onBack()} />
      <h2>{children}</h2>
      <div />
    </div>
  );
};

export default loginTop;
