// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(d){
    return d.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(d){
    let obj ={};
    obj['firstName'] = d.split(" ")[0]
    obj['lastName'] = d.split(" ")[1]
    return obj;
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(d){
    return `${d.name} is from ${d.hometown}`;
  });
}
