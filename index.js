document.getElementById("envio").addEventListener("submit", function(event) {
            event.preventDefault();
            // Aquí puedes agregar la lógica para procesar el formulario (por ejemplo, enviar los datos a un servidor).
            // Por ahora, simplemente mostraremos los datos en la consola.
            console.log("Nombre:", document.getElementById("nombre").value);
            console.log("Apellido:", document.getElementById("apellido").value);
            console.log("Teléfono:", document.getElementById("telefono").value);
            console.log("Correo Electrónico:", document.getElementById("correo").value);
            console.log("Área de Texto:", document.getElementById("mensaje").value);
            console.log("Términos Legales Aceptados:", document.getElementById("terminos").checked);
        });
        
        // Agregar listener al checkbox
        document.getElementById("terminos").addEventListener("change", function() {
            // Habilitar o deshabilitar el botón según el estado del checkbox
            document.getElementById("enviarBtn").disabled = !this.checked;
        });
        