                /*Exercise 1 : Comparison*/

function compareToTen(num){
    return new Promise((resolve, reject) =>{
        if (num <= 10){
            resolve("the number is less then or equal to 10")   
        }else{
            reject("the number is greater then 10")
        }
    });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))


compareToTen(8)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


                    /*Exercise 2 : Promises*/

const myPromise = new Promise((resolve)=>{
    setTimeout(()=> {
        resolve("Success");
    },4000)
});

myPromise.then(result => console.log(result));


                    /*xercise 3 : Resolve & Reject*/

const respromise = Promise.resolve(3) 
const rejpromise =  Promise.reject("Boo!") 

respromise.then(result => console.log(result));
rejpromise.catch(result => console.log(result));