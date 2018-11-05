// words in an object with their picture
var hangChiefGame = {
    wordSelection: {
        halo: {
            picture: "halo.jpg"
        },
        chief: {
            picture: "chief.jpg"
        },
        cortana: {
            picture: "cortana.jpg"
        },
        arbiter: {
            picture: "arbiter.jpg"
        },
        flood: {
            picture: "flood.jpg"
        },
    },
    wordInPlay: null,
    lettersInWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,
    losses: 0,

    gameStart: function () {

        var objKeys = Object.keys(this.wordSelection);
        this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
        this.lettersInWord = this.wordInPlay.split("");
        this.wordView();
        this.addGuesses();

    },
    // when the user hits a button store the button to the letter or if it guesses/the word gets guessed restart
    theyHitaButton: function (letter) {
        if (this.guessesLeft == 0) {
            this.losses += 1
            document.querySelector("#gameStats").innerHTML = "wins : " + this.wins + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp losses : " +this.losses
            this.restartGame();
        }
        else {
            this.isItcorrect(letter);
            this.correct(letter);
            this.wordView();
            if (this.updateWins() === true) {
                this.restartGame();
            }
            // if()
        }
    },
    // when user is wrong on guess

    isItcorrect: function (letter) {
        if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersInWord.indexOf(letter) === -1)) {

            this.guessedLetters.push(letter)

            this.guessesLeft--;

            document.querySelector("#guesses").innerHTML = this.guessesLeft;
            document.querySelector("#guessed").innerHTML = this.guessedLetters.join(" | ");
        };
    },
    // set our guessatempts to length of the word plus 7
    addGuesses: function () {
        this.totalGuesses = this.lettersInWord.length + 7
        this.guessesLeft = this.totalGuesses
        document.querySelector('#guesses').innerHTML = this.guessesLeft;
    },
    // run through the word to see if letter guessed matches
    correct: function (letter) {
        for (var i = 0; i < this.lettersInWord.length; i++) {
            if (letter === this.lettersInWord[i] && this.matchedLetters.indexOf(letter) === -1)
                this.matchedLetters.push(letter);
        }
    }, 
    // replace _ with letters
    wordView: function () {
        var wordView = "";
        for (var i = 0; i < this.lettersInWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersInWord[i]) !== -1) {
                wordView += this.lettersInWord[i];
            }
            else {
                wordView += "_&nbsp;";
            }
        }
        document.querySelector("#word").innerHTML = wordView;
    },
    // reset the game and game variables
    restartGame: function() {
        document.querySelector("#guessed").innerHTML = "";
        this.wordInPlay = null;
        this.lettersInWord = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.gameStart();
        this.wordView();
      },
    
      // Function that checks to see if the user has won.
      updateWins: function() {
        var win;
        if (this.matchedLetters.length === 0) {
          win = false;
        }
        else {
          win = true;
        }
        for (var i = 0; i < this.lettersInWord.length; i++) {
          if (this.matchedLetters.indexOf(this.lettersInWord[i]) === -1) {
            win = false;
          }
        }
    
        // If win is true...
        if (win) {
          this.wins = this.wins + 1;
          document.querySelector("#gameStats").innerHTML = "wins : " + this.wins + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp losses : " +this.losses
          document.querySelector("#photos").innerHTML =
            "<img class='win-image' src='assets/images/" + this.wordSelection[this.wordInPlay].picture + "' alt='"+this.wordSelection[this.wordInPlay]+ "'style='width:500px;height:600px;'>";
          
         
          return true;
        }
        return false;
      }
    };
    
    // starts game page open
    hangChiefGame.gameStart();
    var audio = new Audio("F:/class/code/word_guess/assets/music/Halo_TotalAudio.mp3");
    
    // When a key is pressed
    document.onkeyup = function(event) {
        audio.play();
      hangChiefGame.letterGuessed = String.fromCharCode(event.which).toLowerCase();
      hangChiefGame.theyHitaButton(hangChiefGame.letterGuessed);
    };
    
