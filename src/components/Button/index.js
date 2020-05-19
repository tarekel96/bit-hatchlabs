// import packages
import React, { useState } from "react";
//import components
import { LeftArrow, RightArrow } from "./icons.js";
// import style module
import styles from "./button.module.scss";

/**
 * A React button component that dynamically changes themes, sizes, and adds arrow icons depending on the props passed to it.
 * Possible theme combinations.
 * Light Mode: primary, primary-disabled, secondary, secondary-disabled, text, text-disabled, text-yellow, text-orange, text-blue, text-aqua
 * Dark Mode: d-primary, d-primary-disabled, d-secondary, d-secondary-disabled, d-text, d-text-disabled
 * @name Button
 * @param children - the content for the button, add text like would normally do for an html button.
 * @param variant {string} - the version of a button. Prepend the version with a "d-" to use the dark version of the button.
 * @param size {string} - the size for a button: "big" or "small".
 * @param leftArrow {boolean} - includes an arrow icon to the left of the content. Arrows are used only with the "text" variant of button.
 * @param rightArrow {boolean} - includes an arrow icon to the right of the content. Arrows are used only with the "text" variant of button.
 * @returns- returns a button component with various prop options to change it's styling.
 */
export const Button = ({
  children = "button",
  variant = "primary",
  size = "small",
  leftArrow = false,
  rightArrow = false,
}) => {
  const [clicked, setClick] = useState("");
  return (
    <button
      className={`
        button 
        ${styles[variant + clicked]}
        ${styles[size]}
  `}
      onClick={() => {
        setClick("-clicked");
      }}
      size={size}
    >
      <div>
        {leftArrow ? <LeftArrow styles={styles} /> : ""}
        <span className="button-content">{children}</span>
        {rightArrow ? <RightArrow styles={styles} /> : ""}
      </div>
    </button>
  );
};
