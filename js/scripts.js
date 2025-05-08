document.addEventListener("DOMContentLoaded", function () {
  // Cargar componentes dinámicamente
  loadComponent("components/header.html", "header-container");
  loadComponent("components/footer.html", "footer-container");
  loadComponent("components/propiedades.html", "propiedades-container");
  loadComponent("components/aboutUs.html", "nosotros-container");
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
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("detallePropiedad.html")) {
    const id = localStorage.getItem("propiedadSeleccionada");
    const propiedad = propiedades.find(p => p.id == id) || propiedades[0];

    document.querySelector(".titulo-propiedad").textContent = propiedad.titulo;
    document.querySelector(".text-muted").innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${propiedad.direccion}`;
    document.querySelector(".descripcion p").textContent = propiedad.descripcion;

    const carouselInner = document.querySelector(".carousel-inner");
    const carouselIndicators = document.querySelector(".carousel-indicators");

    carouselInner.innerHTML = "";
    carouselIndicators.innerHTML = "";

    propiedad.imagenes.forEach((img, index) => {
      const isActive = index === 0 ? "active" : "";
      carouselIndicators.innerHTML += `
        <button type="button" data-bs-target="#carouselPropiedad" data-bs-slide-to="${index}" class="${isActive}" aria-label="Imagen ${index + 1}"></button>
      `;
      carouselInner.innerHTML += `
        <div class="carousel-item ${isActive}">
          <img src="${img}" class="d-block w-100 rounded shadow" alt="Imagen ${index + 1}">
        </div>
      `;
    });
  }
});