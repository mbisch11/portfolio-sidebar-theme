/**
 * Copyright 2025 mbisch11
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';
import './page-temp.js'

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
        align-items: center;
        background-color: #f5a267;
        height: 100%;
        width: 250px;
        position: fixed;
        padding: var(--ddd-spacing-5);
        border-right: 5px groove white; 
      }
      scroll-button {
        position: fixed;
        margin: var(--ddd-spacing-5);
        bottom: 0;
        right: 0;
      }
      .page a {
        display: inline-flex;
        color: #4a4a4a;
        margin-bottom: 30px;
      }
      .page:hover a {
        text-shadow: 2px 1px 5px black;
        font-weight: bold;
        color: white;
        text-decoration: none;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="sidebar">
    <p class="page"><a href="#1">Home</a></p>
      <br>
    <p class="page"><a href="#2">About</a></p>
    <p class="page"><a href="#3">Projects</a></p>
    <p class="page"><a href="#4">Contact</a></p>
  </div>
  <div class="scroll-top-button">
    <scroll-button>
    </scroll-button>
  </div>  
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