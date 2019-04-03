var vowels = ['a','e','i','o','u']

function pigLatin (phrase) {
  //Catch all words that start with vowels
  for (var i = 0; i < vowels.length; i++) {
    var letter = phrase[0];
    if (letter === vowels[i]) {
      phrase += "way"
      return phrase;
    }
  }
  //Words begining with consonants
  var isCons = true;
  for (var i = 0; i < vowels.length; i++) {
    if (phrase[0] === vowels[i]) isCons = false;
  }

  if (isCons) {

    var vowelLocation = 0;
    for(var i = 1; i < phrase.length; i++) {
      for (var v = 0; v < vowels.length; v++) {
        var isVowel = false;
        if (phrase[i] === vowels[v]) isVowel = true;
      }
      if (isVowel === true) {
        vowelLocation = i + 1;
        break;
      }
    }
    var cons = phrase.slice(0, vowelLocation);
    console.log(vowelLocation);
    return phrase.slice(vowelLocation, phrase.length) + cons + "ay"
  }



}


//newWord = seccondPart + firstPart + ay;



$(document).ready(function (){
  console.log("apple: " + pigLatin("apple"))          //appleway
  console.log("schnapps: " + pigLatin("schnapps"))    //appsschnay
  console.log("squire: " + pigLatin("squire"))        //iresquay
  console.log("yelp: " + pigLatin("yelp"))            //elpyay
});
