export default class Carousell extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.slidesIndex = 0;
        this.slidePercentage = 100;
        this.autoslideIntervall = 3000;
        this.slides = [
            { src: "img/Screenshot 2025-04-22 004710.png" },
            { src: "img/Screenshot 2025-04-22 004727.png" },
            { src: "img/Screenshot 2025-04-22 004830.png" },
            { src: "img/Screenshot 2025-04-22 004921.png" },
            { src: "img/Screenshot 2025-04-22 005051.png" },
        ];
    }

    async connectedCallback() {
        this.shadow.innerHTML = `
        <div id="container">
            <h1>Welcome to the Pixel Paradise of Piep's Soft!</h1>
            <div id="carousell-container">
                <slot></slot>
            </div>
        </div>
        <style>
            @font-face {
                font-family: piepsi;
                src: url("../fonts/PermanentMarker-Regular.ttf");
            }

            h1 {
                display: flex;
                max-width: 80%;
                text-align: center;
                position: absolute;
                z-index: 10;
                font-family: piepsi;
                color: white;
                top: 100px;
                text-shadow: 2px 2px 2px black;
                font-size: 6rem;
            }
            #container {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }

            #carousell-container {
                display: flex;
                flex-direction: row;
                transition: transform 0.5s ease-in-out;
            }

            .carousell-images {
                flex-shrink: 0;
                width: 100%;
            }

            img {
                display: block;
                width: 100%;
                height: auto;
                object-fit: cover;
            }

            @media (max-width: 1500px) {
                h1 {
                    font-size: 3rem;
                }
            }

            @media (max-width: 768px) {
                h1 {
                    font-size: 2.0rem;
                }
            }

        }
        </style>
        `

        this.carousellContainer = this.shadow.querySelector("#carousell-container");

        this.slides.forEach(({ src }) => {
            const image = document.createElement("img");
            image.classList.add("carousell-images");
            image.src = src;
            this.carousellContainer.append(image);
        });

        this.startAutoSlide();
    }

    startAutoSlide() {
        this.intervall = setInterval(() => {
            this.slidesIndex = (this.slidesIndex + 1) % this.slides.length;
            this.renderSlideAnimation();
        }, this.autoslideIntervall);
    }

    renderSlideAnimation() {
        const translateX = -this.slidesIndex * this.slidePercentage;
        this.carousellContainer.style.transform = `translateX(${translateX}%)`;
    }
}
