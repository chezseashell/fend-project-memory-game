let cards= ['diamond', 'diamond', 'paper-plane-o', 'paper-plane-o', 'anchor', 'anchor', 'bolt', 'bolt', 'cube', 'cube', 'leaf', 'leaf', 'bicycle' , 'bicycle', 'bomb', 'bomb'];
let tempArray=[];

// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
let timeoutID='';

//for the timer
let time = "00:00";
let seconds = 0;
let minutes = 0;
let t;
let timer = document.getElementById("timer");
const modalHeading = document.querySelector('.modal-header');
const modalButton = document.querySelector('.modal-button');

match= 0;
moves= 0;
$rating= $('.fa-star');
newCards= '';
deck= document.querySelector('.deck');
gameStarted = false;

//Scoring system 1-3 stars
stars1= 24;
stars2= 19;
stars3= 15;


//this function will start the game
function init() {
  let allCards = shuffle(cards);
    deck.innerHTML = '';
  let tempArray = [];

  for (let i = 0; i < allCards.length; i++) {
    newCards += '<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>';
    deck.innerHTML = newCards;
    cards = $('.card');
  }

  flipCard();
  resetTimer();
  }

// This will change the class of the cards to 'open', 'show' once clicked
function flipCard() {
  for (let i = 0; i < cards.length; i++)  {
    cards[i].addEventListener('click', function() {
      this.classList.add('open', 'show');
      if ($('LI.open.show').length > 2) {
        this.classList.remove('open', 'show');
      } else {
        tempArray.push(cards[i]);
      }
      checkMatch();
      startTimer();
      starRating(moves);
      gameStarted = true;
    });

  }
}


// Change the cards class to 'match' if true, otherwise will close them
function checkMatch() {
  if ($('LI.card.open.show').length == 2) {

    if ($('LI.card.open.show').first()["0"].innerHTML === $('LI.card.open.show').last()["0"].innerHTML) {
          $('LI.card.open.show').first()["0"].className = 'card show match';
          $('LI.card.open.show').last()["0"].className = 'card show match';
          match++;
          console.log(match);
          stopClock();

    } else {
      //flip cards back convert
      setTimeout(function () {
        $('LI.card.open.show').first()["0"].classList = ('card');
        $('LI.card.open.show').last()["0"].classList = ('card');
      }, 1000);
    }
    moves++;
    $('.moves').text(moves);
  }

}

function resetTimer() {
  clearInterval(t);
  seconds = 0;
  minutes = 0;
  timer.textContent = ('0:00');
}

//timer to count to end of game, only works when match < 8
function startTimer() {
  clearInterval(t);
  t = setInterval(buildTimer,1000);
}

timer.textContent = time;
function buildTimer() {
  if(match < 8) {
    seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          seconds = 0;
        }
      }
  }
timer.textContent = (minutes < 10 ? "0" + minutes.toString(): minutes) + ":" + (seconds < 10 ? "0" + seconds.toString(): seconds);
}

function stopClock() {
  if(match === 8) {
    winModal();
  }
}

function starRating(moves) {
  let rating = 3;
  if (moves > stars3 && moves < stars2) {
    $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');
  } else if (moves > stars2 && moves < stars1) {
    $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');
  } else if (moves > stars1)  {
    $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');
    rating = 1;
  }
  return {score: rating};
}

//Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  console.log('Shuffled Card Array:' +cards);
  return array;
}

// Displays a pop-up modal open finding all matches
function winModal() {
  //open the modal
  modal.style.display = "block";

  //winning for when all matches complete
  winningMessage = document.createElement('p');
  winningMessage.innerHTML = '<p><strong>Your stats</strong><br>Time: ' + timer.textContent + '</br>Moves: ' + (moves+1) +'</p>';
  winningMessage.classList.add('modal-body');
  modalHeading.appendChild(winningMessage);
  modal.style.display = 'block';

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

init();
