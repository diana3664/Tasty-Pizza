$(document).ready(function(){
  $("#form#form1").submit(function(event){
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var messageInput = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (nameInput + ", Welcome to Delani studio.Our team of experts will get intouch with you within 24hours");
    }
    else {
      alert("invalid email!");
    }
    
  });

});