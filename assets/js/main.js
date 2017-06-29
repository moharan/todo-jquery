//alert("existe");
$(document).ready(function() {
 	// codigo (13 codigo ASCII)
 	$("body").keyup(function(x) {
 		if(x.keyCode == 13) {
 			//alert("trabaja");
       		// value input
       		var value = $("#first_name").val();
       		$("#tareas").append("<p><input class='with-gap' name='group1' type='radio' id='test1' /><label for='test1'>" + value + "</label> <a class='waves-effect waves-light btn'>remove</a></p>");
       		$("#first_name").val("");
       	}
       	// tareas completas
       	$("#test1").keyup(function(){
       		alert("casi completadas");
       	});
    });
});
