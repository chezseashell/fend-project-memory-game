$(document).ready(function () {
var app = {
    cards: ['diamond', 'diamond', 'paper-plane-o', 'paper-plane-o', 'anchor', 'anchor', 'bolt', 'bolt', 'cube', 'cube', 'leaf', 'leaf', 'bicycle' , 'bicycle', 'bomb', 'bomb'],

    //Set variables
    tempArray: [],
    nowTime:'',
    match: 0,
    moves: 0,
    second: 0,
    $rating: $('fa-star'),
    $moves: $('.moves'),
    newCards: '',
    deck: document.querySelector('.deck'),

    //Scoring system 1-3 stars
    stars1: 22,
    stars2: 16,
    stars3: 14,


    //this function will start the game
    init: function() {
        let allCards = app.shuffle(app.cards);
          app.deck.innerHTML = '';


        for (let i = 0; i < allCards.length; i++) {
            app.newCards += '<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'
            app.deck.innerHTML = app.newCards;
            cards = $('.card');
        }
        app.flipCard();

    },


    flipCard: function () {
        for (let i = 0; i < cards.length; i++)  {
          cards[i].addEventListener('click', function() {
            this.classList.add('open', 'show');
            //app.tempArray.push(cards[i]);
            app.checkMatch();

          });
        }
    },

    checkMatch: function() {
      if($('LI.open.show').length == 2) {
            if($('LI.open.show').first()["0"].innerHTML === $('LI.open.show').last()["0"].innerHTML) {
                  $('.open').each(function()  {
                        $(this).addClass('match');

                  });
            }  else {
                  setTimeout(function() {
                      $(this).removeClass('open show');
                  }, 1000);
            }
            $('LI.open.show').each(function()  {
                  $(this).removeClass('open show');
                  
            });
      }
},

    //Shuffle function from http://stackoverflow.com/a/2450976
    shuffle: function (array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = app.cards[currentIndex];
            app.cards[currentIndex] = app.cards[randomIndex];
            app.cards[randomIndex] = temporaryValue;
        }
        //app.assignCards();
        console.log('Shuffled Card Array:' +app.cards);
        return array;
    },



    // resetTimer: function()  {
    //     resetTimer(nowTime);
    //     second = 0;
    //     $('.timer').text(`${second}`)
    //     startTimer();
    // },


    //Needs further work
        //testing code below to start timer
        // document.querySelector('.deck').addEventListener('click', function() {
        //   stopTimer = false; timerStart()
        // });


    //Needs further work
        //Testing code below to start timer when game is loaded
        // startTimer: function(timer)  {
        //   if (ready == true)  {
        //       var timer = 0;
        //       var hour = 0;
        //       var minute = 0;
        //       var second = 0;
        //       window.setInterval (function()  {
        //         ++timer;
        //         hour = Math.floor(timer / 3600)
        //         minute = Math.floor((timer - hour * 3600) / 60);
        //         second = timer - hour * 3600 - minute * 60;
        //         if (hour < 10) hour = '0' + hour;
        //         if (minute < 10) minute = '0' + minute;
        //         if (second < 10) second = '0' + second;
        //         $('#timer').innerHTML = hour + ':' + minute + ':' + second;
        //             if(stopTimer) {
        //               $('#timer').innerHTML = '00:00:00';
        //               timer = 0;
        //               hour = 0;
        //               minute = 0;
        //               second = 0;
        //               return;
        //             }
        //       }, 1000)
        //   }
        // },

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




      // if(tempArray.length = 2) {
      //     if(tempArray[0] !== tempArray[1]) {
      //       tempArray[0].classList.remove('open', 'show');
      //       tempArray[1].classList.remove('open', 'show');
      //       tempArray = [0];
      //     }
      // }
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

    checkWin: function() {
        if($('.card.match').length === 16) {
              $('.deck').html('<h1>Congratulations! You\'ve Won!</h1>')
        }
    },
  };
  app.init();
});











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
