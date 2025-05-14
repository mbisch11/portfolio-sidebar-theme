/**
 * Copyright 2025 mbisch11
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class TempPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "page-temp";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      .wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: calc(100vw  - 16px);
        background-color: darkgray;
        box-shadow: 0px 0px 15px white inset;
      }
      .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: gray;
        width: calc(100vw - 16px);
        height: calc(100vh / 6);
        box-shadow: 0px 1px 30px white;
      }
      .header-inglow{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100vw - 16px);
        height: calc(100vh / 6);
        box-shadow: 0px 0px 15px white inset;
      }
      .page-title {
        text-decoration: none;
        font-family: Futura,Trebuchet MS,Arial,sans-serif;
        font-weight: var(--ddd-font-weight-black);
        letter-spacing: var(--ddd-ls-72-lg);
        font-size: calc(100vh/8);
        margin-top: calc(25vh/12);
        margin-bottom: 2px;
      }
      .page-content {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: calc(100vw  - 16px);
        padding: var(--ddd-spacing-8);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="header">
    <div class="header-inglow">
      <h3 class="page-title">${this.title}</h3>
    </div>
  </div>  
  <div class="page-content">
    <slot></slot>
  </div>  
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(TempPage.tag, TempPage);