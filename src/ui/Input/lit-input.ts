import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

type InputType = "text" | "password";

@customElement("lit-input")
export class LitInput extends LitElement {
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
      width: 300px;
      flex-wrap: wrap;
      border: 2px solid #815AC0;
    }
  
    input:active, input:focus {
      outline: none;
      border: 2px solid #6247AA;
    }

    img {
      position: absolute;
      left: 10px;
      top: 10px;
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
  @property() width: string = "300px";

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
        style="width: ${this.width}"
      />`;
  }
}
