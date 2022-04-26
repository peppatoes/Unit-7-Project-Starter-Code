$("button").click(function(){
      let year = $(".name").val();
    let apples = $(".apples").val();
    let age = $(".age").val();
    
   let yearstoday= (year-age );
    
     $(".Calculation").append("You will be"+yearstoday+"years old."+"<br>");
});