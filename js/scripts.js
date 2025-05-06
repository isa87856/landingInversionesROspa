document.addEventListener("DOMContentLoaded", function () {
    loadComponent("components/header.html", "header-container");
    loadComponent("components/footer.html", "footer-container");
    loadComponent("components/carousel.html", "carousel-container");
    loadComponent("components/propiedades.html", "propiedades-container");
    loadComponent("components/aboutUs.html", "nosotros-container");
    

  });
  
  function loadComponent(filePath, containerId) {
    fetch(filePath)
      .then(response => response.text())
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      });
  }
    
  function guardarPropiedad(id) {
    localStorage.setItem('propiedadSeleccionada', id);
  }
  