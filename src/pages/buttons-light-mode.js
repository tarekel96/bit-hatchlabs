import React from "react";

import Button from "../components/Button/index";

export default function buttons() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <div>
        <h3>Primary</h3>
        <Button content="Primary" version="primary" size="small" />
        <Button content="primary big" version="primary" size="big" />
        <Button content="Clicked" version="primary-clicked" />
        <Button content="Disabled" version="primary-disabled" />
        <Button content="Danger" version="danger" />
        <Button content="Danger Big" version="danger" size="big" />
      </div>
      <div>
        <h3>Secondary</h3>
        <Button version="secondary" size="small" />
        <Button content="secondary big" version="secondary" size="big" />
        <Button content="Clicked" version="secondary-clicked" />
        <Button content="Disabled" version="secondary-disabled" />
      </div>
      <div>
        <h3>Text Default</h3>
        <div>
          <Button content="Text" version="text" size="small" />
          <Button content="Text Big" version="text" size="big" />
          <Button content="Clicked" version="text-clicked" size="small" />
          <Button content="Disabled" version="text-disabled" size="small" />
        </div>
        <h3>Text Yellow</h3>
        <div>
          <Button content="Text" version="text-yellow" size="small" />
          <Button content="Text Big" version="text-yellow" size="big" />
          <Button
            content="Clicked"
            version="text-yellow-clicked"
            size="small"
          />
          <Button content="Disabled" version="text-disabled" size="small" />
        </div>
        <h3>Text Orange</h3>
        <div>
          <Button content="Text" version="text-orange" size="small" />
          <Button content="Text Big" version="text-orange" size="big" />
          <Button
            content="Clicked"
            version="text-orange-clicked"
            size="small"
          />
          <Button content="Disabled" version="text-disabled" size="small" />
        </div>
        <h3>Text Blue</h3>
        <div>
          <Button content="Text" version="text-blue" size="small" />
          <Button content="Text Big" version="text-blue" size="big" />
          <Button content="Clicked" version="text-blue-clicked" size="small" />
          <Button content="Disabled" version="text-disabled" size="small" />
        </div>
        <h3>Text Aqua</h3>
        <div>
          <Button content="Text" version="text-aqua" size="small" />
          <Button content="Text Big" version="text-aqua" size="big" />
          <Button content="Clicked" version="text-aqua-clicked" size="small" />
          <Button content="Disabled" version="text-disabled" size="small" />
        </div>
      </div>
      <div>
        <h3>Text with Icons</h3>
        <Button content="Text Left Icon" leftIcon version="text" size="small" />
        <Button
          content="Clicked"
          leftIcon
          version="text-clicked"
          size="small"
        />
        <Button content="Text Left Icon" leftIcon version="text" size="big" />
        <Button content="Clicked" leftIcon version="text-clicked" size="big" />
        <Button
          content="Text Right Icon"
          rightIcon
          version="text"
          size="small"
        />
        <Button
          content="Clicked"
          rightIcon
          version="text-clicked"
          size="small"
        />
        <Button content="Text Right Icon" rightIcon version="text" size="big" />
        <Button content="Clicked" rightIcon version="text-clicked" size="big" />
      </div>
      <div>
        <h3>Text with Link</h3>
        <Button content="Text" version="text-link" size="small" />
        <Button content="Link Big" version="text-link" size="big" />
        <Button content="Clicked" version="text-link-clicked" size="small" />
      </div>
    </section>
  );
}
