import {html,css,LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

import logo from "@assets/cart.svg";

@customElement("lit-logo")
export class LitLogo extends LitElement {
  static styles = css`
  :host {
    display: flex;
  }

  .logo {
    filter: invert(27%) sepia(36%) saturate(500%) hue-rotate(220deg) brightness(90%) contrast(85%);
  }

  .large {
    height: 100px;
    width: 100px;
  }

  .medium {
    height: 75px;
    width: 75px;
  }

  .small {
    height: 25px;
    width: 25px;
  }
  `;

  @property() variant: "large" | "medium" = "medium";

  render() {
    return html`<img class=${this.variant + " logo"} src=${logo}/>`;
  }
}
