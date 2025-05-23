import Carousell from "./components/carousell/carousell.js";
import AboutSection from "./components/about/about.js";
import NewsComponent from "./components/news/news.js";
import GameComponent from "./components/games/games.js";
import TeamComponent from "./components/team/team.js";
import ContactComponent from "./components/contact/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  //-------------------------->>>>DEFINE_WEB_COMPONETS<<<<---------------------
  customElements.define("carousell-element", Carousell);
  customElements.define("about-element", AboutSection);
  customElements.define("news-element", NewsComponent);
  customElements.define("game-element", GameComponent);
  customElements.define("team-element", TeamComponent);
  customElements.define("contact-element", ContactComponent);
  //---------------------------------------------------------------------------

  //------------------------->>>>ELEMENT_SELECTORS<<<<-------------------------
  const WelcomeSection = document.querySelector("#home");
  const AboutSectionCont = document.querySelector("#about");
  const NewsSection = document.querySelector("#news");
  const GameSection = document.querySelector("#games");
  const TeamSection = document.querySelector("#teams");
  const ContactSection = document.querySelector("#contact");
  //---------------------------------------------------------------------------

  const CarousellElement = document.createElement("carousell-element");
  WelcomeSection.append(CarousellElement);

  const AboutSectionElem = document.createElement("about-element");
  AboutSectionCont.append(AboutSectionElem);

  const NewsSectionElem = document.createElement("news-element");
  NewsSection.append(NewsSectionElem);

  const GameSectionElem = document.createElement("game-element");
  GameSection.append(GameSectionElem);

  const TeamSectionElem = document.createElement("team-element");
  TeamSection.append(TeamSectionElem);

  const ContactSectionElem = document.createElement("contact-element");
  ContactSection.append(ContactSectionElem);

  //-------------------------->>>>NAVIGATION<<<<-------------------------------
  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const sections = document.querySelectorAll('section');


  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      
      // Toggle hamburger animation
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('active'));
    });
  }

  // Navigation active state based on scroll position
  const navItems = document.querySelectorAll('.nav-links a');

  function setActiveNavItem() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSection}`) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveNavItem);

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('active'));
      };
    });
  });
})
