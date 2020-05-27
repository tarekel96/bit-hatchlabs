import React from "react";
//import styles from "./icon.module.scss";

const Icon = ({
  // width = "48px",
  // height = "48px",
  color = null,
  bgcolor = null,
  padding = null,
  className = null,
  size = "xlarge",
  children,
}) => {
  const XL = `48px`;
  const L = `32px`;
  const M = `18px`;
  const S = `18px`;
  size = size.toLowerCase();

  switch (size) {
    case "xlarge":
      size = XL;
      break;
    case "large":
      size = L;
      break;
    case "medium":
      size = M;
      break;
    case "small":
      size = S;
      break;
    default:
      size = XL;
      break;
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      style={{
        backgroundColor: bgcolor,
        fill: color,
        padding,
        height: size,
        width: size,
      }}
      className={className + " "}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default Icon;
