function toggleMenu() {
  const menu = document.getElementById("navbarMenu");
  const toggleIcon = document.querySelector(".navbar-toggle");

  menu.classList.toggle("show-menu");

  // Toggle between the hamburger and cross icons
  if (menu.classList.contains("show-menu")) {
      toggleIcon.classList.add("active-icon");
  } else {
      toggleIcon.classList.remove("active-icon");
  }
}

// Smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior

      // Get the target element's ID from the href attribute
      const targetID = this.getAttribute('href');
      
      // Scroll to the target element smoothly
      document.querySelector(targetID).scrollIntoView({
          behavior: 'smooth', // Smooth scroll behavior
          block: 'start' // Align the top of the target element with the top of the viewport
      });
  });
});
