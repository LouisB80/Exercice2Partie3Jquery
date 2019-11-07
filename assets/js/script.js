$(document).ready(function(){
  $('#negativ').on('click', function(){
    var modifiedNumber = parseInt($('#modifiedNumber').val()) - 1;
    $('#modifiedNumber').val(modifiedNumber);
  })
  $('#positiv').on('click', function(){
    var modifiedNumber = parseInt($('#modifiedNumber').val()) + 1;
    $('#modifiedNumber').val(modifiedNumber);
  })
})
