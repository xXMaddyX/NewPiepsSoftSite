import AboutHTML from "./aboutHTML.js";

export default class AboutSection extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    connectedCallback() {
        this.shadow.innerHTML = AboutHTML;
    }
}