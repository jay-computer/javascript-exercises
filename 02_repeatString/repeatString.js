const repeatString = function(repeated, iterations) {
    if(iterations < 0) {
        return "ERROR";
    }
    let ret = "";
    for (let i = 0; i < iterations; i++) {
        ret = ret + repeated;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
