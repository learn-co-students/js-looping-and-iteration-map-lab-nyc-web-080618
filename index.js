// Code your solution in this file.
function lowerCaseDrivers(drivers) {
   return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers){
  newDriver = []
  drivers.map(function(driver){
    let name = {};
    name.firstName = driver.split(" ")[0];
    name.lastName = driver.split(" ")[1];
    newDriver.push(name)
})
return newDriver
}

function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
