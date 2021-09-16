const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
    ? setTimeout(() => resolve('Do something Async'), 3000)
    : reject(new Error('Test Error'))
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something);
};

console.log("before");
doSomething();
console.log("after");

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch(err) {
    console.error(err);
  }
};


console.log("before");
anotherFunction();
console.log("after");