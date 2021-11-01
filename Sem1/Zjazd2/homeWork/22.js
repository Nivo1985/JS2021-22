let arr = [1,2,3];

const reverseArr = (el) => {
    let arrReverse = [];
    for (var i = el.length - 1; i >= 0; i--) {
      arrReverse.push(el[i]);
    }
    return arrReverse;
  };
  console.log(reverseArr(arr));