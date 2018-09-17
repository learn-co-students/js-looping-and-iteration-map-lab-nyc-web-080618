// Code your solution in this file.
function lowerCaseDrivers(listOfDrivers){
   return listOfDrivers.map(function(driver){
     return driver.toLowerCase();
    })

}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirstName = driver.split(' ')[0];
    const driverLastName = driver.split(' ')[1];

    return { firstName: driverFirstName, lastName: driverLastName };
  });
}


function attributesToPhrase(list){
  return list.map(function(driver){
    return  `${driver.name} is from ${driver.hometown}`

  })

}
