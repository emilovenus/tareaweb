fetch("https://emiweb.onrender.com/api/mensaje")
  .then(res => res.json())
  .then(data => {
    console.log("Mensaje desde backend:", data.mensaje);
    document.getElementById("mensaje").innerText = data.mensaje;
  })
  .catch(err => {
    console.error("Error al conectar:", err);
    document.getElementById("mensaje").innerText = "Error al obtener mensaje";
  });
