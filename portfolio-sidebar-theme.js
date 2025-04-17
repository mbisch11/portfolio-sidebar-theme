/**
 * Copyright 2025 mbisch11
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar-theme";
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
        align-items: left;
        margin: 0;
      }
      .sidebar {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f5a267;
        height: 100%;
        width: 250px;
        position: fixed;
      }
      .page a {
        position: fixed;
        color: #4a4a4a;
        margin: var(--ddd-spacing-10);
        margin-bottom: 30px;
      }
      .page:hover a {
        text-shadow: 2px 1px 5px black;
        font-weight: bold;  
        text-decoration: wavy;
        color: white;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="sidebar"></div>
    <p class="page"><a href="#1">Home</a></p>
      <br>
    <p class="page"><a href="#2">About</a></p>
      <br>
    <p class="page"><a href="#3">Poop</a></p>
      <br>
    <p class="page"><a href="#4">Pee</a></p>
  <slot></slot>
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

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);