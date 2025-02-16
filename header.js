 window.onload = function() {
      document.getElementById("header").classList.add("visible");
    };

    window.onscroll = function() {
      let scrollPos = window.scrollY;
      let header = document.getElementById("header");

      header.style.opacity = scrollPos > 100 ? 0 : 1;
    };
