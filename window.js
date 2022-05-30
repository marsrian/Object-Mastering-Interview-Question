var name = "Rasel";

function add(num1, num2) {
    var result = num1 + num2;
    console.log('inside name', name);

    function double(number) {
        return number * 2;
    }
    var total = double(result);
    return total;

    console.log("result inside", result);
    return result;
}
console.log('outside name', name);
var sum = add(13, 17);
console.log(sum);
// console.log('result outside', result);