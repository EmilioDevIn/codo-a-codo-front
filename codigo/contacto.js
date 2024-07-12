document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let isValid = true;
    let errorMessage = "";

    // Validar nombre
    const nombre = document.getElementById("nombre");
    if (nombre.value.trim() === "") {
      errorMessage += "El nombre es obligatorio.\n";
      isValid = false;
    }

    // Validar apellido
    const apellido = document.getElementById("apellido");
    if (apellido.value.trim() === "") {
      errorMessage += "El apellido es obligatorio.\n";
      isValid = false;
    }

    // Validar email
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
      errorMessage += "El email es obligatorio.\n";
      isValid = false;
    }

    // Validar teléfono
    const telefono = document.getElementById("telefono");
    if (telefono.value.trim() === "") {
      errorMessage += "El teléfono es obligatorio.\n";
      isValid = false;
    }

    // Validar dirección
    const direccion = document.getElementById("direccion");
    if (direccion.value.trim() === "") {
      errorMessage += "La dirección es obligatoria.\n";
      isValid = false;
    }

    // Validar preferencias
    const preferencias = document.getElementById("preferencias");
    if (preferencias.value === "") {
      errorMessage += "Debe seleccionar un motivo de consulta.\n";
      isValid = false;
    }

    // Validar términos y condiciones
    const terminos = document.getElementById("terminos");
    if (!terminos.checked) {
      errorMessage += "Debe aceptar los términos y condiciones.\n";
      isValid = false;
    }

    // Validar consulta
    const consulta = document.getElementById("consulta");
    if (consulta.value.trim() === "") {
      errorMessage += "La consulta es obligatoria.\n";
      isValid = false;
    }

    if (!isValid) {
      alert(errorMessage);
      event.preventDefault();
    }
  });
