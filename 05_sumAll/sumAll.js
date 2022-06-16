const sumAll = function(first, second) {
    let sum = 0;
    if((typeof(first) != "number") || (typeof(second) != "number")) return "ERROR";
    if(first < 0 || second < 0) return "ERROR";
    let lowerBound = (first < second) ? first : second;
    let upperBound = (first < second) ? second : first;
    for(let i = lowerBound; i <= upperBound; i = i + 1) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
