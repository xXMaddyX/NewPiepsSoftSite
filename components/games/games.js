export default class GameComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("components/games/games.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;

        
    }
}