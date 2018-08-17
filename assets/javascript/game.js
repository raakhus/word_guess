var words = ['halo', 'chief', 'cortana', 'arbiter', 'flood'];
var word = words[Math.floor(Math.random() * words.length)];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lives = 10;
var letterplaceholder = [];
var wins = 0;
var deaths = 0;
var remain = word.length;
var audio = new audio('music/halo_totalaudio.mp3')
var imglink = ['../images/haloring.jpg', '../images/chief.jpg', '../images/cortana.jpg', ,'../images/arbiter.jpg', '../images/flood.jpg']



function gamestart (){
     word;
    document.querySelector("#leftbox").textContent('Welcome to Hang Chief. You have ' + lives + '...Good Luck')
    for (var i = 0; i < word.legnth; i++) {
        letterplaceholder[i] = '-';
        document.querySelector("#rightboxbottom").textContent(letterplaceholder);
    }
    document.onkeyup = function (event){
        var guess = event.key.toLowerCase();
     
    
    for (var o = 0; o < word.length; o++) {

        if (guess === letters[0, 25] && guess === word.charat(o)) {
            remain--;
            letterplaceholder[o] = guess;
            document.querySelector("#rightboxbottom").textContent(letterplaceholder[o] = guess)
        }
    
        }
    
        if (reamin = 0) {
            wins++;
            document.querySelector("#leftbox").img(imglink[words])
            return;
        }
        else if (lives > 0) {
            document.querySelector("#rightboxbottom2").textContent(guess);
            lives--;
        }
        else if (lives = 0) {
            deaths++;
            document.querySelector("#rightboxtop").textContent('CHIEF IS DEAD')
            return;
        }
    }   


    function score(){
        var html =
        "<p>wins: " + wins + "</p>" +
        "<p>deaths: " + deaths + "</p>"
    document.querySelector("#gamestats").innerHTML = html;


    }


   


gamestart();
score();




