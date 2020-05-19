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
        <Button variant="d-primary" size="small">
          Primary
        </Button>
        <Button variant="d-primary" size="big">
          primary big
        </Button>
        <Button variant="d-primary-clicked">Clicked</Button>
        <Button variant="d-primary-disabled">Disabled</Button>
        <Button variant="d-danger">Danger</Button>
        <Button variant="d-danger" size="big">
          Danger Big
        </Button>
      </div>
      <div>
        <h3>Secondary</h3>
        <Button variant="d-secondary" size="small">
          secondary small
        </Button>
        <Button variant="d-secondary" size="big">
          secondary big
        </Button>
        <Button variant="d-secondary-clicked">Clicked</Button>
        <Button variant="d-secondary-disabled">Disabled</Button>
      </div>
      <div>
        <h3>Text Default</h3>
        <div>
          <Button variant="d-text" size="small">
            Text
          </Button>
          <Button variant="d-text" size="big">
            Text Big
          </Button>
          <Button variant="d-text-clicked" size="small">
            Clicked
          </Button>
          <Button variant="d-text-disabled" size="small">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h3>Text with Arrows</h3>
        <Button leftArrow variant="d-text" size="small">
          Text Left Arrow
        </Button>
        <Button leftArrow variant="d-text-clicked" size="small">
          Clicked
        </Button>
        <Button leftArrow variant="d-text" size="big">
          Text Left Arrow
        </Button>
        <Button leftArrow variant="d-text-clicked" size="big">
          Clicked
        </Button>
        <Button rightArrow variant="d-text" size="small">
          Text Right Arrow
        </Button>
        <Button rightArrow variant="d-text-clicked" size="small">
          Clicked
        </Button>
        <Button rightArrow variant="d-text" size="big">
          Text Right Arrow
        </Button>
        <Button rightArrow variant="d-text-clicked" size="big">
          Clicked
        </Button>
      </div>
      <div>
        <h3>Text with Link</h3>
        <Button variant="d-text-link" size="small">
          Text
        </Button>
        <Button variant="d-text-link" size="big">
          Link Big
        </Button>
        <Button variant="d-text-link-clicked" size="small">
          Clicked
        </Button>
      </div>
    </section>
  );
}
