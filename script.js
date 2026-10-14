// SHREE RADHA RANI FURNITURE MAKERS - Interactive Custom Woodwork & Shopping Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other accordion items
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // 2. WhatsApp Direct Route & Console Logs
  const waUrl = 'https://wa.me/918003872035';
  const trackedLinks = document.querySelectorAll('a[href*="wa.me/918003872035"]');
  
  trackedLinks.forEach((link) => {
    link.addEventListener('click', () => {
      console.log('Routing to Shree Radha Rani Furniture Makers Desk:', waUrl);
    });
  });

  // 3. Floating entrance animation for the fixed WhatsApp dock
  const floatingDock = document.getElementById('floatingDock');
  if (floatingDock) {
    floatingDock.style.opacity = '0';
    setTimeout(() => {
      floatingDock.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      floatingDock.style.opacity = '1';
    }, 200);
  }
});
