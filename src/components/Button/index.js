// import packages
import React, { useState } from "react";
// import style module
import styles from "./button.module.scss";

/**
 * A React button component that dynamically changes themes, sizes, and adds arrow icons depending on the props passed to it.
 * Possible theme combinations.
 * Light Mode: primary, primary-disabled, secondary, secondary-disabled, text, text-disabled, text-yellow, text-orange, text-blue, text-aqua
 * Dark Mode: d-primary, d-primary-disabled, d-secondary, d-secondary-disabled, d-text, d-text-disabled
 * @name Button
 * @param children - the content for the button, add text like would normally do for an html button.
 * @param variant - the version of a button. Prepend the version with a "d-" to use the dark version of the button.
 * @param size - the size for a button: "big" or "small".
 * @param leftArrow - includes an arrow icon to the left of the content. Arrows are used only with the "text" variant of button.
 * @param rightArrow - includes an arrow icon to the right of the content. Arrows are used only with the "text" variant of button.
 * @returns- returns a simple button component with various prop options to change it's styling.
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
        {leftArrow ? <LeftArrow /> : ""}
        <span className="button-content">{children}</span>
        {rightArrow ? <RightArrow /> : ""}
      </div>
    </button>
  );
};

const LeftArrow = () => {
  return (
    <svg
      className={`${styles["icon-left"]}`}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.394793 5.65313C0.395581 5.65231 0.396372 5.65149 0.397167 5.65067L5.54272 0.374328C5.73089 0.181376 6.03597 0.181376 6.22414 0.374328C6.41231 0.567279 6.41231 0.880116 6.22414 1.07307L1.8952 5.51205H19.262C19.5315 5.51205 19.75 5.73053 19.75 6.00004C19.75 6.26956 19.5315 6.48804 19.262 6.48804H1.8952L6.22414 10.927C6.41231 11.12 6.41231 11.4328 6.22414 11.6258C6.03597 11.8187 5.73089 11.8187 5.54272 11.6258L0.397167 6.34941C0.396372 6.3486 0.395581 6.34778 0.394793 6.34696C0.305389 6.25851 0.25 6.13575 0.25 6.00004C0.25 5.86434 0.305389 5.74158 0.394793 5.65313Z"
      />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      className={`${styles["icon-right"]}`}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6052 5.64849C19.6044 5.64767 19.6036 5.64685 19.6028 5.64604L14.4573 0.369689C14.2691 0.176738 13.964 0.176738 13.7759 0.369689C13.5877 0.562641 13.5877 0.875477 13.7759 1.06843L18.1048 5.50741H0.737999C0.468485 5.50741 0.25 5.72589 0.25 5.99541C0.25 6.26492 0.468485 6.4834 0.737999 6.4834H18.1048L13.7759 10.9224C13.5877 11.1153 13.5877 11.4282 13.7759 11.6211C13.964 11.8141 14.2691 11.8141 14.4573 11.6211L19.6028 6.34477C19.6036 6.34396 19.6044 6.34314 19.6052 6.34232C19.6946 6.25387 19.75 6.13111 19.75 5.99541C19.75 5.8597 19.6946 5.73694 19.6052 5.64849Z"
      />
    </svg>
  );
};
