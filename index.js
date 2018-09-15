// Code your solution in this file.
//Question 1
//V1
// function lowerCaseDrivers(drivers){
//   var newDrivers = [];
//   for (var i = 0; i < drivers.length; i++){
//     newDrivers.push(drivers[i].toLowerCase());
//   }
//   return newDrivers;
// }

//V2
// function lowerCaseDrivers(drivers){
//   var newDrivers = [];
//   for (const driver of drivers){
//     newDrivers.push(driver.toLowerCase());
//   }
//   return newDrivers
// }

// Final Version
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  })
}

//Question 2
//v1
// function nameToAttributes(drivers){
//   var newDrivers = [];
//   for (var i = 0; i < drivers.length; i++){
//     var fullName = drivers[i].split(" ");
//     var firstName = fullName[0];  or firstName = drivers[i].split(" ")[0];
//     var lastName = fullName[1];   or lastName = drivers[i].split(" ")[1];
//     newDrivers.push({firstName: firstName, lastName: lastName})
//   }
//   return newDrivers;
// }

// Final Version
function nameToAttributes(drivers){
  return drivers.map( function(driver ){
    return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
  })
}

//Question 3
//V1
// function attributesToPhrase(drivers){
//   var newDrivers= [];
//   for (var i = 0; i < drivers.length; i++){
//     var driver = drivers[i];
//     newDrivers.push(`${driver.name} is from ${driver.hometown}`)
//   }
//   return newDrivers
// }

// Final Version
function attributesToPhrase(drivers){
  return drivers.map( function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
