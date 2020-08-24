
(function(window){

var HelloSpeaker = {}; 

var speakWord = "Hello";


helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.HelloSpeaker = helloSpeaker
})(window);

