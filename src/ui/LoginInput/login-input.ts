import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

type InputType = "text" | "password";

@customElement("login-input")
export class LoginInput extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: fit-content;
      position: relative;
    }

    input {
      padding: 8px 8px 8px 35px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;

      border-radius: 5px;
      margin: 8px;
      width: 300px;
      flex-wrap: wrap;
      border: 2px solid #757bc8;
    }

    img {
      position: absolute;
      left: 15px;
      top: 18px;
      height: 20px;
      width: 20px;
      filter: invert(27%) sepia(36%) saturate(500%) hue-rotate(220deg)
        brightness(90%) contrast(85%);
    }
  `;

  @property() placeholder: string = "insert text here";
  @property() value: string = "";
  @property() type: InputType = "text";
  @property() icon: string = "";
  @property() id: string = "";

  // @state() private val = this.value;

  handleChange(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(
      new CustomEvent("change", { detail: { value: this.value } })
    );
  }

  render() {
    return html` <img src="${this.icon}" />
      <input
        id="${this.id}"
        type="${this.type}"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        @change=${this.handleChange}
      />`;
  }
}
