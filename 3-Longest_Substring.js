
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    let currHigh = 0;
    for (let i=0; i<s.length-1; i++){
        let substr = "";
        let j = i;
        while (s[j] && !substr.includes(s[j])){
            substr += s[j];
            j++;
        }
        if (substr.length > currHigh){
            currHigh = substr.length;
        }
    }
    return currHigh;
};

console.log(lengthOfLongestSubstring(" "));