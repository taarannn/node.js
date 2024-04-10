const addFn = (a,b) => {
    return a+b;
 };
 const subtract = (a,b) => {
    return a-b;
  };
//module.exports = addFn;
// different types to use export
//module .exports = (a,b) => {
  //  return a+b;
  //}

  module.exports ={
    addFn,
    subtract,
  };