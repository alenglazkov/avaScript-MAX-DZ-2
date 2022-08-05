// --------------ДЗ 2, часть 1------------------------------------------

let menu = {
    width: 300,
    height: 200,
    title: { list: {fish: "Тунец", meet: "Говядина"}, drink: "coke" }, 
    color: "red",
    person: { name: "Вася", lastName: "Петров" },
    nunu: null
  };

  function makeObjectDeepCopy(obj) {
    const newObj = {};
    for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key] = makeObjectDeepCopy(obj[key]);
      }
      else newObj[key] = obj[key];
    }
    }
    return newObj;
  }

  let newObject = makeObjectDeepCopy(menu);
  // Проверка
  newObject.color = "blue"; 
  newObject.person.name = "Гоша";
  newObject.title.list.fish = "Селедка";
  console.log( newObject );
  console.log( menu );


//-------------- ДЗ 2, часть 2--------------------------------------------------

function selectFromInterval(arr, intValue1, intValue2) {
  const arrSelect = [];
  if (Array.isArray(arr) && typeof intValue1 === 'number' && typeof intValue1 === 'number') {
      var inVal1 = intValue1;
      var inVal2 = intValue2;   
  } 
  else return console.log("Входные данные не валидны");

  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
          console.log("Массив oK");
      }
      else return console.log("Массив содержит нечисловые значения");
  }

  if (intValue1 > intValue2) {
      inVal1 = intValue2;
      inVal2 = intValue1;
  }

  for (let j = 0; j < arr.length; j++) {
          if (arr[j] >= inVal1 && arr[j] <= inVal2) {
              arrSelect.push(arr[j]);
          }
      }
       if (arrSelect.length === 0) {
          console.log("Числа из массива не попали в заданный интервал");
      }
  
  return console.log(arrSelect);
}

selectFromInterval([1,3,5], 5, 2);
// selectFromInterval([-2, -15, 0, 4], -13, -5)
// selectFromInterval(['aaa'], 2, 3);



//---------------- ДЗ 2, часть 3-------------------------------------------

const myIterable = { from: 1, to: 4 };
//const myIterable = { from: 'aaa', to: 4 };
//const myIterable = { from: 4, to: 1 };
const interval = [];
const arr = [];
for (let key in myIterable) {
    if (myIterable[key] > 0 && Number(myIterable[key])) {
        console.log("Порядок");
        interval.push(myIterable[key]);
    } else console.log("Error. Not number:  " + myIterable[key]);
}
console.log(interval);
if (interval[0] > interval[1]) { console.log("Error interval: from > to  "); }
for (let i = interval[0]; i <= interval[1]; i++) {
    arr.push(i);
}
console.log(arr);
