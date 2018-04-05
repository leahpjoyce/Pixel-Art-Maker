

$('#sizePicker').on("click", function(event) {
event.preventDefault();
$('tr').remove();
const height = $('#inputHeight').val();
const weight = $('#inputWeight').val();
  for (let i = 0; i < height; i++) {
  	height[i] = $("table").append("<tr></tr>");
  for (let j = 0; j < weight; j++) {
    weight[j] = $("tr:last").append("<td></td>");
	$('td').attr('class', 'cell')
    }
  }

$(".cell").on("click", function() {
const color = $('#colorPicker').val();
$(this).css("background-color", color);
});

});



