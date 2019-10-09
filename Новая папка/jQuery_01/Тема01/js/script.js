$(document).ready(function(){
$('h1')	
.css("color", "green")
.css('border', '3px solid magenta')
.css('width', '350px')
.css('background-color', 'yellow')
.css('padding', '10px')
.html(' текст')
.css('text-align', 'center')
});

$(function(){
	$("#btn_open").click(function(){
		$("#message")
		.html("Nova fraza!!!")
		.css("background-color", "magenta")
		.parent()
		.css("background-color","aqua")
		.width(150)
		.height(80)
	})	
});

$(function(){
	$("#btn_hide").click(function(){
		location.reload();
	})
})