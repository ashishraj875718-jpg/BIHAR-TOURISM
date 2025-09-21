// Smooth scroll for nav and hero button
document.querySelectorAll('nav a, .hero-btn').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Modal functionality
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.querySelector('.close');
  
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      modalTitle.textContent = button.getAttribute('data-title');
      modalText.textContent = button.getAttribute('data-text');
      modal.classList.add('show');
    });
  });
  
  closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  window.addEventListener('click', (e) => { if(e.target == modal) modal.classList.remove('show'); });
  
  // Read More toggle inside cards
  document.querySelectorAll('.toggle-desc').forEach(btn => {
    btn.addEventListener('click', () => {
      const moreText = btn.previousElementSibling.querySelector('.more-text');
      if(moreText.style.display === 'inline') {
        moreText.style.display = 'none';
        btn.textContent = "Read More";
      } else {
        moreText.style.display = 'inline';
        btn.textContent = "Read Less";
      }
    });
  });
  
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  
  // Contact Form Submission
  document.getElementById('contact-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    e.target.reset();
  });
  