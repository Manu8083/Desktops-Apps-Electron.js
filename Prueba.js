


	document.getElementById('inputText').addEventListener("click",recibir,true);
	document.getElementById('PassV').addEventListener("click",codigo,true);
		function recibir()
	{
		var valor = document.getElementById("textvalue").value;
		document.getElementById("txt").innerHTML= "Bienvenido " + valor;

	};


	function codigo(recibirPass) {
		pass =  document.getElementById("textPass").value;
		if (pass == 1234) {

			document.getElementById('formulario').style.display = "block";

		} else {
			alert("Paila");
			document.getElementById('formulario').style.display = "none";
			document.getElementById("txt").innerHTML= " ";
		}

	}
