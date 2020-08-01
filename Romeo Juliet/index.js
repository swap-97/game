

$(".btn").click(function(){
  calculate();

    var name1 = $("#formGroupExampleInput").val();
    var name2 = $("#formGroupExampleInput2").val();
    if(name1 == ""){
      alert("Aww! Don't feel shy! Type your name!");
    }
    else if(name2 == ""){
      alert("Ahem! Some one is blushing!! It's alright to type your crush name!! ")
    }
    else{
      $(".form-group1").text("Hey " + name1 + ", your crush " + name2 +" has " +calculate()+ "% feelings on you!! Made and mad for each other!!").addClass("after-effect");
      $(".form-group2").remove();
      $(".btn").text("Go Back!").click(function () {
          location.reload(true);

      });
  }

});

function calculate()
{
  var n = Math.random();
  var lovescore = Math.floor(n*100)+1;
  return lovescore;
}
