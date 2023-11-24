function enviarConsulta() {
    // Capturar los valores del correo electrónico y la consulta
    const email = document.getElementById('inputEmail').value;
    const consulta = document.getElementById('inputConsulta').value;
  
    // Verificar si la consulta está vacía
    if (!email || !consulta) {
      alert("Por favor, complete tanto el campo de correo electrónico como el de consulta antes de enviar.");
      return; // Salir de la función sin continuar con el envío de la consulta
    }
  
    // Lógica para enviar la consulta (simulada con un console.log)
    console.log('Email:', email);
    console.log('Consulta:', consulta);
  
    // Mostrar el mensaje de éxito
    alert("Consulta enviada con éxito. ¡Gracias!");
  }
  
  