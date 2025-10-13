const { use } = require("react");


                /*Exercise 1 : Dog age to Human years*/
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
/*1*/ 
let sum = 0;
for(let i= 0 ; i < data.length ;i++){
    if(data[i].type==='dog'){
         sum += data[i].age * 7
        
    }

}
/*2*/const dog_to_human_age =data.reduce((acc,crr) => crr.type === 'dog' ? acc + crr.age * 7 : acc,0); 


            /*Exercise 2 : Email*/

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
const cleanemail = userEmail3.trim();


            /*Exercise 3 : Employees #3*/

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const useroles = {};

users.forEach(user =>{
    const fullname =user.firstName+' '+user.lastName;
    useroles[fullname] = user.role
});


                    /*Exercise 4 : Array to Object*/

const letters = ['x', 'y', 'z', 'z'];
let result ={};
for(let i = 0; i < letters.length;i++ ){
    const letter = letters[i];
    result[letter] ?result[letter]+=1:result[letter]=1;

}

result = letters.reduce((acc,crr) =>{
    acc[crr]= acc[crr] ? acc[crr]+1 :1;
    return acc;
} ,{});




