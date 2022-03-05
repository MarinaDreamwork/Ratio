import './index.css';
import {createTitleAndScoreHTMLElements, createFieldHTMLElement} from './src/startView';
import {showOneNumber, findElement} from './src/app';
import {arrowControl} from './src/arrow-control';

createTitleAndScoreHTMLElements();
createFieldHTMLElement();
const newGameButton = document.querySelector('.button_new-game');
newGameButton.addEventListener('click', () => {

  const firstElement = findElement(showOneNumber());
  const secondElement = findElement(showOneNumber());
  
  return firstElement, secondElement;
});
  
arrowControl();