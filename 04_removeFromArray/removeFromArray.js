const removeFromArray = function(variables, ...rest) {
    
    return variables.filter(x=> !(rest.includes(x)));
};

// Do not edit below this line
module.exports = removeFromArray;
