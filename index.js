function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function hello() {
      console.log('hello, there.')
  }
}

function returnsAnAnonymousFunction(){
  return  () => {
      console.log('Hello, there.')
  }
}