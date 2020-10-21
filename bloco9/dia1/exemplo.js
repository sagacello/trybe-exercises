//EXEMPLO 1

const list    = ['man', 'woman', 'child']

// create a new array
// loop over the array and map the data to new content
const newList = list.map(val => {
  return val + " kind";
});

// newList = ['man kind', 'woman kind', 'child kind']
console.log(newList)


//EXEMPLO2
function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
  
    callback(fullName);
  }
  
  introduction('Chris','Nwamba', greeting); // Hello Chris Nwamba, welcome to Scotch!