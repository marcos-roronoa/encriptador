function encriptar(){
    let texto = document.getElementById("texto").value;
    let texto_cifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        if(texto.length === 0 || /[A-Z]/.test(texto) || /[^a-zA-Z0-9\s]/.test(texto)){
			swal("Debes escribir un texto para encriptar , evitar mayusculas o caracteres especiales")
        }else{
	    let resultado = texto_cifrado;
            let textarea_resultado = document.getElementById("resultado");
            textarea_resultado.value = resultado;

        }
}


function desencriptar(){
    let texto = document.getElementById("texto").value;
    let texto_cifrado = texto
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if(texto.length === 0 || /[A-Z]/.test(texto) || /[^a-zA-Z0-9\s]/.test(texto)){
			swal("Debes escribir un texto para encriptar , evitar mayusculas o caracteres especiales")
        }else{
	    let resultado = texto_cifrado;
            let textarea_resultado = document.getElementById("resultado");
            textarea_resultado.value = resultado;

        }

        }
}

function Copiar(){
    //selecciona el campo  de texto
    var copy_text = document.getElementById("resultado");

    //selecciona el texto del campo
    copy_text.select();
    
    //copia el texto al portapapeles
    document.execCommand("copy");

    ///alerta con el texto copiado
    swal("Texto copiado:" + copy_text.value);
}
