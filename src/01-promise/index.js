const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    false ? resolve('Hey!') : reject('Oh no!!');
  });
};

somethingWillHappen()
  .then(res => console.log(res))
  .catch(err => console.log(err))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Ohhhhh yeaaah!');
      }, 2000);
    } else {
      const error = new Error('Whooops!');
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then(res => console.log(res))
  .then(res => console.log('A second Then, res undefined btw'))
  .catch(res => console.log(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(res => {
    console.log('Array of results', res);
  })
  .catch(err => {
    console.log(err);
  });