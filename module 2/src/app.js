import { showNumber } from "./utils/utils";

const selectedArrayOfElementsForFreeCells = [];

  

export function showOneNumber() {
  // исключить выпадание 0 в chosenDataNumber
  let chosenDataNumber = Math.round((Math.random() * 25));
  
  return chosenDataNumber;
}

export function findElement(dataNumber) {
 // нужно прописать условие, при котором невозможно выбрать элемент в занятных полях
  if(!selectedArrayOfElementsForFreeCells.includes(dataNumber)) {
    const elementHTML = document.querySelector(`[data-number='${dataNumber}']`);
    elementHTML.classList.add('selected');
    selectedArrayOfElementsForFreeCells.push(dataNumber);
    elementHTML.innerText = showNumber();
      return elementHTML;
  } else {
    findElement(showOneNumber());
  }
}



export function addSelectedElementToArray(element) {
  arrayOfSelectedElements.push(element);
  return arrayOfSelectedElements;
}