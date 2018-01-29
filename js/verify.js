$(document).ready(function() {
  var $input = $('#phone-number');
  var $enterCodeSpan = $('#enter-the-code');
  var $randInput1 = $('rand-num-1');
  var $randInput2 = $('rand-num-2');
  var $randInput3 = $('rand-num-3');
  $randInput1.focus();
  $randInput2.focus();
  $randInput3.focus();
  $enterCodeSpan.text($input.val());
});
