import React from "react";

import { Button } from "../components/Button/index";

export default function buttonsLightMode() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        marginTop: "3rem",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <div>
        <h3>Primary</h3>
        <Button variant="primary" size="small">
          Primary
        </Button>
        <Button variant="primary" size="big">
          primary big
        </Button>
        <Button variant="primary-clicked">Clicked</Button>
        <Button variant="primary-disabled">Disabled</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="danger" size="big">
          Danger Big
        </Button>
      </div>
      <div>
        <h3>Secondary</h3>
        <Button variant="secondary" size="small">
          secondary
        </Button>
        <Button variant="secondary" size="big">
          secondary big
        </Button>
        <Button variant="secondary-clicked">Clicked</Button>
        <Button variant="secondary-disabled">Disabled</Button>
      </div>
      <div>
        <h3>Text Default</h3>
        <div>
          <Button variant="text" size="small">
            Text
          </Button>
          <Button variant="text" size="big">
            Text Big
          </Button>
          <Button variant="text-clicked" size="small">
            Clicked
          </Button>
          <Button variant="text-disabled" size="small">
            Disabled
          </Button>
          <Button variant="text-disabled">Disabled</Button>
        </div>
        <h3>Text Yellow</h3>
        <div>
          <Button variant="text-yellow" size="small">
            Text
          </Button>
          <Button variant="text-yellow" size="big">
            Text Big
          </Button>
          <Button variant="text-yellow-clicked" size="small">
            Clicked
          </Button>
          <Button variant="text-disabled" size="small">
            Disabled
          </Button>
        </div>
        <h3>Text Orange</h3>
        <div>
          <Button variant="text-orange" size="small">
            Text
          </Button>
          <Button variant="text-orange" size="big">
            Text Big
          </Button>
          <Button variant="text-orange-clicked" size="small">
            Clicked
          </Button>
          <Button variant="text-disabled" size="small">
            Disabled
          </Button>
        </div>
        <h3>Text Blue</h3>
        <div>
          <Button variant="text-blue" size="small">
            Text
          </Button>
          <Button variant="text-blue" size="big">
            Text Big
          </Button>
          <Button variant="text-blue-clicked" size="small">
            Clicked
          </Button>
          <Button variant="text-disabled" size="small">
            Disabled
          </Button>
        </div>
        <h3>Text Aqua</h3>
        <div>
          <Button variant="text-aqua" size="small">
            Text
          </Button>
          <Button variant="text-aqua" size="big">
            Text Big
          </Button>
          <Button variant="text-aqua-clicked" size="small">
            Clicked
          </Button>
          <Button variant="text-disabled" size="small">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h3>Text with Arrows</h3>
        <Button leftArrow variant="text" size="small">
          Text Left Arrow
        </Button>
        <Button leftArrow variant="text-clicked" size="small">
          Clicked
        </Button>
        <Button leftArrow variant="text" size="big">
          Text Left Arrow
        </Button>
        <Button leftArrow variant="text-clicked" size="big">
          Clicked
        </Button>
        <Button rightArrow variant="text" size="small">
          Text Right Arrow
        </Button>
        <Button rightArrow variant="text-clicked" size="small">
          Clicked
        </Button>
        <Button rightArrow variant="text" size="big">
          Text Right Arrow
        </Button>
        <Button rightArrow variant="text-clicked" size="big">
          Clicked
        </Button>
      </div>
      <div>
        <h3>Text with Link</h3>
        <Button variant="text-link" size="small">
          Text
        </Button>
        <Button variant="text-link" size="big">
          Link Big
        </Button>
        <Button variant="text-link-clicked" size="small">
          Clicked
        </Button>
      </div>
    </section>
  );
}
