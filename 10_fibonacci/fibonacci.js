const fibonacci = function(inp) {
    inp = parseInt(inp);
    if(inp <= 0) {
        return "OOPS";
    }
    if(inp === 1) {
        return 1;
    }
    if(inp === 2) {
        return 1;
    }

    let fibboo = [1, 1];
    for(let i = 2; i < inp; i = i +1) {
        fibboo[i] = fibboo[i-1] + fibboo[i-2];
    }
    return fibboo[inp-1];
};

// Do not edit below this line
module.exports = fibonacci;
