// import packages
import React, { useState } from "react";
import PropTypes from "prop-types";

// import icon components from react-icons npm
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

// import style module
import styles from "./button.module.scss";

/**
 * A simple React card component
 * @name Button
 * @returns {} returns a simple button component with various prop options to change it's styling
 */
export default function Button(props) {
  const [clicked, setClick] = useState("");
  return (
    <button
      className={`
        button 
        ${styles[props.version + clicked]}
        ${styles[props.size]}
  `}
      onClick={() => {
        setClick("-clicked");
      }}
      size={props.size}
    >
      <p>
        <span className={`${styles["icon-left"]}`}>
          {props.leftIcon ? <FiArrowLeft /> : ""}
        </span>
        <span className="button-content">{props.content}</span>
        <span className={`${styles["icon-right"]}`}>
          {props.rightIcon ? <FiArrowRight /> : ""}
        </span>
      </p>
    </button>
  );
}

Button.propTypes = {
  /**
   * The content for the button
   */
  content: PropTypes.string,
  /**
   * The version of a button ie primary, secondary, text, etc.
   * Possible combinations: primary, primary-disabled, secondary, secondary-disabled, text, text-disabled, text-yellow, text-orange, text-blue, text-aqua
   */
  version: PropTypes.string,
  /**
   * The size for a button: "big" or "small"
   */
  size: PropTypes.string,
  /**
   * Includes an icon to the left of the content
   */
  leftIcon: PropTypes.bool,
  /**
   * Includes an icon to the right of the content
   */
  rightIcon: PropTypes.bool,
};

Button.defaultProps = {
  content: "Content",
};
