$( "#sizePicker" ).submit(function( event ) {

  event.preventDefault();
  
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  makeGrid(height, width);
});

function makeGrid(a, b) {
    $('tr').remove();
    
    for (let i = 0; i < a; i++) {
  	$("table").append("<tr></tr>");
  for (let j = 0; j < b; j++) {
    $("tr:last").append("<td></td>");
	$('td').attr('class', 'cell')
    }
  }
   $(".cell").on("click", function() {
    const color = $('#colorPicker').val();
    $(this).css("background-color", color);
}); 
}
