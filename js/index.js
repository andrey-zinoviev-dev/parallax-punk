const buttonToScrollToMain = document.querySelector('.landing-scroll-btn');
const mainContentSection = document.querySelector('.main-content');
buttonToScrollToMain.addEventListener('click', () => {
  mainContentSection.scrollIntoView({block: "start", behavior: "smooth"});
})
