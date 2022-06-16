const reverseString = function(input) {
    let splitted = input.split("");
    let ans = new Array();
    for(let i = splitted.length; i > -1; i = i - 1) {
        ans.push(splitted[i]);
        
    }
    return ans.join('');
};

// Do not edit below this line
module.exports = reverseString;
