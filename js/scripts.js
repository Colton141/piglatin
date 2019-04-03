var vowels = ['a', 'e', 'i', 'o', 'u']


function pigLatinAWord (word) {
  //return word;
  if (isAVowel(word[0]) === true) return word + "way"


  for (var i=0; i<word.length;i = i +1) {
    if (isAVowel(word[i]) === true) {
      if (i > 0 && word[i] === "u" && word[i - 1] === "q") {
        //     "ire"             + "squ" + "ay"
        return word.slice(i + 1) + word.slice(0, i + 1) + "ay"
      } else {
        return word.slice(i) + word.slice(0, i) + "ay"
      }
    }
  }
  return word;
}



function isAVowel(letter) {
  for ( var v=0; v<vowels.length;v = v + 1) {
    if (letter === vowels[v]) return true;
  }
  return false;
}

function pigLatinTheWords (phrase) {
  phrase = phrase.toLowerCase();
  var words = phrase.split(" ");
  var pigLatinPhrase = "";
  words.forEach (function (word) {
    pigLatinPhrase += pigLatinAWord(word);
    pigLatinPhrase += " ";
  });
  var returnphrase = pigLatinPhrase[0].toUpperCase() + pigLatinPhrase.slice(1)
  return returnphrase;
}

$(document).ready(function (){


  $("#pigme").click(function() {
    pigLatinTheWords("apple")
    $("#pigwords").text(pigLatinTheWords($("#wordsandstuff").val()));
  });
  // console.log("apple: " + pigLatinTheWords("apple"))          //appleway
  // console.log("schnapps: " + pigLatinTheWords("schnapps"))    //appsschnay
  // console.log("squire: " + pigLatinTheWords("squire"))        //iresquay
  // console.log("yelp: " + pigLatinTheWords("yelp"))            //elpyay
  // console.log("apple bottom jeans: " + pigLatinTheWords("apple bottom jeans"))            //elpyay
  // console.log("yes yap cyan yesterday: " + pigLatinTheWords("yes yap cyan yesterday"))            //elpyay
});
