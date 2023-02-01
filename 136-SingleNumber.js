var singleNumber = function(nums) {
    const obj = {};
    nums.forEach(item => {
        if (obj[item]){
            obj[item] = 0;
        }
        else {
            obj[item] = 1;
        }
    });
    nums.forEach( item => {
        if (obj[item] === 1){
            return item;
        }
    })
}

nums = [1,1,2,2,3];
console.log(singleNumber(nums));