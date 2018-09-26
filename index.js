const lowerCaseDrivers = (array) => array.map(item => item.toLowerCase())

const nameToAttributes = (array) => array.map(item => {
  const fullName = item.split(' ')
  return {firstName: fullName[0],lastName:fullName[1]}
})

const attributesToPhrase = (array) => array.map(item =>{
  return `${item.name} is from ${item.hometown}`
})
