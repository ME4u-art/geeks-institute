                    /*Exercises XP*/

const { use } = require("react");

/*
1) outpu is :
I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
*/

    /*Exercise 2: Display Student Info*/

function displayStudentInfo({first, last}){
    return `Your full name is ${first} ${last}`

}
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

    /*Exercise 3: User & id*/

const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersarray = Object.entries(users).map(([key,value]) => [key,value *2]);


     /*Exercise 4 : Person class*/

/*
output will be ;
object 
*/

     /*Exercise 5 : Dog class*/

/* option 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
*/

        /*Exercise 6 : Challenges*/

/*
1) both are false


2) object1 , object2 and object3 all refer to the same object in memory
object4 is separate object that just happens to have the same value.
then we change object1.nnumber = 4 so the object1,2 and 3 will 
affects all of them.
*/

class Animal{
    constructor(name,type,color){
        this.name = name
        this.type = type
        this.color = color 
    }
}

class Mammal extends Animal{
    sound(nose){
        return`this is a ${this.color} ${this.type} named ${this.name}, and its says ${nose}`
    }
}

const farmerCow = new Mammal("lily","cow","brown and white")

console.log(farmerCow.sound("Moooooooooooo"))