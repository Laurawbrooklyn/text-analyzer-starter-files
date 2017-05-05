function wordCount(text){
  return(text.split(" ").length);
}

function uniqueWordCount(text) {
  var arrayOfWords = (text.split(" "));
  var uniqueWords = {};
  for (var i = 0; i < arrayOfWords.length; i++) {
    uniqueWords[arrayOfWords[i]] = true;
  }
  return(Object.keys(uniqueWords).length);

}

function findTotalCharacters(text){
  return(text.replace(/\s/g, '').length);
  }
function textAnalyzer(event) { 
  var text = $("#user-text").val();
  var average = findTotalCharacters(text) / wordCount(text);
  event.preventDefault();
$(".js-word-count").text(wordCount(text));
$(".hidden").removeClass("hidden");
$(".js-unique-word-count").text(uniqueWordCount(text));
$(".js-average-word-length").text(average);
}
$("form").on("submit", textAnalyzer);