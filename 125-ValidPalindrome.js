function isAlphaNumeric(str) {
    let code = str.charCodeAt();
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}

function isPalindromic(s) {
    let l;
    s.length%2===0 ? 
    (l = s.length/2) : // for even number of characters
    (l = Math.floor(s.length/2)) ;  // for odd number of characters

    for (let i=0; i<l; i++){
        if(s[i] !== s[s.length-i-1]) return false;
    } return true;
}

var isPalindrome = function(s) {
    let newStr = "";
    for (let i=0; i<s.length; i++){
        if(isAlphaNumeric(s[i])){
            newStr += s[i];
        }
    }
    return isPalindromic(newStr.toLowerCase());
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));