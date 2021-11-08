const array = [1,6,23,8,4,8,3,7];

const func = (array)=> {
  const tab = [];
  for(     ;array.length;     ){
    tab.push(array.splice(Math.floor(Math.random() * array.length),1))
  }
  return tab;
}
console.log(func(array))