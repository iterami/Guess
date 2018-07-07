'use strict';

function guess(){
    if(!guessing){
        return;
    }

    var guessvalue = Number.parseInt(
      document.getElementById('guess-input').value,
      10
    );

    // If the guess is not a number or not in guessing range.
    if(Number.isNaN(guessvalue)
      || guessvalue.length < 1
      || guessvalue > core_storage_data['max']
      || guessvalue < core_storage_data['min']){
        document.getElementById('info').innerHTML =
          'Invalid integer.';
        return;
    }

    var result = '';

    // Check if valid guess is lower than value.
    if(guessvalue > value){
        result = 'LOWER';

    // Check if valid guess is higher than value.
    }else if(guessvalue < value){
        result = 'HIGHER';

    // Only option left is guess is correct.
    }else{
        guessing = false;
        result = 'CORRECT! YOU WIN!';
    }

    var element = document.getElementById('guesses');
    element.innerHTML = Number.parseInt(
      element.innerHTML,
      10
    ) + 1;
    document.getElementById('info').innerHTML = result;
}

function new_game(skip){
    if(!skip
      && !window.confirm('Start new game?')){
        return;
    }

    document.getElementById('guess-input').value = '';
    document.getElementById('guesses').innerHTML = 0;
    document.getElementById('info').innerHTML = '';
    guessing = true;

    // Generate new value to guess.
    value = core_random_integer({
      'max': core_storage_data['max'] - core_storage_data['min'],
    }) + core_storage_data['min'];
}
