
var lengthOfLastWord = function(s) {
    let temp = "";
    let word = false;
    for(let i=s.length-1; i>-1; i--){
        if (word && s[i] === " "){
            break;
        }
        if (s[i] !== " "){
            word = true;
            temp += s[i];
        }
    }
    return temp.length;
};

console.log(lengthOfLastWord("  hey ..  there my friend  "));