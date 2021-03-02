class TiltEffect {
  constructor(card, perspective, rotateDegree) {
    this.card = card;
    this.perspective = perspective;
    this.rotateDegree = rotateDegree;
  }
  _createCardProperties(evt) {
    const cardWidth = this.card.clientWidth;
    const cardHeight = this.card.clientHeight;
    const cardCenterX = this.card.offsetLeft + this.card.parentElement.parentElement.offsetLeft + cardWidth/2;
    const cardCenterY = this.card.offsetTop + this.card.parentElement.parentElement.offsetTop + cardHeight/2;
    const coordinateX = evt.clientX - cardCenterX;
    const coordinateY = evt.clientY - cardCenterY;
    const properties = { cardWidth, cardHeight, coordinateX, coordinateY };
    return properties;
  }
  _generateCoordinatesOnCardHover(evt) {
    this._properties = this._createCardProperties(evt);
    const { cardWidth, cardHeight, coordinateX, coordinateY } = this._properties;
    const rotateX = this.rotateDegree*coordinateY/(cardHeight/2); 
    const rotateY = this.rotateDegree*coordinateX/(cardWidth/2);
    return { rotateX, rotateY };
  }
  initiateTiltEffectOnHover(evt) {
    const { rotateX, rotateY} = this._generateCoordinatesOnCardHover(evt);
    this.card.style.transform = `perspective(${this.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  deactivateTiltEffectOnHover() {
    this.card.style.transform = `perspective(${this.perspective}px) rotateX(0deg) rotateY(0deg)`;
    this.card.style.transition = `transform 0.2s ease`;
    setTimeout(() => {
      this.card.style.transition = ``;
    }, 300)
  }
}