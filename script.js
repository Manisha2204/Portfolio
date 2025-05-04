document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
  
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    const typingElement = document.getElementById('typing');
    const words = ["Junior Software Developer",
        "Machine Learning Engineer","Web Developer",
        "Data Analyst","HR IT Analyst","Technical Recruiter"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let currentWord = words[wordIndex];
  
    function type() {
      let currentText = currentWord.substring(0, letterIndex);
      typingElement.innerHTML = currentText;
  
      if (!isDeleting) {
        letterIndex++;
        if (letterIndex > currentWord.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        letterIndex--;
        if (letterIndex < 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          currentWord = words[wordIndex];
        }
      }
  
      let typeSpeed = isDeleting ? 100 : 200;
      setTimeout(type, typeSpeed);
    }
  
    type();
  });
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyMOXlaD9voVcwKQzy5JrzHD4ctC2-jFbQqNhznO6pguY68NnnsfUy7K4pjxK5qLvFJww/exec', {
          method: 'POST',
          body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('statusMsg').textContent = result.result === "Success"
          ? "Thank you! Your message has been sent."
          : "Something went wrong.";
        form.reset();
      } catch (error) {
        document.getElementById('statusMsg').textContent = "There was an error. Please try again.";
      }
    });
  });
  
  





