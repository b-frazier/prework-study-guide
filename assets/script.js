var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
   }

function selectTopic(){
    if (randomTopic === 'HTML') {
        console.log("let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("let study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('here are the topics we learned through prework:');
listTopics();
console.log('what should we study first?');
selectTopic();

// var shapes = ["triangle", "square", "pentagon", "circle"];
// console.log(shapes[0]);



