function isAnagram(str1, str2) {

  const normalize = str => str.toLowerCase().replace(/\s+/g, '');


  const sorted1 = normalize(str1).split('').sort().join('');
  const sorted2 = normalize(str2).split('').sort().join('');


  return sorted1 === sorted2;
}


console.log(isAnagram("Astronomer", "Moon starer"));   
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots"));
console.log(isAnagram("Hello", "World"));                
