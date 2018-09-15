function lowerCaseDrivers (list) {
  return list.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (list) {
  return list.map(function (drivers) {
    var drivers_split = drivers.split(' ');
    const first_name = drivers_split[0];
    const last_name = drivers_split[1];

    return { firstName: first_name, lastName: last_name };
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function (driver){
    return driver.name + " is from " + driver.hometown
  });
}
