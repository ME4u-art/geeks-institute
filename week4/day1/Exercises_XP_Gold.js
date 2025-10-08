                /*Exercise 1 : Nested functions*/

/*first result start as "" then flat 4 runs and loops 4 each time doing
result = result+"_" --> result = "____"
then mountain(4) runs first it does result = result + "/" --> "____/"
after the loops runs 4 time each time adding single quote '--> "____/''''"
then it adds blackslash result = result + "\\" wich become single \
in final --> ____/''''\
in fainal call flat (4) it will do as the first tamie 
for result to become like this "____/''''\____"
*/


let landscape = () =>{
    let result = "";
    let flat = (x)=>{
        for (let cont = 0; cont <x; cont++){
            result = result + "_";
        }
    }
    let mountain = (x)=> {
        result = result + "/"
        for (let counter = 0; counter<x ; counter++){
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4);

    return result;
}

landscape


                    /*Exercise 2 : Closure*/

/*
will the result is 13 !! how ??

soo waht have is nested arow fun in same time closure .
let go step by step what is hppend in the code.
soo we have const addTo = x => y => x + y; our fun
in seconed line we have const addToTen = addTo(10); 
the seconed line make the inner fun alewasy remmaber that x is 10 --> 10 + y
there for the last line in code, we assigen y wich is addToTen(3)
final result become like this x=10 alewsy and we call addToten
we change only y that become in this case y=10 --> x+y --> 10+3=13
*/


                    /*Exercise 3 : Currying*/


/*
will result is 31 how ??
this is like clouse fun but here fun use multiple arguments .
so we have (a) first fun that take argument a and (b) ==> a +b;
that take argument b and return a + b soo what is happend here??
in firs code we have this const curriedSum = (a) => (b) => a + b our currying fun.
in seconed line we have this curriedSum(30)(1) soo it like ,
calling curriedSum tow time but in same line verey importen i will explina
soo let take it like this first call is curriedSum(30) is juts telling (a) to take value of 30
and we have curriedSum(1) that tell to inner fun to take value of 1 
soo it become a =30 and b = 1 there for inner fun retune a+b --> 30 + 1
result is 31 
*/


                /*Exercise 4 : Currying*/

/*
will result is 17 how ?

its like previous one but with change is this const add5 = curriedSum(5)
it like fun always remmaber that a is 5 and never change 
so there for when we aclled add5(12) this will be b = 12
and inner fun retun a+b --> 5 + 12 =17

*/
                /*Exercise 5 : Composing*/

/*
oof this one is bit trake but i think i get it 

soo the result is 16 how ?? 
we have our function composition const compose = (f, g) => (a) => f(g(a));
that  take tow arguments f and g and we have the inner fun
that take argument a and retuns f(g(a)); what in the world is that 
will is tellen to the function what to do first and from the result 
of the first fun complet the seconde fun 
in second line we have const add1 = (num) => num + 1;
and next we have  const add5 = (num) => num + 5;
and in the last we have compose(add1, add5)(10)

soo how this work:

when call compose(add1,add5)(10) this what happend :

first we have this const compose = (f, g) => (a) => f(g(a));

soo f = add1 , g  = add5 and (10) will take (a) --> a = 10

and in inner fun we have this  (a) => f(g(a));

the inner fun tellen what will work first and will work last 

soo for this f(g(a)) we have a we now that a = 10 and g = add5 = (num) => num + 5 = 15
g(a) = 15 now 
next is f will see it like this f(a = 15) and f = add1 = (num) =>  num + 1 wich num = a = 15
so there for f(a = 16)
result will be 16 

*/