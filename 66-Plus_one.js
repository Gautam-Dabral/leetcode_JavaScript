var plusOne = function(digits) {
    let num = BigInt(digits.join(""));
    console.log(num);
    num += BigInt(1);
    console.log(num);
    return String(num).split("");
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3,2,9,9];
console.log(plusOne(digits));

