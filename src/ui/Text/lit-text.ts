import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-text")
export class LitText extends LitElement {
  static styles = css`
    span {
        font-family: 'Montserrat', sans-serif;
        color: #6247AA;
    }

    .header {
        font-size: 80px;
        font-weight: 800;
    }

    .regular {
        font-size: 16px;
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    }

    .large {
        font-size: 48px;
        font-weight: 600;
    }

    .greetings {
        font-size: 20px;
    }
  `;

  @property() text: string = "";
  @property() variant: "header" | "regular" | "large" | "greetings" = "regular";

  render() {
    return html`<span class=${this.variant}>${this.text}</span>`;
  }
}
