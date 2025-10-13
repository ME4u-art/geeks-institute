            /*Exercise 1 : print Full Name*/

function printFullName({first,last}){
    return `Your full name is ${first} ${last}`
}

console.log(printFullName({first:'Elie',last:'Schoppik'}))


            /*Exercise 2 : keys and values*/

function KeysAndValues(obj){
    const keys = Object.keys(obj).sort()
    const values = keys.map(key => onj[key])
    return[keys, values]
}

             /*Exercise 3 : Counter class*/
    
/*
output will be : 
    3
*/

