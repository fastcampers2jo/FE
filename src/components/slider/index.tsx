/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "./slider.scss";
import ReactSlider from "react-slider";

const Slider: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value: externalValue, onChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderThumb = (props: any) => {
    const circleStyle = {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      border: "1.5px solid #01EA2B",
      borderColor: "#01EA2B",
      borderActiveColor: "#01EA2B",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#000",
      transform: "translateY(-40%)",
    };

    return <div {...props} style={{ ...props.style, ...circleStyle }} />;
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          min={1}
          max={36}
          value={externalValue}
          onChange={(val) => onChange(val)}
          renderThumb={renderThumb}
        />
        <div className="value-display">
          <div className="slider__text">
            <div>|</div>
            <span>0</span>
          </div>
          <div className="slider__text">
            <div>|</div>

            <span>12개월</span>
          </div>
          <div className="slider__text">
            <div>|</div>

            <span>24개월</span>
          </div>
          <div className="slider__text">
            <div>|</div>

            <span>36</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
