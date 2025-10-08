import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("login-button")
export class LoginButton extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: fit-content;
    }

    button {
      padding: 8px;
      border-radius: 5px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      margin: 8px;
      width: 350px;
      flex-wrap: wrap;
      background-color: #BBADFF;
      color: #757BC8; 
      border: none;
      font-weight: 600;
    }
    button:hover{
      background-color: #9FA0FF;
    }
  `;

  @property() label:string = "label";

  handleClick(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("login", {}));
  }

  render() {
    return html`<button @click=${this.handleClick}>${this.label}</button>`;
  }
}
