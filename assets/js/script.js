// ============================================
// MUEBLES BR - JAVASCRIPT FUNCIONALIDADES
// ============================================

// Smooth scrolling para los links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Añadir clase 'active' al link de navegación cuando se hace scroll
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});

// Animación para tarjetas de servicios
const serviceCards = document.querySelectorAll('.service-card');
const galleryItems = document.querySelectorAll('.gallery-item');

const animateOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

serviceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  animateOnScroll.observe(card);
});

galleryItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  animateOnScroll.observe(item);
});

// Efecto hover en los ítems de galería
galleryItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Logger para verificar que el script está cargado
console.log('✓ Muebles BR - JavaScript cargado correctamente');
console.log('✓ Smooth scrolling habilitado');
console.log('✓ Animaciones en scroll habilitadas');
console.log('✓ Efectos hover en galería habilitados');

// Función para validar teléfono
function formatPhoneNumber(phone) {
  const phoneRegex = /^\+?[0-9]{9,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Función para validar email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Exportar funciones para uso en consola/desarrollo
window.MueblesaBR = {
  formatPhoneNumber,
  validateEmail,
  version: '1.0.0',
  info: 'Muebles BR - Sitio Web Profesional'
};

console.log('%cMuebles BR v1.0.0', 'color: #c49b63; font-size: 16px; font-weight: bold;');
console.log('Desarrollo: https://github.com/abogadarayenaraya-dotcom/muebles-br');
