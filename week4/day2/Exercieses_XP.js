                    /*Exercise 1 : Colors*/

const { forwardRef } = require("react");

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach(function (item,index){
    console.log(`${index +1}# choice is ${item}`)
    console.log(item === "Violet" ? "yah" :"No")

});

                /* Exercise 2 : Colors #2*/

const ordinal = ["th","st","nd","rd"];
colors.forEach(function(color,index){
    const position = index + 1;
    const suffix = 
        position === 1 ? ordinal[1]:
        position === 2 ? ordinal[2]:
        position === 3 ? ordinal[3]:
        ordinal[0];
        
    console.log(`${position}${suffix} choice is color ${color}`)
})


                /*Exercise 3 : Analyzing*/

/*
1)it will be :["bread","carrot","potato","chiken","apple","orange"]
2) ["U","S","A"]
3) [ , , ]
*/

                /*Exercise 4 : Employees*/

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const hello_user =users.map(x => "Hello" + x.firstName)
const full_stack_residents = users.filter(x => x.role === "Full Stack Resident")

const chai_filter_map = users.filter(x => x.role === "Full Stack Resident").map( x => x.lastName)


                    /*Exercise 5 : Star Wars*/
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentece = epic.reduce((acc,crr) => acc +" " + crr ,"");

                    /*Exercise 6 : Employees #2*/


const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
const passed = students.filter(x => x.isPassed === true);
passed.forEach(x => {
    console.log(`Good job ${x.name}, you passed the course in ${x.course}`);
});
