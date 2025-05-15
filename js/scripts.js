document.addEventListener("DOMContentLoaded", function () {
  // Cargar componentes dinámicamente
  loadComponent("components/header.html", "header-container");
  loadComponent("components/footer.html", "footer-container");
  loadComponent("components/questions.html", "questions-container");
  loadComponent("components/about.html", "about-container");
  loadComponent("components/propiedades.html", "propiedades-container");
  loadComponent("components/experiencias.html", "experiencias-container");
  loadComponent("components/tuPropiedad.html", "tuPropiedad-container", function () {
    // Registrar el evento del formulario después de cargar el componente
    const form = document.getElementById("contact-form");
    const errorMessage = document.getElementById("error-message");

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("mail").value.trim();
        const telefono = document.getElementById("fono").value.trim();

        // Validar campos requeridos
        if (!nombre || !email || !telefono) {
          errorMessage.classList.remove("d-none"); // Mostrar mensaje de error
          return;
        }

        errorMessage.classList.add("d-none"); // Ocultar mensaje de error si todo está completo

        // Enviar el formulario a Formspree
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        })
          .then(response => {
            if (response.ok) {
              // Mostrar ventana emergente de éxito
              const successModal = new bootstrap.Modal(document.getElementById("successModal"));
              successModal.show();

              // Limpiar el formulario
              form.reset();
            } else {
              alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
            }
          })
          .catch(() => {
            alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
          });
      });
    }
  });
});

function loadComponent(filePath, containerId, callback) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`No se encontró el contenedor con ID: ${containerId}`);
    return;
  }

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo: ${filePath} (Estado: ${response.status})`);
      }
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
      if (callback) callback();
    })
    .catch(error => console.error("Error al cargar el componente:", error));
}


// Función para guardar la propiedad seleccionada
function guardarPropiedad(id) {
  localStorage.setItem("propiedadSeleccionada", id);
}