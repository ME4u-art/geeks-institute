                /*xercise 1 : Analyzing the map method*/

/*
output will be :
[2,4,6]
*/

                /*Exercise 2: Analyzing the reduce method*/
    
/*
output will be :
[1,2,0,1,2,3]
*/


                /*Exercise 3 : Analyze this code*/
/*
value of i is the current index of that elment 

*/

                /*Exercise 4 : Nested arrays*/

/*1)*/const array = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2)

/*2)*/const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const newarray = greeting.map(x => x.join(" "))

/*3)*/const fullsentence = newarray.join(" ")


/*4)*/const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]].flat(Infinity)