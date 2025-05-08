document.addEventListener("DOMContentLoaded", function () {
  // Cargar componentes dinámicamente
  loadComponent("components/header.html", "header-container");
  loadComponent("components/footer.html", "footer-container");
  loadComponent("components/propiedades.html", "propiedades-container");
  loadComponent("components/aboutUs.html", "nosotros-container");
  loadComponent("components/tuPropiedad.html", "tuPropiedad-container", function () {
    // Registrar el evento del botón después de cargar el componente
    const submitButton = document.getElementById("submit-button");
    if (submitButton) {
      submitButton.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("mail").value.trim();
        const telefono = document.getElementById("fono").value.trim();
        const errorMessage = document.getElementById("error-message");

        // Validar campos requeridos
        if (!nombre || !email || !telefono) {
          errorMessage.classList.remove("d-none"); // Mostrar mensaje de error
          return;
        }

        errorMessage.classList.add("d-none"); // Ocultar mensaje de error si todo está completo

        // Mostrar ventana emergente de éxito
        const successModal = new bootstrap.Modal(document.getElementById("successModal"));
        successModal.show();
      });
    }
  });
  loadComponent("components/experiencias.html", "experiencias-container");
});

// Función para cargar componentes dinámicamente
function loadComponent(filePath, containerId, callback) {
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
      if (callback) callback(); // Ejecutar callback después de cargar el componente
    });
}

// Función para guardar la propiedad seleccionada
function guardarPropiedad(id) {
  localStorage.setItem("propiedadSeleccionada", id);
}