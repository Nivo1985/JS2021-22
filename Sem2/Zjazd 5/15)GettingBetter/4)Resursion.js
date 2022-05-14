
//1
function fibR(n, a = 1, b = 0) {
    if (n === 0) {
      return b;
    } else {
      return fibR(n - 1, b, a + b);
    }
  }
  
  function fibI(n, a = 1, b = 0) {
    do {
      if (n === 0) return b;
  
      let temp = a;
      a = b;
      b += temp;
      --n;
    } while (n >= 0);
  }

  //console.log(fibI(6));
  console.log(fibR(5));

//2 
//Input: 4 -> 3 -> 2 -> 1 -> 0 -> NULL
//Output: 0 -> 1 -> 2 -> 3 -> 4 -> NULL

class ListItem {
    constructor(val, next = null) {
      this.val = val;
      this.nextItem = next;
    }
  }
  
  class LinkedList {
    constructor(digit) {
      this.firstItem = null;
      this.lastItem = null;
      for (let i of digit.toString()) {
        if (!this.firstItem) {
          this.firstItem = new ListItem(i);
          this.lastItem = this.firstItem;
        } else {
          this.lastItem.nextItem = new ListItem(i);
          this.lastItem = this.lastItem.nextItem;
        }
      }
    }
  }
  
  function ReverseList(list) {
    list.firstItem = ReverseItemsRecurent(list.firstItem);
    return list;
  }
  
  function ReverseItemsRecurent(item, currentItem) {
    if (!currentItem) currentItem = new ListItem(item.val);
    else currentItem = new ListItem(item.val, currentItem);
  
    if (item.nextItem !== null)
      return ReverseItemsRecurent(item.nextItem, currentItem);
  
    return currentItem;
  }
  
  let inputList = new LinkedList(43210);
  let outputList = ReverseList(inputList);
  console.log(outputList);