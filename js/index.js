cards.forEach((card) => {
  const tiltingCard = new TiltEffect(card, 500, 25, mainContentSection);
  tiltingCard.card.addEventListener('mousemove', (evt) => {
    tiltingCard.initiateTiltEffectOnHover(evt);
  })
  tiltingCard.card.addEventListener('mouseleave', () => {
    tiltingCard.deactivateTiltEffectOnHover();
  })
});

buttonToScrollToMain.addEventListener('click', () => {
  mainContentSection.scrollIntoView({block: "start", behavior: "smooth"});
});

function hoverOnLastPath() {
  // mainContentSection.style.setProperty('--bg-color', '#000000');
  mainContentSection.style.backgroundImage = 'none';
  mainContentSectionOverlay.style.backgroundColor = 'rgb(0, 0, 0, 1)';
  mainContentSectionOverlay.style.animation = '';
  // 
  samuraiLogo.style.animation = 'changeBg 1s 1 alternate';
  samuraiLogo.style.opacity = '1';
  cardsSection.style.visibility = 'hidden';
  mainContentSectionHeadline.style.color = '#fe0102';
  mainContentSectionHeadline.style.textShadow = '0px 0px 10px #fe0102, 0 0 40px #fe0102';
  mainContentSectionHeadline.style.animation = 'changeBg 1.5s ease-in-out 1 alternate-reverse';
  mainContentSectionParas.forEach((para) => {
    para.style.color = '#fe0102';
    para.style.textShadow = '0px 0px 15px #fe0102, 0px 0px 45px #fe0102, 0px 0px 65px #fe0102';
    para.style.animation = 'changeBg 1.5s ease-in-out 1 alternate-reverse';
  });
  silverHandPathButton.style.animation = 'changeBg 1.5s ease-in-out 1 alternate-reverse';
  // samuraiLogo.style.animation = `1.5s ease-in-out 1 normal forwards changeBg`;
  // mainContentSection.style.setProperty('--bg-color', 'rgba(0, 0, 0, 0)');
  // mainContentSection.style.backgroundImage = 'url(https://images.wallpapersden.com/image/download/cyberpunk-2077-samurai_bGpqa2mUmZqaraWkpJRnbWllrWdtaWU.jpg';
  // mainContentSection.style.animation = '3s ease-in-out 1 normal forwards running changeBg'
}
function resetmainContentBackground() {
  // mainContentSection.style.setProperty('--bg-color', '#190f36');
  // mainContentSectionHeadline.style.color = '#e9f031';
  // mainContentSectionHeadline.style.textShadow = '0px 0px 10px #f7db22, 0 0 40px #f7db22';
  // mainContentSection.style.animation = 'smoothBgTransition 1.5s ease-in-out 1 alternate'
  mainContentSectionHeadline.style.animation = 'fadeOutBg 1.5s ease-in-out 1 alternate';
  setTimeout(() => {
    mainContentSectionHeadline.style.color = '#e9f031';
    mainContentSectionHeadline.style.textShadow = '0px 0px 10px #f7db22, 0 0 40px #f7db22';
  }, 1500);

  mainContentSectionParas.forEach((para) => {
    // para.style.color = '#e9f031';
    // para.style.textShadow = '0px 0px 10px #f7db22, 0 0 40px #f7db22';
    para.style.animation = 'fadeOutBg 1.5s ease-in-out 1 alternate';
    setTimeout(() => {
      para.style.color = '#e9f031';
      para.style.textShadow = '0px 0px 10px #f7db22, 0 0 40px #f7db22';
    }, 1500);
  });

  samuraiLogo.style.opacity = '0';
  // samuraiLogo.style.animation = '';
  // cardsSection.style.visibility = 'visible';
  samuraiLogo.style.animation = '1.5s ease-in-out 1 alternate fadeOutBg';
  setTimeout(() => {
    cardsSection.style.visibility = 'visible';
    // mainContentSection.style.setProperty('--bg-color', '#190f36');
    // mainContentSection.style.backgroundImage = 'url(https://i.pinimg.com/originals/0f/88/3e/0f883e6f5db348671c1e26a7dfd2e5f3.gif)';
    mainContentSectionOverlay.style.animation = 'smoothBgTransition 2s ease-in-out 1 alternate';
    mainContentSectionOverlay.style.backgroundColor = 'rgb(0, 0, 0, 0.4)';
  }, 1500);
  silverHandPathButton.style.animation = 'fadeOutBg 1.5s ease-in-out 1 alternate-reverse'
  // mainContentSection.style.backgroundImage = 'none';
}

//ВОТ ЭТО ВАЖНО, ПОТОМ РАСКОММЕНТИРОВАТЬ 
silverHandPathButton.addEventListener('mouseover', hoverOnLastPath);
silverHandPathButton.addEventListener('mouseleave', resetmainContentBackground);