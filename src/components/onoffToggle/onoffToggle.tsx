import { useEffect, useState } from "react";
import "./onofftoggle.scss";

interface OnOffToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

const OnOffToggle = ({ isActive, onToggle }: OnOffToggleProps) => {
  const [isOn, setIsOn] = useState(isActive);

  useEffect(() => {
    setIsOn(isActive);
  }, [isActive]);

  const handleSwitch = () => {
    setIsOn(!isOn);
    onToggle();
  };

  // // toggle시 반대값
  // const toggleSwitch = () => {
  //   const newValue = !isOn;
  //   setIsOn(newValue);

  //   sendValveValue(newValue);
  // };
  //   // 서버로 값 전송
  // const sendValue = (newValue) => {
  //   const ws = new WebSocket("ws://웹소켓 서버");

  //   ws.onopen = () => {
  //     const message = { value: newValue };
  //     ws.send(JSON.stringify(message));
  //   };
  //   ws.close();

  return (
    <form>
      <label className="switch">
        <input type="checkbox" onChange={handleSwitch} checked={isOn} />
        <span className="slider" />
      </label>
    </form>
  );
};

export default OnOffToggle;
