                    /* Exercise 1 : HTML Form*/
/*
the form will be submotted using the GET method that mean:
the data in not sent in the body instead,its attached to the URL as query parameters 
*/

                    /* Exercise 3 : JSON Mario*/
                
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
const jsonString = JSON.stringify(marioGame);
console.log(jsonString)

const prettyJSON = JSON.stringify(marioGame, null, 2);
console.log(prettyJSON);

  

