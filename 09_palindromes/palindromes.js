const palindromes = function (inpSentence) {
    inpSentence = inpSentence.toLowerCase();
    let letList = inpSentence.split("");
    let ans = new Array();
    
    
    for (letty of letList) {
        if(isLetter(letty) === true) {
            ans.push(letty);
        }
    }
    
    let threshold = Math.floor(ans.length / 2);
    for(let i = 0; i < threshold; i = i + 1) {
        if(ans[i] !== ans[ans.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}


// Do not edit below this line
module.exports = palindromes;
