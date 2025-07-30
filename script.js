document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar que cambia de color al hacer scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Animación de aparición de secciones al hacer scroll
    // Usamos Intersection Observer para mayor eficiencia
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // el viewport
        rootMargin: '0px',
        threshold: 0.1 // se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está en el viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar el elemento una vez que ha sido animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observamos cada una de las secciones
    sections.forEach(section => {
        observer.observe(section);
    });

});

const kintonUrl = 'kinton.png'; // Cambia si tu imagen tiene otro nombre o ruta

// Crear el cursor principal
const kinton = document.createElement('img');
kinton.src = kintonUrl;
kinton.className = 'kinton-cursor';
document.body.appendChild(kinton);

document.addEventListener('mousemove', e => {
  kinton.style.left = (e.clientX - 24) + 'px';
  kinton.style.top = (e.clientY - 24) + 'px';

  // Crear el rastro
  const trail = document.createElement('img');
  trail.src = kintonUrl;
  trail.className = 'kinton-trail';
  trail.style.left = (e.clientX - 16) + 'px';
  trail.style.top = (e.clientY - 16) + 'px';
  document.body.appendChild(trail);

  setTimeout(() => trail.remove(), 800); // Elimina el rastro tras la animación
});
