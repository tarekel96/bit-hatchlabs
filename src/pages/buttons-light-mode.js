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
        <Button version="primary" size="small">
          Primary
        </Button>
        <Button version="primary" size="big">
          primary big
        </Button>
        <Button version="primary-clicked">Clicked</Button>
        <Button version="primary-disabled">Disabled</Button>
        <Button version="danger">Danger</Button>
        <Button version="danger" size="big">
          Danger Big
        </Button>
      </div>
      <div>
        <h3>Secondary</h3>
        <Button version="secondary" size="small">
          secondary
        </Button>
        <Button version="secondary" size="big">
          secondary big
        </Button>
        <Button version="secondary-clicked">Clicked</Button>
        <Button version="secondary-disabled">Disabled</Button>
      </div>
      <div>
        <h3>Text Default</h3>
        <div>
          <Button version="text" size="small">
            Text
          </Button>
          <Button version="text" size="big">
            Text Big
          </Button>
          <Button version="text-clicked" size="small">
            Clicked
          </Button>
          <Button version="text-disabled" size="small">
            Disabled
          </Button>
          <Button version="text-disabled">Disabled</Button>
        </div>
        <h3>Text Yellow</h3>
        <div>
          <Button version="text-yellow" size="small">
            Text
          </Button>
          <Button version="text-yellow" size="big">
            Text Big
          </Button>
          <Button version="text-yellow-clicked" size="small">
            Clicked
          </Button>
          <Button version="text-disabled" size="small">
            Disabled
          </Button>
        </div>
        <h3>Text Orange</h3>
        <div>
          <Button version="text-orange" size="small">
            Text
          </Button>
          <Button version="text-orange" size="big">
            Text Big
          </Button>
          <Button version="text-orange-clicked" size="small">
            Clicked
          </Button>
          <Button version="text-disabled" size="small">
            Disabled
          </Button>
        </div>
        <h3>Text Blue</h3>
        <div>
          <Button version="text-blue" size="small">
            Text
          </Button>
          <Button version="text-blue" size="big">
            Text Big
          </Button>
          <Button version="text-blue-clicked" size="small">
            Clicked
          </Button>
          <Button version="text-disabled" size="small">
            Disabled
          </Button>
        </div>
        <h3>Text Aqua</h3>
        <div>
          <Button version="text-aqua" size="small">
            Text
          </Button>
          <Button version="text-aqua" size="big">
            Text Big
          </Button>
          <Button version="text-aqua-clicked" size="small">
            Clicked
          </Button>
          <Button version="text-disabled" size="small">
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h3>Text with Arrows</h3>
        <Button leftArrow version="text" size="small">
          Text Left Arrow
        </Button>
        <Button leftArrow version="text-clicked" size="small">
          Clicked
        </Button>
        <Button leftArrow version="text" size="big">
          Text Left Arrow
        </Button>
        <Button leftArrow version="text-clicked" size="big">
          Clicked
        </Button>
        <Button rightArrow version="text" size="small">
          Text Right Arrow
        </Button>
        <Button rightArrow version="text-clicked" size="small">
          Clicked
        </Button>
        <Button rightArrow version="text" size="big">
          Text Right Arrow
        </Button>
        <Button rightArrow version="text-clicked" size="big">
          Clicked
        </Button>
      </div>
      <div>
        <h3>Text with Link</h3>
        <Button version="text-link" size="small">
          Text
        </Button>
        <Button version="text-link" size="big">
          Link Big
        </Button>
        <Button version="text-link-clicked" size="small">
          Clicked
        </Button>
      </div>
    </section>
  );
}
