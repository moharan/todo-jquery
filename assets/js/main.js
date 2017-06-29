//alert("existe");
$(document).ready(function() {
      var contador = 0;
 	// codigo (13 codigo ASCII)
 	$("body").keyup(function(x) {
 		if(x.keyCode == 13) {
       		// value input
       		var value = $("#first_name").val();
       		$("#tareas").append("<div class='nuevo'><input type='checkbox' id='test-" + contador + "' /><label for='test-" + contador + "'>" + value + "</label> <a id='remove' class='waves-effect waves-light btn'>remove</a></div>");
       		// tareas borradas
                  $("a").click(function(){
                        $(this).parent().remove();
                  });
                  // limpiar input
                  $("#first_name").val("");
                  // tareas completas
                  $("#test-" + contador).click(function(){
                        console.log("aqui voy");
                        $("#completadas").append($(this).parent());
                  });
                  // marcar contador
                  contador++;
       	}
      });
});
