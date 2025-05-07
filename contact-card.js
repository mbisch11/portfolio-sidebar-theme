/**
 * Copyright 2025 mbisch11
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class ContactCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "contact-card";
  }

  constructor() {
    super();
    this.name = "";
    this.title = "";
    this.github = "";
    this.linkedIn = "";
    this.email = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      title: { type: String },
      github: { type: String},
      linkedIn: { type: String},
      email: { type: String},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
        h1, h3{
            font-family: Futura,Trebuchet MS,Arial,sans-serif;
        }
        p{
            font-family: Arial Narrow,Arial,sans-serif;
            letter-spacing: 1px;
            color: white;
        }
        .wrapper{
            background-color: gray;
            border-radius: 10px;
            box-shadow: 0px 0px 12px white;
        }
        .header{
            background-color: #f5a267;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            text-align: center;
            padding: var(--ddd-spacing-2);
            border-bottom: 5px solid white;
        }
        .name{
            margin: var(--ddd-spacing-3);
        }
        .title{
            margin: var(--ddd-spacing-1);
        }
        .body{
            padding: var(--ddd-spacing-6);
            margin-left: var(--ddd-spacing-10);
        }
        .link{
            margin: var(--ddd-spacing-2);
            display: inline-flex;
            justify-content: center;
        }
        .icon{
            height: 25px;
            width: 25px;
        }
        #link-text{
            margin: var(--ddd-spacing-0);
        }
        #link-text a{
            color: white;
        }
        .email{
            margin: var(--ddd-spacing-2);
        }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <div class="header">
        <h1 class="name">${this.name}</h1>
        <h3 class="title">${this.title}</h3>
    </div>
    <div class="body">
        <div class="link">
            <img src="./assets/images/github.png" class="icon">
            <p id="link-text"><a href="${this.github}">github</a></p>
        </div>
        <br>
        <div class="link">
            <img src="./assets/images/LinkedIn.png" class="icon">
            <p id="link-text"><a href="${this.linkedIn}">linkedIn</a></p>
        </div>    
        <p class="email" id="link-text">Email: <a href="mailto:${this.email}">${this.email}</a></p>
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

globalThis.customElements.define(ContactCard.tag, ContactCard);