$(document).on('blur','input', function(){
    $(this).css('border','1px solid red');
     
});
$(document).on('focus','input', function(){
    $(this).css('border','1px solid green');
    
});

