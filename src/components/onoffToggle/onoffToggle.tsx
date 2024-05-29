import { useState } from "react";
import "./onofftoggle.scss";

const OnOffToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const handleSwitch = () => {
    setIsOn(!isOn);
  };
  // const [isOn, setIsOn] = useState(value);

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
