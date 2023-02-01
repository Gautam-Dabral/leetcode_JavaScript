var merge = function(nums1, m, nums2, n) {
    for (let i=m; i<m+n; i++){
        nums1[i] = nums2[i-m];
        for (let j=i; j>0; j--){
            if (nums1[j] < nums1[j-1]){
                let temp = nums1[j];
                nums1[j] = nums1[j-1];
                nums1[j-1] = temp;
            }
        }
    }
};

nums1 = [1,2,2];
nums2 = [2,4,5,8];
m = nums1.length;
n = nums2.length;
merge(nums1, m, nums2, n);
console.log(nums1);