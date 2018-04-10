$(document).ready(function () {
var app = {
    cards: ['diamond', 'diamond', 'paper-plane-o', 'paper-plane-o', 'anchor', 'anchor', 'bolt', 'bolt', 'cube', 'cube', 'leaf', 'leaf', 'bicycle' , 'bicycle', 'bomb', 'bomb'],
    init: function() {
      app.shuffle();
    },

    //Shuffle function from http://stackoverflow.com/a/2450976
    shuffle : function (array) {
        var currentIndex = app.cards.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = app.cards[currentIndex];
            app.cards[currentIndex] = app.cards[randomIndex];
            app.cards[randomIndex] = temporaryValue;
        }
        app.assignCards();
        console.log('Shuffled Card Array:' +app.cards);
        //return array;
    },
    assignCards: function() {
      $('.card').each(function(index)  {
          $(this).attr('data-card-value', app.cards[index]);
      });
      app.clickHandlers();
    },
    clickHandlers: function () {
      $('.card').on('click', function() {
        $(this).html('<i>' +$(this).data('cardValue')+ '</i>').addClass('open').addClass('show');
        app.checkMatch();
      });
    },
    checkMatch: function () {
        if($('.open').length == 2) {
            if($('.open').first().data('cardValue') == $('.open').last().data('cardValue')); {
                $('.open').each(function() {
                  $(this).addClass('match');
                });

            } else {
              //flip cards back over
              setTimeout(function () {

              }, 1000);
            }
        }
         $('.open').each(function() {
           $(this).removeClass('open');
         });
    }
  };
  app.init();
});






/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



  //
  // function initializeGame ();
  //   let allCards = shuffle(cardsArray);
  //   $deck.empty();
  //   match = 0;
  //   moves = 0;
  //   $moves.text('0');
  //   //for loop goes here to create html
  //   for (var i=0, i < cardsArray.length, i++) {
  //   output += '<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'))
  //   }
  //   addCardListener();
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

  // let addCardListener = function () {
  //   $('.card').click(function()) {
  //     let $this = $(this);
  //
  //     if($this.hasClass('show') || $this.hasClass('match')) {return true;}
  //
  //     let card = $this.context.innerHTML;
  //     $this.addClass('open show');
  //     allOpen.push(card);
  //
  //     if (allOpen.length > 1) {
  //       if(card === allOpen[0]) {
  //         $deck.getElementByClass('.open').addClass('match');
  //         setTimeout (function () {
  //           $deck.getElementByClass('.open').removeClass('open show');
  //
  //         })
  //       }
  //     }
  //   })
  // }

//one attempt at function to open cards below
 /*$('.card').click(function(tile, val) {
   if(tile.innerHTML == "" && memory_values.length < 2) {
     tile.style.background = '#FFF';
     tile.innterHTML = val;
     if(memory_values.length == 0) {
       memory_value.push(val);
       memory_tile_ids.push(tile.id);
     } else if (memory_values.length == 1) {
       memory_values.push(val);
       memory_tile_ids.push(tile.id);
       if(memory_values[0] == memory_values[1]) {
         tiles_flipped += 2;
         //clear both arrays
         memory_values = [];
         memory_title_ids = [];
         //check to see if the whole board is cleared
         if(tiles_flipped == memory_array.length) {
           alert("Board cleared... generating new board");
           document.getElementByID('memory_board').innerHTML = "";
         }
       }
     }
   }
displayCardSymbol();
openCards = [];

if
});*/
//}
