                        /*Exercise 1 : Giphy API*/

const fetchgiphy = async(api) => {
    try{
        const response = await fetch(api)
        if (!response.ok){
            throw new Error(`Something went worng: ${response.status}`)
        }else{
            const data = await response.json();
            console.log("data", data)
        }
    }catch(err){
        console.error(" Error fetching Giphy API:", err)
    }
}
fetchgiphy("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")


                        /* Exercise 2 : Giphy API*/
                
const FetchSunGifs = async(api2) => {
    try {
        const response = await fetch(api2)
        if (!response.ok){
            throw new Error (`Something went worng: ${response.status}`);

        }else{
            const data = await response.json();
            console("All 10 Gifs: ", data.data);
        }
        
    }catch(err){
        console.error("Error fetching Giphy API: ",err);
    }
};

FetchSunGifs("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")


                    /* Exercise 3 : Async function*/

const FetchStarWars = async(api3)=> {
    try{
        const response = await fetch(api3)
        if(!response.ok){
            throw new Error(`Something went worng: ${response.status}`)
        }else{
            const data = await response.json();
            console.log(data); 
        }  
    }catch(err){
        console.error("Error fetching starships API: ",err)
    }
}


                    /*Exercise 4: Analyze*/

/*so output will be :
calling 
resolved 
*/
