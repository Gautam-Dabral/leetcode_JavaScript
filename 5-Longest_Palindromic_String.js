
var isPalindromic = (s) => {
    let l;
    s.length%2===0 ? l = s.length/2 : l = Math.floor(s.length/2); 
    for (let i=0; i<l; i++){
            if(s[i] !== s[s.length-i-1]) return false;
        } return true;
}
var longestPalindrome = function(s) {
    let currMax = 0;
    let maxSubStr = "";
    if (s.length === 1) return s;
    for (let i=0; i<s.length; i++){
        for (let j=s.length; j>i; j--){
            if(isPalindromic(s.slice(i,j)) && currMax < j-i) {
                currMax = j-i;
                maxSubStr = s.slice(i,j);
            }
        }
    }
    return maxSubStr;
};

console.log(longestPalindrome("abba"));

