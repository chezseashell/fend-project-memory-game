//$(document).ready(function () {


    //Set variables
    let cards= ['diamond', 'diamond', 'paper-plane-o', 'paper-plane-o', 'anchor', 'anchor', 'bolt', 'bolt', 'cube', 'cube', 'leaf', 'leaf', 'bicycle' , 'bicycle', 'bomb', 'bomb'];
    let tempArray=[];
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    let timeoutID='';

    //for the timer
    let time = "00:00"
    let seconds = 0;
    let minutes = 0;
    let t;
    let timer = document.getElementById("timer");
    match= 0;
    moves= 0;
    $rating= $('fa-star');
    $moves= $('.moves');
    newCards= '';
    deck= document.querySelector('.deck');




    //Scoring system 1-3 stars
    stars1= 22;
    stars2= 16;
    stars3= 14;


    //this function will start the game
  function init() {
        let allCards = shuffle(cards);
          deck.innerHTML = '';
        let tempArray = [];

        for (let i = 0; i < allCards.length; i++) {
            newCards += '<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'
            deck.innerHTML = newCards;
            cards = $('.card');
        }

        flipCard();

  };


    function flipCard() {
        for (let i = 0; i < cards.length; i++)  {
            cards[i].addEventListener('click', function() {
              this.classList.add('open', 'show');
              tempArray.push(cards[i]);
              checkMatch();
              startTimer();

            });
        }
    };


function checkMatch() {
    if ($('LI.card.open.show').length == 2) {
          if ($('LI.card.open.show').first()["0"].innerHTML === $('LI.card.open.show').last()["0"].innerHTML) {
                $('LI.card.open.show').first()["0"].className = 'card show match';
                $('LI.card.open.show').last()["0"].className = 'card show match';
                match++;
                checkWin();
                stopClock();
          } else {
            //flip cards back convert
              setTimeout(function () {
                  $('LI.card.open.show').first()["0"].classList = ('card');
                  $('LI.card.open.show').last()["0"].classList = ('card');
              }, 1000);
          }
    }
};


//timer to count to end of game -- until $('.match') == 16

function startTimer() {
       clearInterval(t);
      t = setInterval(buildTimer,1000);
  }

timer.textContent = time;
function buildTimer() {
    seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                seconds = 0;
            }
        }
timer.textContent = (minutes < 10 ? "0" + minutes.toString(): minutes) + ":" + (seconds < 10 ? "0" + seconds.toString(): seconds);
}

function stopClock() {
   if ($('.match').length === 16){
     clearInterval(t);
   GameEndMessage();
   }
}

function resetTimer() {
  clearInterval(t);
  seconds = 0;
  minutes = 0;
  timer.textContent = time;
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
    //app.assignCards();
    console.log('Shuffled Card Array:' +cards);
    return array;
};



    //Needs further work
          //Rating system: higher number of moves = lower stars
          // starRating: function()  {
          //   let rating = 3;
          //   if (moves > stars3 && moves < stars2)  {
          //     $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');
          //   } else if (moves > stars2 && moves <stars1) {
          //     $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');
          //   } else if (moves > stars1) {
          //     $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');
          //     rating = 1;
          //   }
          //   return {score: rating};


            // $('.moves').innerText += $('.moves').innerText +1;
            // if ($('.moves').innerText == '16' || $('.moves').innerText == '22') {
            //   $('.fa-star').parentNode.removeChild($('.fa-star'));
            // };
          // },



    // checkMatch: function () {
    //     if($('.card.open').length === 2) {
    //         if($('.open').first().data('cardValue') == $('.open').last().data('cardValue')) {
    //             $('.open').each(function() {
    //               $(this).addClass('match');
    //             });
    //             $('.open').each(function() {
    //               $(this).removeClass('open show');
    //             });
    //             app.checkWin();
    //         } else {
    //           //flip cards back over
    //           setTimeout(function () {
    //               $('.open').each(function () {
    //                 $(this).html('').removeClass('open show');
    //               });
    //           }, 1000);
    //         }
    //     }
    // },
    // moveCounter: function ()  {
    //   $('.card').on('click', function ()  {
    //     for ()
    //   })
    // }



    function checkWin() {
        if($('.card.match').length === 16) {
              winModal();
        }
    };

    function winModal() {




        //open the modal
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
              resetTimer();
          }
        }
    };





  init();
// });











/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
