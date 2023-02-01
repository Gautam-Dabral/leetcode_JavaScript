var removeDuplicates = function(nums) {
    let k=0;
    for( let i=0; i<nums.length; i++){
        if (nums[i] !== nums[k]){
            k++;
            nums[k] = nums[i];
        }
    }
    return k+1;
};

nums = [1,1,2,2,2,3,4,4,5];
console.log(nums);
let k = removeDuplicates(nums);
console.log(nums);
console.log("k = ", k);

