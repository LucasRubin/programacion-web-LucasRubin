function enviarConsulta() {
    
    const email = document.getElementById('inputEmail').value;
    const consulta = document.getElementById('inputConsulta').value;
  
    
    if (!email || !consulta) {
      alert("Por favor, complete tanto el campo de correo electrónico como el de consulta antes de enviar.");
      return; 
    }
  
    
    console.log('Email:', email);
    console.log('Consulta:', consulta);
  
    // Mostrar el mensaje de éxito
    alert("Consulta enviada con éxito. ¡Gracias!");
  }
  
  