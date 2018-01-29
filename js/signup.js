$(document).ready(function() {
  // Variables del documento html signup
  var $flagButton = $('#main-flag-button');
  var $li1 = $('#flag-li-1');
  var $li2 = $('#flag-li-2');
  var $li3 = $('#flag-li-3');
  var $clickedLi;
  var $input = $('#phone-number');
  var mainFlag;
  var $flag;
  var $span = $('#main-flag-button span');
  var $nextButton = $('#next-button');
  var MAXCHARACTERS = 12; // es 12 Y no 10, porque si bien te piden que el número debe ser de 10 digitos, la indicación no cuenta el código del país.
  // Variables del documento html verify
  var $enterCodeSpan = $('#enter-the-code');
  var $codeNumber = $('#country-code');
  var $randInput1 = $('#rand-num-1');
  var $randInput2 = $('#rand-num-2');
  var $randInput3 = $('#rand-num-3');
  /* Este evento se aplica al primer li */
  $li1.click(function() {
    $flag = $('#flag-li-1 img');
    $mainFlag = $('#main-flag-button img');
    $flagButton.html($flag);
    $flagButton.append($span);
    $span.addClass('spacing');
    $flag.removeClass('flags');
    $flag.addClass('main-flag');
    $flagButton.removeClass('.btn .caret');
    $li1.html($mainFlag);
    $mainFlag.addClass('flags');
    $input.val('57');
    if ($('#main-flag-button img').data('country') === 'mex') {
      $input.val('52');
    }
    if ($('#main-flag-button img').data('country') === 'co') {
      $input.val('57');
    }
    if ($('#main-flag-button img').data('country') === 'pe') {
      $input.val('51');
    }
    if ($('#main-flag-button img').data('country') === 'us') {
      $input.val('01');
    }
  });

  /* Este evento se aplica al segundo li */
  $li2.click(function() {
    $flag = $('#flag-li-2 img');
    $mainFlag = $('#main-flag-button img');
    $flagButton.html($flag);
    $flagButton.append($span);
    $span.addClass('spacing');
    $flag.removeClass('flags');
    $flag.addClass('main-flag');
    $flagButton.removeClass('.btn .caret');
    $li2.html($mainFlag);
    $mainFlag.removeClass('main-flag');
    $mainFlag.addClass('flags');
    $input.val('51');
    if ($('#main-flag-button img').data('country') === 'mex') {
      $input.val('52');
    }
    if ($('#main-flag-button img').data('country') === 'co') {
      $input.val('57');
    }
    if ($('#main-flag-button img').data('country') === 'pe') {
      $input.val('51');
    }
    if ($('#main-flag-button img').data('country') === 'us') {
      $input.val('01');
    }
  });

  /* Este evento se aplica al tercer li */
  $li3.click(function() {
    $flag = $('#flag-li-3 img');
    $mainFlag = $('#main-flag-button img');
    $flagButton.html($flag);
    $flagButton.append($span);
    $span.addClass('spacing');
    $flag.removeClass('flags');
    $flag.addClass('main-flag');
    $flagButton.removeClass('.btn .caret');
    $li3.html($mainFlag);
    $mainFlag.addClass('flags');
    $input.val('01');
    if ($('#main-flag-button img').data('country') === 'mex') {
      $input.val('52');
    }
    if ($('#main-flag-button img').data('country') === 'co') {
      $input.val('57');
    }
    if ($('#main-flag-button img').data('country') === 'pe') {
      $input.val('51');
    }
    if ($('#main-flag-button img').data('country') === 'us') {
      $input.val('01');
    }
  });

  /* Este evento es para activar el botÓn NEXT*/
  $input.on('input', function(event) {
    if (event.target.value.trim()) {
      $characters = $(this).val();
      var PATTERNPHONENUMBER = /[0-9]/g;
      // var $noNumbers = PATTERNPHONENUMBER.match($characters);
      var $numbers = $characters.match(PATTERNPHONENUMBER);
      // console.log($(this).val());
      console.log($numbers);
      var $numberOfCharacters;
      for (var i = 0; i < $numbers.length; i++) {
        if ($numbers === null) {
          $numberOfCharacters = event.target.value.trim().length - $numbers.length;
        } else {
          $numberOfCharacters = $numbers.length;
        }
      }
      console.log($numberOfCharacters);
      var actualNumberOfCharacters = MAXCHARACTERS - $numberOfCharacters;
      console.log(actualNumberOfCharacters);
      if (actualNumberOfCharacters === 0) {
        $nextButton.removeAttr('disabled');
        $input.addClass('green-border');
        $nextButton.on('click', function() {
          var $randNum = parseInt(Math.random() * 10);
          var $randNum1 = parseInt(Math.random() * 10);
          var $randNum2 = parseInt(Math.random() * 10);
          alert('Tu código: LAB-' + $randNum + $randNum1 + $randNum2);
          // console.log($randNum);
          setTimeout(function() {
            window.location.href = '../views/verify.html';
          }, 3000);
        });
      }
      if (actualNumberOfCharacters <= -1 || actualNumberOfCharacters > 0) {
        $nextButton.attr('disabled', 'true');
        $input.removeClass('green-border');
      }
    }
  });
});
