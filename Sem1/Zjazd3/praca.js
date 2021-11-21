let iife = (function () {
    let value;
    function setValue(val) {
        if(val) {
            value = val;
        }
    }
    function showValue() {
        if(!value) {
            console.log('Nie podano argumentów.')
        }

    }
    function reverseValue() {
        if ((typeof value) === "number") {
            console.log(`Wartość, którą podałeś jest typu number. Odwrócenie Twojej wartości to ${value * (-1)}`);
        }
        if ((typeof value) === "string") {
            console.log(`Wartość, którą podałeś jest typu string. Odwrócenie Twojej wartości to ${[...value].reverse().join("")}`);
        }
        else { showValue()}
    }
    return {
        setValue,
        showValue,
        reverseValue
    }
})();

iife.setValue('Ala ma koty dwa.');
iife.reverseValue();