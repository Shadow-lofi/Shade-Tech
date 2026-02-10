      
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

     
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.style,opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      documents.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });

      
      document.querySelectorAll('.skills-grid li').forEach(li => {
        li.addEventListener('mouseenter', () => {
          const tooltip = li.getAttribute('data-tooltip');
          if(tooltip) {
            li.style.position = 'relative';
            const tip = document.create.Element('span');
            tip.className = 'tooltip';
            tip.textContent = tooltip;
            li.appendChild(tip);

          }
        });

        li.addEventListener('mouseleave', () => {
          const tip = li.querySelector('.tooltip');
          if(tip) tip.remove();
        });
      });

      // Contact form handling
      /*document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if(name && email && message) {
          // Placeholder for live submission (e.g., EmailJS)
          alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
          e.target.reset();
          document.getElementById('formMessage').textContent = 'Message sent successfully!';
          document.getElementById('formMessage').className = 'form-message success';
        } else {
          document.getElementById('formMessage').textContent = 'Please fill all fields.';
          document.getElementById('formMessage').className = 'form-message error';
        }
      });*/