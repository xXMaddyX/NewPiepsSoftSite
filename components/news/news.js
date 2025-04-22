import NewsData from "./newsData.js";
import NewsHTML from "./newsHTML.js";

export default class NewsComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    };

    connectedCallback() {
        //const rawHTML = await fetch("components/news/news.html");
        //const HTML = await rawHTML.text()
        this.shadow.innerHTML = NewsHTML;

        this.wrapper = this.shadow.querySelector(".wrapper");

        NewsData.forEach(({heading, text, buttonLink, linkName}) => {
            console.log(heading)
            const NewsContainer = document.createElement("div");
            NewsContainer.classList.add("news-container");

            const NewsHeading = document.createElement("h1");
            NewsHeading.textContent = heading;

            const NewsText = document.createElement("p");
            NewsText.textContent = text;

            let Button = document.createElement("button");
            Button.classList.add("news-button");
            
            const Spacer = document.createElement("div");
            Spacer.classList.add("spacer");
            
            NewsContainer.append(NewsHeading, NewsText);
            if (buttonLink != null) {
                Button.innerText = linkName;
                Button.addEventListener("click", () => {
                    const targetHref = buttonLink;
                    window.open(targetHref, "_blank");
                });
                NewsContainer.append(Button);
            };
            this.wrapper.append(NewsContainer, Spacer);
        });
    };
};