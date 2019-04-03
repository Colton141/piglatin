var vowels = ['a','e','i','o','u']


function pigLatinAWord (word) {
  //return word;
  if (isAVowel(word[0]) === true) return word + "way"




  return word;
}



function isAVowel(letter) {
  for ( var v=0; v<vowels.length;v = v + 1) {
    if (letter === vowels[v]) return true;
  }
  return false;
}

// for(var i=0;i <word.length; i = i + 1) { //also i++, i += 1
  // }


  function pigLatinTheWords (phrase) {
    var words = phrase.split(" ");
    var pigLatinPhrase = "";
    words.forEach (function (word) {
      pigLatinPhrase += pigLatinAWord(word);
      pigLatinPhrase += " ";
    });
    return pigLatinPhrase;
  }

  $(document).ready(function (){
    console.log("apple: " + pigLatinTheWords("apple"))          //appleway
    console.log("schnapps: " + pigLatinTheWords("schnapps"))    //appsschnay
    console.log("squire: " + pigLatinTheWords("squire"))        //iresquay
    console.log("yelp: " + pigLatinTheWords("yelp"))            //elpyay
    console.log("apple bottom jeanes: " + pigLatinTheWords("apple bottom jeanes"))            //elpyay
  });
