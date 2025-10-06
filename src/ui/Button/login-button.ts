import {html, css, LitElement} from 'lit';
import {customElement, property } from 'lit/decorators.js';

@customElement('login-button')
export class LoginButton extends LitElement {
  static styles = css``;

  @property() label = 'Login';

  handleClick(e: MouseEvent) {
    e.stopPropagation()
    this.dispatchEvent(new CustomEvent('login',  {}));
  }

  render() {
    return html`<button @click=${this.handleClick} >${this.label}</button>`;
  }
}