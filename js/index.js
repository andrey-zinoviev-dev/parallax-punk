// function showCardProperties(card, event) {
//   const cardWidth = card.offsetWidth;
//   const cardHeight = card.offsetHeight;
//   const centerX = card.offsetLeft + card.parentElement.parentElement.offsetLeft + cardWidth/2;
//   const centerY = card.offsetTop + card.parentElement.parentElement.offsetTop + cardHeight/2;
//   const hoverPositionHorizontal = event.clientX - centerX;
//   const hoverPositionVertical = event.clientY - centerY;
//   const rotateX = 20*hoverPositionVertical/(cardHeight/2).toFixed(2);
//   const rotateY = 20*hoverPositionHorizontal/(cardWidth/2).toFixed(2);
//   card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// };
// function removeTransitionOnMouseLeave(card) {
//   card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
//   initiateTransition(card);
// }
// function initiateTransition(card) {
//   card.style.transition = `transform 500ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
//   setTimeout(() => {
//     card.style.transition = "";
//   }, 1000)
// }

// cards.forEach((card) => {
//   card.addEventListener('mousemove', (evt) => {
//     showCardProperties(card, evt);
//   });
//   card.addEventListener('mouseleave', () => {
//     removeTransitionOnMouseLeave(card);
//   })
// })

cards.forEach((card) => {
  const tiltingCard = new TiltEffect(card, 500, 25);
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
