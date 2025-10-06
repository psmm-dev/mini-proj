import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("text-input")
export class TextInput extends LitElement {
  static styles = css``;

  @property() placeholder = "insert text here";
  @property() label = "Label";
  @property() value = "";

  handleChange(e: Event) {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(
      new CustomEvent("change", { detail: { value: this.value } })
    );
  }

  render() {
    return html`<span>${this.label}: </span>
      <input
        type="text"
        placeholder="${this.placeholder}"
        value="${this.value}"
        @change=${this.handleChange}
      />`;
  }
}
