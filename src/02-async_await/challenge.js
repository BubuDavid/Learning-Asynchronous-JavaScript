const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';


const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const universe = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(universe.dimension);
  }catch(err) {
    console.error(err);
  }
};

console.log('before');
anotherFunction(API)
console.log('after');