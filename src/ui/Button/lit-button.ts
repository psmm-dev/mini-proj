import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import loadingIcon from "@assets/loading.svg";

@customElement("lit-button")
export class LitButton extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: fit-content;
    }

    button {
      padding: 8px;
      border-radius: 5px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      width: 350px;
      flex-wrap: wrap;
      background-color: #7251b5;
      color: #dec9e9;
      border: none;
      font-weight: 600;
      display: flex;
      justify-content: center;
    }

    button:hover {
      background-color: #6247aa;
      cursor: pointer;
    }

    .loading {
      height: 20px;
      width: 20px;
      animation: spin 2s linear infinite;
      filter: invert(91%) sepia(9%) saturate(654%) hue-rotate(236deg) brightness(103%) contrast(95%);
      display: flex;
      justify-self: center;
      align-self: center;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .icon{
      padding-right: 8px;
      height: 20px;
      width: 20px;
      filter: invert(91%) sepia(9%) saturate(654%) hue-rotate(236deg) brightness(103%) contrast(95%);
    }
  `;

  @property() label: string = "label";
  @property() isLoading: boolean = false;
  @property() width: string = "350px";
  @property() icon: string= "";

  handleClick(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("click", {}));
  }

  loadingIcon() {
    return html`<img class="loading" src=${loadingIcon} />`
  }

  buttonContent() {
    if(this.icon !== "") {
      return html`<img src=${this.icon} class="icon" /> ${this.label}`;
    }else{
      return html`${this.label}`;
    }
  }

  render() {
    return html`<button @click=${this.handleClick} style="width: ${this.width}">
      ${this.isLoading
        ? this.loadingIcon()
        : this.buttonContent()}
    </button>`;
  }
}
