
                    /*Daily challenge : Go Wildcats*/
    
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];


const usernames =[]; 
gameInfo.forEach(user => {
    usernames.push(user.username + "!")
})
console.log(usernames)

const winners = []
gameInfo.forEach( point =>{
    if(point.score > 5){
        winners.push(point.username)
    }

}) 
console.log(winners);

const total_score = gameInfo.reduce((acc,crr)=> acc + crr.score,0);
console.log(total_score);
