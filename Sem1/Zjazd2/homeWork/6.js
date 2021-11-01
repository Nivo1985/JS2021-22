let numbers2 = [1,6,23,8,4,98,3,7,3,98,4,98]
let maximumNumber = Math.max(...numbers2)

let indexesOfMaxNumbers = []
for(let i=0; i<numbers2.length; i++){ 
 if(numbers2[i] === maximumNumber){
    indexesOfMaxNumbers.push(i)
  }
}
console.log(indexesOfMaxNumbers)
///////////////////////
function FindHighestValuesIndexes(value) {
    let HighestValue = value[0];
    let HighestValueIndexes = [];
    value.forEach((element, index) => {
      if (element >= HighestValue) {
        if (element > HighestValue) {
          HighestValueIndexes = [];
        }
        HighestValue = element;
        HighestValueIndexes.push(index);
      }
    });
    console.log("Indexes of higher values: ", HighestValueIndexes);
  }

  FindHighestValuesIndexes([1,6,23,8,4,98,3,7,3,98,4,98]);





  function maxOfArray(array)
{
  // set maxElement to 0 index of array i.e. 1
  let maxElement = array[0];
  // loop till array.length exusted and increament i by 1 with each iteration
  for(let i=1; i<=array.length; i++)
  {
      // if current index of array value in loop is greater than maxElement
      // save value of array[i] in variable maxElement
      // else go for next iteration
      // do same process until loop end and return final value of maxElement on console.
      if(array[i] > maxElement)
      {
        maxElement = array[i];
      }
  }
  return maxElement;
}
const maxResult = [1,5,3,6,10,2,2,5];
console.log(maxOfArray(maxResult));