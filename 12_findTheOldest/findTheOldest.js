const findTheOldest = function(people) {
    let oldest;
    let age = 0;
    for(person of people) {
        let death = person["yearOfDeath"];

        if(typeof person["yearOfDeath"] === "undefined") {
            death = 2022;
        }
        let currentAge = death - person["yearOfBirth"];
        if(currentAge > age) {
            age = currentAge;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
