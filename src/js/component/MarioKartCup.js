 import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import css from '../../css/main.css' with { type: 'css' }

/**
 * Cup Card Web Component
 * @class CupCard
 * @emits 'cup-card'
 */

export class CupCard extends LitElement {
    
    static styles = [css];
    static properties = {
        cupName: {type: String},
    }

    constructor() {
        super();
    }
    
    connectedCallback() {
        super.connectedCallback();
    }   
   

    render() {    
    return html`
        <div class = cup-card>
            <header class= 'cup-name'>&#127942 ${this.cupName}</header>
        </div>
        `
    }
}

customElements.define('cup-card', CupCard)