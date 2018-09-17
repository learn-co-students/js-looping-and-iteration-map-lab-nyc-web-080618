let drivers = ('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby');

// returns all drivers lowercased
function lowerCaseDrivers(drivers){
  return drivers.map( function(lowerCaseDriver){
    return lowerCaseDriver.toLowerCase();
  });
}

// returns list of objects with appropriate first and last names
function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const name = driver.split(' ');
    const first = name[0];
    const last = name[1];
    return { firstName: first, lastName: last };
  });
}

// converts to list saying the name and where each individual is from
 function attributesToPhrase(drivers){
  return drivers.map( function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}
