const XMLHttpRquest = require('xmlhttprequest').XMLHttpRequest;
// This is the function explained on 00-callbacks
// To fetch data from an api. But we change the syntax
// to ES6 and instead of using callbacks we are using 
// promises.
const fetchData  = (urlApi) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRquest();
    xhttp.open('GET', urlApi, async=true);
    xhttp.onreadystatechange = (e) => {
      if(xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`Estatus ${xhttp.status} at ${urlApi}`));
      }
    };
    xhttp.send();
  });
}

module.exports = fetchData;