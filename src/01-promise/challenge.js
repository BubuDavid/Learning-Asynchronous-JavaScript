const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

// Now we resolve the challenge with this promise implementation
fetchData(API)
  .then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then(data => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then(data => {
    console.log(data.dimension);
    console.log('Done!');
  })
  .catch(err => console.log(err))

console.log('Hello Promises');
// Hello Promises
// 671
// Rick Sanchez
// Dimension C-137
// Done!


// Lets export our fetchData module
module.exports = {fetchData};