let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let i = 0;
let highest = valueArray[i];
for (i; i < valueArray.length; i++) {  
    if (valueArray[i] > highest) {    
        highest = valueArray[i];  
    }
}
console.log("Highest value from array: " + valueArray + "=" + highest);
console.log("Numbers of indexes for the highest value :");
for (let i = 0; i < valueArray.length; i++) {    
    if (valueArray[i] === highest) {
        console.log(i);  
    }
}