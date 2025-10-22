                /*Exercise 1 : Promise.all()*/
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});


Promise.all([promise1],[promise2],[promise3])
.then(value => console.log(value))
.catch(error => console.log(error));

/*
promise.all() take an array of promises it waits until all
of them are resolved ,then returns a new promise that resolves
to an array of their results, in the same order.but if any of 
promise rejects ,promise.all() immdiatly rejects with that error.
*/


                /*Exercise 2 : Analyse Promise.all()*/
    
/*
output will be :
[2,4,6]
*/