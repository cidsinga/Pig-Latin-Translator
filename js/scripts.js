
//User interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var english = $("input#userInput").val();
    var words = english.split(' ');
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    var pig = words.map(function(word) {
      if (vowels.includes(word[0])) {
        return(word + "way")
      } else {
        return (word.slice(1) + word[0] + "ay")
      };
    });
    console.log(pig)
  });
});
