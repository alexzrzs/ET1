class dom{
    constructor(){
        super();
    }

    show_element(id){
        document.getElementById(id).style.display = 'block';
    }

    mostrar_error_campo(id, codigoerror){
        // Muestra el codigo de erro en la misma linea
        document.getElementById("span_error_"+id).style.display = 'inline';
        document.getElementById("error_"+id).innerHTML = codigoerror;
        // Colorea de rojo para indicar que hay un error
        document.getElementById(id).style.borderBlockColor = "red";
        document.getElementById(id).style.backgroundColor = "#f78686";
        //Pone el foco en el boton submit
        document.getElementById("submit_button").focus();
    }

    mostrar_exito_campo(id){
        // Oculta el span de error y setea el id error a vacio
		document.getElementById('span_error_'+id).style.display = 'none';
		document.getElementById('error_'+id).innerHTML = '';
        // Colorea de verde para indicar que el campo es correcto
        document.getElementById(id).style.backgroundColor = "#b7f7b7";
		document.getElementById(id).style.borderBlockColor = 'green';
	}

	fillform(formdata, idform){
		document.getElementById(idform).innerHTML = formdata;
		document.getElementById(idform).style.display = 'block';
	}

    	/*
        * if id and mode switch the state of display of html element(id) to 'none' or 'block'/'inline'
        * if 'on'/'off' force html element (id) to show or hide 
        * @param {string} id  id of html element to show/hide
        * @param {string} mode 'block'/'inline'
        * @param {string} ponerestado 'on'/'off'
        */

	switch_display_mode(id,mode, ponerestado=null){

	if (ponerestado == 'on'){
		document.getElementById(id).style.display = mode;
	}
	else{
		if (ponerestado == 'off'){
		document.getElementById(id).style.display = 'none';
		}
		else{ 
			if (document.getElementById(id).style.display == 'none'){
				document.getElementById(id).style.display = mode;
			}
			else{
				document.getElementById(id).style.display = 'none';
			}
		}
	}
}


}
