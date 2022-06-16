const caesar = function(inp,shift) {
    inp = inp.split("");
    unicodes = inp.map(x => x.charCodeAt());

    console.log(unicodes);
    for(let i = 0; i < unicodes.length; i++) {
        if(unicodes[i] >= 65 && unicodes[i] <=90) {
            unicodes[i] = unicodes[i] - 65;
            unicodes[i] = (unicodes[i] + shift) % 26;
            if(unicodes[i] >= 0) {
                unicodes[i] = unicodes[i] + 65;
            }
            else {
                unicodes[i] = 91 + unicodes[i];
            }
        }

        if(unicodes[i] >= 97 && unicodes[i] <=122) {
            unicodes[i] = unicodes[i] - 97;
            unicodes[i] = (unicodes[i] + shift) % 26;
            if(unicodes[i] >= 0) {
                unicodes[i] = unicodes[i] + 97;
            }
            else {
                unicodes[i] = 123 + unicodes[i];
            }
        }
    }
    console.log(unicodes);

    let ans = unicodes.map(x => String.fromCharCode(x));
    
    return ans.join("");
};

// Do not edit below this line
module.exports = caesar;
