import { html, render } from 'lit-html';
import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

class PasswordChecker extends HTMLElement {
  constructor() {
    super();
  }

  isValid(passwd) {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;
    return re.test(passwd);
  }

  template() {
    return html`
      <span>Your password is <strong>${this.isValid(this.password) ? 'valid 👍' : 'INVALID 👎'}</strong></span>
      ${this.isValid('') ?
        html`<div>Strength: <progress value=${5-3} max="5"</progress></div>` : ``}`;

  }
}

customElements.define('password-checker', PasswordChecker);