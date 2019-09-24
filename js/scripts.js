$(function() {
  $("#questions form").submit(function(event) {
    var night = $("input:radio[name=night]:checked").val();
    var person = $("input:radio[name=person]:checked").val();
    var cash = $("input:radio[name=cash]:checked").val();
    var rather = $("input:radio[name=cash]:checked").val();
    var car = $("input:radio[name=cash]:checked").val();

      if (night === "fruit" || person === "pitcher" || cash === "happiness"){
        $("#ruby").fadeTo("slow", 0.8);
      } 
      else if (night === "chess" || person === "Hawking"){
        $("#C").fadeTo("slow", 0.8);
      } 
      else if (night === "beer" || person === "tasty" || cash === "dollars" ||        rather === "beach" || car === "call"){
        $("#javascript").fadeTo("slow", 0.8);
      } 
      else 
      {
       $("#nothing").fadeTo("slow", 0.8);
      }
   
      event.preventDefault();
      });
});
