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
        //this code below is showing icons but not shuffling the icons
          // let card = $(this).data('cardValue').innerHTML;
          // $(this).addClass('open show');
          // allOpen = [],
          // allOpen.push(card);

        //this code below is shuffling array but ot showing icons
        $(this).html('<p>' +$(this).data('cardValue')+ '</p>').addClass('open show fa');
        $(this).html('<i>' +$(this).data('cardValue')+ '</i>').addClass('open show fa')
        app.checkMatch();
      });
    },
    checkMatch: function () {
        if($('.card.open').length === 2) {
            if($('.open').first().data('cardValue') == $('.open').last().data('cardValue')) {
                $('.open').each(function() {
                  $(this).addClass('match');
                });
                $('.open').each(function() {
                  $(this).removeClass('open');
                });
            } else {
              //flip cards back over
              setTimeout(function () {
                  $('.open').each(function () {
                    $(this).html('').removeClass('open show');
                  });
              }, 1000);
            }
        }

    }
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
