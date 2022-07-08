const findTheOldest = function(people) {
    /*
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
    */
   const oldest = people.sort((a, b) => {
    let aDeath, bDeath;
        if(typeof a["yearOfDeath"]==="undefined") {
            aDeath = 2022;
        }
        else {
            aDeath = a["yearOfDeath"];
        }
        if(typeof b["yearOfDeath"]==="undefined") {
            bDeath = 2022;
        }
        else {
            bDeath = b["yearOfDeath"];
        }
    
    let aAge = aDeath - a["yearOfBirth"];
    let bAge = bDeath - b["yearOfBirth"];

    return (aAge > bAge) ? -1 : 1;
   });
   return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
