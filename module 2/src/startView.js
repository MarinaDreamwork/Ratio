const bodyElement = document.querySelector('body');

export function createTitleAndScoreHTMLElements() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('container');
  mainContainer.innerHTML = `<div class="container__scores-info">
      <h1 class="play-game-title">2048</h1>
      <div class="score-game_block">
        <div class="score-game_info">
          <p class="score-game_style">SCORE</p>
          <p class="score-game_result_score"></p>
        </div>
        <div class="score-game_best">
          <p class="score-game_style">BEST</p>
          <p class="score-game_result_best"></p>
        </div>
      </div>
    </div>
    <div class="button_block">
      <button class="button_new-game">NEW GAME</button>
    </div>`;
    bodyElement.append(mainContainer);
    return mainContainer;
}

export function createFieldHTMLElement() {
  const containerFieldElement = document.createElement('div');
  containerFieldElement.classList.add('square-container', 'style');
  containerFieldElement.innerHTML = `<div class="container__first-line container-line">
      <div class="container__box style" data-number="1"></div>
      <div class="container__box style" data-number="2"></div>
      <div class="container__box style" data-number="3"></div>
      <div class="container__box style" data-number="4"></div>
      <div class="container__box style right" data-number="5" data-position="right"></div>
    </div>
    <div class="container__second-line container-line">
      <div class="container__box style" data-number="6"></div>
      <div class="container__box style" data-number="7"></div>
      <div class="container__box style" data-number="8"></div>
      <div class="container__box style" data-number="9"></div>
      <div class="container__box style right" data-number="10" data-position="right"></div>
    </div>
    <div class="container__third-line container-line">
      <div class="container__box style" data-number="11"></div>
      <div class="container__box style" data-number="12"></div>
      <div class="container__box style" data-number="13"></div>
       <div class="container__box style" data-number="14"></div>
      <div class="container__box style right" data-number="15" data-position="right"></div>
    </div>
    <div class="container__fourth-line container-line">
      <div class="container__box style" data-number="16"></div>
      <div class="container__box style" data-number="17"></div>
      <div class="container__box style" data-number="18"></div>
      <div class="container__box style" data-number="19"></div>
      <div class="container__box style right" data-number="20" data-position="right"></div>
    </div>
    <div class="container__fifth-line container-line">
      <div class="container__box style" data-number="21"></div>
      <div class="container__box style" data-number="22"></div>
      <div class="container__box style" data-number="23"></div>
      <div class="container__box style" data-number="24"></div>
      <div class="container__box style right" data-number="25" data-position="right"></div>
    </div>`;
  bodyElement.append(containerFieldElement);
  return containerFieldElement;
}