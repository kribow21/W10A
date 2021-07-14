var heading = document.querySelector('body h1');
heading.innerText = "Welcome, im treating this assignment as a somewhat diary";

var links = document.querySelectorAll('a');
for (var i=0; i<links.length;i++){
    links[i].style.fontSize="40px";
}
var mainList = document.getElementById('list');
var lastItem = mainList.lastElementChild;
console.log(lastItem);
mainList.style.color="blue";

var emoji = document.getElementsByClassName('emoji');
for (var i=0; i<emoji.length;i++){
    emoji[i].style.fontSize="5rem"
}
var yogaArticle = document.getElementsByTagName('article');
yogaArticle[0].classList.add('secondArticle');
yogaArticle[0].classList.remove('firstArticle');


var newQuote = document.createElement('h3');
var holdQuote = document.getElementById('bottom');
holdQuote.append(newQuote);
newQuote.innerText = "I know its hard, but dont give up Kristin!";

var media = document.querySelector('header');
var mediaLinks = media.classList.toggle('socialMedia');
console.log(mediaLinks);