import React from "react";

import { Button } from "../components/Button/index";

export default function ButtonsDarkMode() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        marginTop: "3rem",
        backgroundColor: "#081844",
        color: "white",
      }}
    >
      <div>
        <h3>Primary</h3>
        <Button content="Primary" version="d-primary" size="small" />
        <Button content="primary big" version="d-primary" size="big" />
        <Button content="Clicked" version="d-primary-clicked" />
        <Button content="Disabled" version="d-primary-disabled" />
        <Button content="Danger" version="d-danger" />
        <Button content="Danger Big" version="d-danger" size="big" />
      </div>
      <div>
        <h3>Secondary</h3>
        <Button version="d-secondary" size="small" />
        <Button content="secondary big" version="d-secondary" size="big" />
        <Button content="Clicked" version="d-secondary-clicked" />
        <Button content="Disabled" version="d-secondary-disabled" />
      </div>
      <div>
        <h3>Text Default</h3>
        <div>
          <Button content="Text" version="d-text" size="small" />
          <Button content="Text Big" version="d-text" size="big" />
          <Button content="Clicked" version="d-text-clicked" size="small" />
          <Button content="Disabled" version="d-text-disabled" size="small" />
        </div>
      </div>
      <div>
        <h3>Text with Icons</h3>
        <Button
          content="Text Left Icon"
          leftIcon
          version="d-text"
          size="small"
        />
        <Button
          content="Clicked"
          leftIcon
          version="d-text-clicked"
          size="small"
        />
        <Button content="Text Left Icon" leftIcon version="d-text" size="big" />
        <Button
          content="Clicked"
          leftIcon
          version="d-text-clicked"
          size="big"
        />
        <Button
          content="Text Right Icon"
          rightIcon
          version="d-text"
          size="small"
        />
        <Button
          content="Clicked"
          rightIcon
          version="d-text-clicked"
          size="small"
        />
        <Button
          content="Text Right Icon"
          rightIcon
          version="d-text"
          size="big"
        />
        <Button
          content="Clicked"
          rightIcon
          version="d-text-clicked"
          size="big"
        />
      </div>
      <div>
        <h3>Text with Link</h3>
        <Button content="Text" version="d-text-link" size="small" />
        <Button content="Link Big" version="d-text-link" size="big" />
        <Button content="Clicked" version="d-text-link-clicked" size="small" />
      </div>
    </section>
  );
}
