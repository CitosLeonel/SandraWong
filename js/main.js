/* ============================================
   SANDRA QUIROMASAJISTA — JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- HEADER: scroll shadow ----
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ---- NAV MOBILE TOGGLE ----
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav__list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
    // Cerrar al hacer clic en un enlace
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navList.classList.remove('open'));
    });
  }

  // ---- FAQ ACCORDION ----
  window.toggleFaq = function (btn) {
    const item = btn.closest('.faq__item');
    const isOpen = item.classList.contains('open');
    // Cerrar todos
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    // Abrir el clicado si estaba cerrado
    if (!isOpen) item.classList.add('open');
  };

  // ---- FORMULARIO DE CONTACTO ----
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.style.display = 'none';
          formSuccess.style.display = 'flex';
          // Enviar evento de conversión a Google Ads / Meta Pixel
          trackConversion();
        } else {
          const data = await response.json();
          if (data.errors) {
            alert('Error: ' + data.errors.map(e => e.message).join(', '));
          } else {
            showFallback();
          }
        }
      } catch (err) {
        // Si falla la conexión, redirigir a WhatsApp como fallback
        showFallback();
      } finally {
        submitBtn.textContent = 'Enviar solicitud de reserva';
        submitBtn.disabled = false;
      }
    });
  }

  function showFallback() {
    alert('Hubo un problema al enviar el formulario. Por favor, escríbenos directamente por WhatsApp.');
    window.open('https://wa.me/34XXXXXXXXX', '_blank');
  }

  // ---- TRACKING DE CONVERSIONES ----
  function trackConversion() {
    // Google Ads conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXXX', // Reemplazar con tu ID de conversión
        'event_callback': function () {}
      });
      gtag('event', 'lead', {
        'event_category': 'contacto',
        'event_label': 'formulario_reserva'
      });
    }
    // Meta Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  }

  // ---- SMOOTH SCROLL (refuerzo para navegadores legacy) ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- ANIMACIÓN DE ENTRADA (Intersection Observer) ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .testimonial-card, .step, .faq__item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // ---- FECHA MÍNIMA en el picker (hoy) ----
  const fechaInput = document.getElementById('fecha');
  if (fechaInput) {
    const today = new Date().toISOString().split('T')[0];
    fechaInput.setAttribute('min', today);
  }

});
