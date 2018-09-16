// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(arr) {
  return arr.map(function(driver) {
    const new_list = driver.split(' ');
    const first_name = new_list[0];
    const last_name = new_list[1];
      return {firstName: first_name, lastName: last_name};
  });
}

function attributesToPhrase(list) {
  return list.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
