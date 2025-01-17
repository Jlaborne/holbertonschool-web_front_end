function divideBy(firstNulber) {
  return function (secondNumber) {
    return secondNumber / firstNulber;
  };
}

function addBy(firstNulber) {
  return function (secondNumber) {
    return secondNumber + firstNulber;
  };
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
