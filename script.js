$(document).ready(function(){

var thisTable;

$(".available").on("click", function (event){
    thisTable = $(this);
    $("form").fadeIn("slow");
    $("form").removeClass("hidden");
    var tableNumber = $(this).text();
    $("h3 > span").text(tableNumber);


});

  $("button").on("click", function (event){
    event.preventDefault();
    thisTable.addClass("reserved");
    addTableData();
    $("form").fadeOut("slow");
    $('form').addClass("hidden");
    $('form')[0].reset();
  });

  $("#x").click(function(){
    $("form").fadeOut("slow");
    $('form').addClass("hidden");
  });

  function addTableData(){
    var nameInput = $("#partyName").val();
    var partyInput = $("#partySize").val();

    thisTable.append('<div class="fullInfo"><div> Name: ' + nameInput + '</div><div> Size of party: ' + partyInput + '</div')

  }
});
