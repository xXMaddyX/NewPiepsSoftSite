export default class GameComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback() {
        const rawHTML = await fetch("components/games/games.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;

        this.addSelectorFunctions();
        this.addRedirectToCards();
    };

    addSelectorFunctions() {
        const buttonPool = Array.from(this.shadow.querySelectorAll(".selector-item"));
        buttonPool.forEach((element) => {
            element.addEventListener("click", (e) => {
                buttonPool.forEach((element) => {
                    if (element.id === e.target.id) {
                        element.classList.add("active");
                    } else {
                        element.classList.remove("active");
                    };
                });
                this.updateGameCards(e.target.id);
            });
        });
    };

    updateGameCards(targetID) {
        const GameCardArr = Array.from(this.shadow.querySelectorAll(".game-card"));
        GameCardArr.forEach((element) => {
            let attr = element.getAttribute("name");
            if (targetID === "All") {
                element.classList.add("active")
            } else if (targetID === attr) {
                element.classList.add("active")
            } else {
                element.classList.remove("active")
            }
        })
    };

    addRedirectToCards() {
        const linkArr = this.shadow.querySelectorAll(".game-card");
        linkArr.forEach((element) => {
            let linkData = element.getAttribute("redirect");
            element.addEventListener("click", () => {
                window.open(linkData, "_blank");
            });
        })
    }
};