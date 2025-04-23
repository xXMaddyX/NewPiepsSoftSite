export default class TeamComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    async connectedCallback () {
        const rawHTML = await fetch("components/team/team.html");
        const HTML = await rawHTML.text();
        this.shadow.innerHTML = HTML;
        
        this.addRedirectToPortfolios();
    };

    addRedirectToPortfolios() {
        const teamsArr = this.shadow.querySelectorAll(".team-card");
        teamsArr.forEach((element) => {
            let linkData = element.getAttribute("linkData");
            element.addEventListener("click", () => {
                window.open(linkData, "_blank");
            });
        });
    };
};