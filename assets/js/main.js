//alert("existe");
$(document).ready(function() {
      var contador = 0;
 	// codigo (13 codigo ASCII)
 	$("body").keyup(function(x) {
 		if(x.keyCode == 13) {
       		// value input
       		var value = $("#first_name").val();
                  // verificar si value esta vacio sino ejecuta la tarea
                  if (value == "") {
                        alert("Debes escribir una tarea");
                  } else {
       		      $("#tareas").append("<div class='nuevo'><input type='checkbox' id='test-" + contador + "' /><label for='test-" + contador + "'>" + value + "&nbsp;"+ "</label><a id='remove' class='btn-floating btn-large waves-effect waves-light deep-purple'><i class='material-icons'>thumb_down</i></a></div>");
       		      // tareas borradas
                        $("a").click(function(){
                        $(this).parent().remove();
                        });
                        // limpiar input
                        $("#first_name").val("");
                        // tareas completas
                        $("#test-" + contador).click(function(){
                        $("#completadas").append($(this).parent());
                        // al estar completar desabilitar input
                        $(this).attr("disabled", "disabled");
                        });
                        // marcar contador
                        contador++;
                  }
       	} 
      });
});
