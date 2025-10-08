                /*Exercise 1 : Merge Words*/

function mergeWords(word){
    let sentence = [word];
    function inner(nextWord){
        if(nextWord === undefined){
            return sentence.join('')
        }else{
            sentence.push(nextWord);
            return inner;
        }
        
    }
    return inner;
}

const mergeWords = (string) => (nextString) => nextString=== undefined? string: mergeWords(string+ " " +nextString);
