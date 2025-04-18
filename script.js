const estado = {
    hambre: null,
    sueno: null,
    aburrido: null,
  };
  
  function responder(pregunta, respuesta) {
    estado[pregunta] = respuesta;
  }
  
  function evaluar() {
    const { hambre, sueno, aburrido } = estado;
  
    if (!hambre || !sueno || !aburrido) {
      document.getElementById("resultado").innerText = "Completá todas las preguntas.";
      return;
    }
  
    let mensaje = "";
  
    if (hambre === "si" && sueno === "si") {
      mensaje = "Comé algo rico y después dormí una siestita 😴🍕";
    } else if (hambre === "si") {
      mensaje = "¡Hora de comer algo! 🍔";
    } else if (sueno === "si") {
      mensaje = "Una siesta te va a venir bien 🛌";
    } else if (aburrido === "si") {
      mensaje = "Mirá una peli o programá algo creativo 🎬💡";
    } else {
      mensaje = "Estás joya, ¡a seguir codeando como un pro! 💻🔥";
    }
  
    document.getElementById("resultado").innerText = mensaje;
  }
  
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");  // Alternamos la visibilidad del menú
    menuToggle.classList.toggle("active");  // Alternamos el estado del icono
  });
  