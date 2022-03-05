import { multipleEqualElements, sumScoreElements } from "./utils/utils";
import { findElement, showOneNumber, initialStage, checkSelectedValues, addSelectedValues } from "./app";

const bodyHTML = document.querySelector('body');
const scoreValue = document.querySelector('.score-game_result_score');



export function arrowControl() {

  bodyHTML.addEventListener('keydown', (event) => {
    const { key } = event;
    switch (key) {
      case 'ArrowRight':
        moveRightArrow();
        findElement(showOneNumber());
        break;
      case 'ArrowLeft':
        alert('LEFT');
        findElement(showOneNumber());
        break;
      case 'ArrowUp':
        alert('UP!');
        findElement(showOneNumber());
        break;
      case 'ArrowDown':
        alert('DOWN');
        findElement(showOneNumber());
        break;
    }
  });
}

export function moveRightArrow() {
   const elements = document.querySelectorAll('.container__box');
  
  elements.forEach((element) => {
    if(element.innerText) {
      const containerLineElement = element.closest('.container-line');
      const childrenContainerLineElement = containerLineElement.children;
      let arrayOfSelectedElements = [];
      
      for(let i = 0; i < childrenContainerLineElement.length; i++) {
        const hasPosition = childrenContainerLineElement[i].dataset.position;
        const childSelectedValue = childrenContainerLineElement[i].closest('.selected');
        if(childSelectedValue) {
          
          arrayOfSelectedElements.push(childSelectedValue);
          console.log('arrayOfSelectedElements', arrayOfSelectedElements);
        }

        if(arrayOfSelectedElements.length >= 2) {
              for(let i = 0; i < arrayOfSelectedElements.length; i++) {
              debugger;
                if(arrayOfSelectedElements[i].innerText === arrayOfSelectedElements[i+1].innerText) {
                  let totalSelectedValue;
                  totalSelectedValue = sumScoreElements(multipleEqualElements(Number(arrayOfSelectedElements[i].innerText))); 
                  console.log('totalSelectedValue', totalSelectedValue);
                  break;
                } 
              }
            } else { 
              for(let i = 0; i < childrenContainerLineElement.length; i++) {
                const rightSideElement = containerLineElement.querySelector('.right');
                const isSelected = childrenContainerLineElement[i].classList.contains('selected');
                const isRight = childrenContainerLineElement[i].classList.contains('right');
                if(isSelected) {
                  const currentSelectedElementText = childrenContainerLineElement[i].innerText;
                  rightSideElement.innerText = currentSelectedElementText;
                  childrenContainerLineElement[i].classList.remove('selected');
                  rightSideElement.classList.add('selected');
                }
                isSelected && !isRight ?
                childrenContainerLineElement[i].innerText = '' :
                null
              }
            }

        if(hasPosition === 'right') {  
          
            
          }
        }
      }
    })
}
