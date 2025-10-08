

/*

            Exercise 1 : Scope
#1
the alrt is : inside the funOne function 3

why :
because varbile a is created inside the fun,
meaning that the varible it can reassignment inside the fun and that waht happend here.

#1.1

as we now the const varible cant be reassignment in this case 
will have a typeError

#2
the varaible is global varaible meaining the output will be like this :
inside the funcThree function 0
nothing will appers but funTow will reassignment varaible a=0 to a=5
in the last output will be : inside the funcThree function 5

#3
for info this "window.a = "hello";" like this "var a = "hello"" 
for the : funFour() creat a global varaible
and for : funFive() output will be inside the funcFive function hello

#4
here let a = 1 is global varaible outside fun scope or code scope
and inside fun we have another varaible let a = "test" its completly deferint from
the first one because its fun scope
in the output will have inside the funcSix function hello 
if we used const it will be same result 

#5

in here we have the same case as Ex4 but seconde variable is in 
code scope but it work the same way soo the output will be:
in the if block 5
outside of the if block 2
if we used const it will be same result 
*/


                /*Exercise 2 : Ternary operator*/

function winBattle(){
    return true;
}

const experiencePoint = winBattle() ? 10 : 1;
console.log(experiencePoint)

                 /*Exercise 3 : Is it a string ?*/

const isString = (word) => typeof word === "string";

console.log(isString('hello'))

                /* Exercise 4 : Find the sum*/

const sum = (a,b) =>  a+b ;

                /* Exercise 5 : Kg and grams*/
/*Function Declaration*/
function tograms(weight){
    return weight * 1000
}
/*Function Expression*/
const tograms = function(weight){
    return weight * 1000
}

/* differences:
for fun declaration can be :
-Hoisted 
-can call early

for fun expression :
-Not fully hoisted
-only variable hoisted
-cannot call early
*/

const tograms = (weight) => weight * 1000;


                /*Exercise 6 : Fortune teller*/


(function(numchildren,partnername,location,jobtitle){
    const sentence =`you will be a ${jobtitle} in ${location}, and marride to ${partnername} with ${numchildren} kids.}`
    document.getElementById('fortune').textContent = sentence;
})(3,"ahlam","marrakch","fullstuck deve") 

                /*Exercise 7 : Welcome*/

(function(username){
    const userDiv = document.createElement('div')
    userDiv.id = 'user-profile';

    const nameElement = document.createElement('span')
    nameElement.textContent = username;

    const profilePic = document.createElement('img');
    profilePic.src =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNwCFUH4lXnD7Nq5pBouajRv-sB0gAm-S7g&s'
    profilePic.alt = username;

    userDiv.appendChild(profilePic);
    userDiv.appendChild(nameElement);

    document.getElementById('navbar').appendChild(userDiv);

})("Hicham");


                    /*Exercise 8 : Juice Bar*/
            /*Part I*/
function makeJuice(size){
    function addIngerdients(ing1,ing2,ing3){
        const drink = `The client want ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`
        document.getElementById('juice-output').textContent = drink
    }
    addIngerdients("avocado","orange","oreo");

}

makeJuice("large");

            /*Part II*/

function makeJuice(size){
    const ingredients = [];
    function addIngerdients(ing1,ing2,ing3){
        ingredients.push(ing1,ing2,ing3)
    }
    function displayJuice(){
        const sentence =   `The client want ${size} juice, containing ${ingredients.join(", ")}.`
        document.getElementById('jucie-output').textContent = sentence
    } 

}

