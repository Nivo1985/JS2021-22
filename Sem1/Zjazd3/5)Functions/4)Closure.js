let iife = (function () {
  let var1 = "inner";
  function getValue() {
    return var1;
  }
  function setValue(newValue) {
    if (newValue) var1 = newValue;
  }
  return {
    getValue,
    setValue,
  };
})();

console.log(iife);
console.log(iife.getValue());
iife.var1 = "KAROL";
iife.setValue(undefined);
console.log(iife.getValue());
