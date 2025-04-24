export default class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("components/contact/contact.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;
    }
}