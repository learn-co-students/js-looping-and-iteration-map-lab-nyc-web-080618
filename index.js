// Code your solution in this file.
  function lowerCaseDrivers(drivers){
    let new_array = drivers.map(function(driver) {
      return driver.toLowerCase();
    });
    return new_array
  }

  function nameToAttributes(drivers){
    let new_array = drivers.map(function(driver){
      let first_name = driver.split(' ')[0]
      let last_name = driver.split(' ')[1]
      return {firstName: first_name, lastName: last_name}
    })
    return new_array
  }

  function attributesToPhrase(drivers){
    let new_array = drivers.map(function(driver){
      return `${driver.name} is from ${driver.hometown}`
    })
    return new_array
  }
