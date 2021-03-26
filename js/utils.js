const buttonToScrollToMain = document.querySelector('.landing-scroll-btn');
const mainContentSection = document.querySelector('.main-content');
const mainContentSectionOverlay = mainContentSection.querySelector('.content-overlay');

const mainContentSectionHeadline = mainContentSection.querySelector('.content-headline');
const mainContentSectionParas = Array.from(mainContentSection.querySelectorAll('.content-para'));

const cardsSection = document.querySelector('.content-cards');
const cards = Array.from(document.querySelectorAll('.content-card'));
const lastPath = document.querySelector('.para-hover');
const samuraiLogo = document.querySelector('.content-samurai-path');

const silverHandPathButton = document.querySelector('.silverhand-path-button-wrapper');