var mensaje = document.getElementsByClassName("error");

function validateForm(){
	var data = document.getElementsByClassName("form-control");
		function soloLetras(indice,nombre) {
			if(data[indice].value.trim() == "" || data[indice].value == undefined ){
				mensaje[indice].style.display="block";
				mensaje[indice].innerHTML = "Debe ingresar su "+nombre;
			}
			else if(data[indice].value.toString().charAt(0) != data[indice].value.toString().charAt(0).toUpperCase()){
				mensaje[indice].style.display="block";
				mensaje[indice].innerHTML = "Colocar al inicio letra mayuscula";
			}
			else if (!/([A-Z]{1}[a-zñáéíóú]\D+)$/.test(data[indice].value)) {
				mensaje[indice].style.display="block";
				mensaje[indice].innerHTML = "Debe ingresar un "+ nombre + " válido";
			}
			else{
				mensaje[indice].style.display ="none";
			}
		}
	soloLetras(0,"nombre");
	soloLetras(1,"apellido");

	//Validando correo electronico
	if(data[2].value.trim() == "" || data[2].value == undefined || data[2].value == null){
		mensaje[2].style.display = "block";
		mensaje[2].innerHTML = "Debe ingresar un correo electronico";
	}
	else if (!/\S+@\S+\.\S+/.test(data[2].value)) {
		mensaje[2].style.display = "block";
		mensaje[2].innerHTML = "Verifique su e-mail";
	}
	else {
		mensaje[2].style.display = "none";
	}

	//Validando contraseña
	if (data[3].value.trim() == "" || data[3].value==undefined) {
		mensaje[3].style.display = "block";
		mensaje[3].innerHTML = "Debe ingresar una contraseña";
	}
	else if (data[3].value == "password" || data[3].value == "123456" || data[3].value == "098765") {
		mensaje[3].style.display = "block";
		mensaje[3].innerHTML = "Debe ingresar una contraseña válida";
	}
	else if (data[3].value.length < 7 || data[3].value.length > 15 ) {
		mensaje[3].style.display = "block";
		mensaje[3].innerHTML = "La contraseña debe tener al menos 6 caracteres";
	}
	else {
		mensaje[3].style.display = "none";
	}
	//Validando seleccionando bici
	if(data[4].selectedIndex == 0 || data[4].selectedIndex == null ){
		mensaje[4].style.display = "block";
		mensaje[4].innerHTML = "Debe seleccionar una bici";
	}
	else {
		mensaje[4].style.display = "none";
	}

}
