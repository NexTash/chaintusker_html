// // // Get the custom cursorpointer elements
// // const cursorpointer = document.querySelector(".cursor");
// // // Track mouse movement
// // document.addEventListener("mousemove", (e) => {
// //     // Update the position of the exact cursorpointer
// //     if (e.target.matches(".btn-outline") | e.target.matches(".btn")) {
// //         cursorpointer.classList.add("cursor-text");
// //         cursorpointer.innerText = "Click";
// //     } else if (e.target.matches(".image-link")) {
// //         cursorpointer.classList.add("cursor-text");
// //         cursorpointer.innerText = "Visit";
// //     } else if (e.target.matches(".cursor-hover")) {
// //         const text = e.target.getAttribute("data-text");
// //         cursorpointer.classList.add("cursor-text");
// //         cursorpointer.innerText = text;
// //     } else {
// //         cursorpointer.classList.remove("cursor-text");
// //         cursorpointer.innerText = "";
// //     }

// //     cursorpointer.style.left = e.pageX + "px";
// //     cursorpointer.style.top = e.pageY + "px";
// // });

// // Lazy loader

// document.addEventListener("DOMContentLoaded", function () {
//   var lazyImages = document.querySelectorAll(".lazy-load");

//   var options = {
//     threshold: 0.5, // Adjust threshold as needed
//   };

//   var lazyLoad = function (entries, observer) {
//     entries.forEach(function (entry) {
//       if (entry.isIntersecting) {
//         var img = entry.target;
//         img.src = img.dataset.src;
//         img.classList.add("fade-in");
//         img.classList.remove("lazy-load");
//         observer.unobserve(img);
//       }
//     });
//   };

//   var observer = new IntersectionObserver(lazyLoad, options);

//   lazyImages.forEach(function (img) {
//     observer.observe(img);
//   });
// });

// (function () {
//   var counter = 0;
//   var c = 0;

//   var i = setInterval(function () {
//     var counterElement = document.querySelector(
//       ".loading-page .counter .count"
//     );
//     var progressBar = document.querySelector(
//       ".loading-page .counter .load-progress"
//     );

//     counterElement.innerHTML = c + "%";
//     progressBar.style.width = c + "%";

//     counter++;
//     c++;

//     if (counter == 101) {
//       clearInterval(i);
//       hideLoader();
//     }
//   }, 10);

//   function hideLoader() {
//     // Hide the loader smoothly
//     var loader = document.querySelector(".loading-page");
//     loader.style.opacity = 0; // Set opacity to 0
//     setTimeout(function () {
//       loader.style.display = "none"; // After the transition, hide the loader
//     }, 500); // Adjust the timeout to match the transition duration (0.5s)
//   }

//   // Add an event listener for when the page finishes loading
//   window.onload = function () {
//     hideLoader();
//   };
// })();

document.querySelectorAll(".menu-btn").forEach(function (item) {
  item.addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      item.classList.remove("close-icon");
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
    } else {
      item.classList.add("close-icon");
      sidebar.classList.add("active");
      body.style.overflowY = "hidden";
      html.style.overflowY = "hidden";
    }
  });
});

// NAVBAR
window.onscroll = function () {
  navbar();
};

function navbar() {
  let position = 20;
  if (
    document.body.scrollTop > position ||
    document.documentElement.scrollTop > position
  ) {
    document.getElementById("navbar").classList.add("navbar-scroll");
  } else {
    document.getElementById("navbar").classList.remove("navbar-scroll");
  }
}

// Dropdown
(function () {
  document.addEventListener("click", function (e) {
    const target = e.target;
    const body = document.querySelector("body");

    if (target.matches('[data-toggle="tab"]')) {
      const tabs = target.closest(".tabs");
      const panes = tabs.querySelectorAll(".t-pane");
      const items = tabs.querySelectorAll(".t-item");
      const active = target.getAttribute("data-target");
      items.forEach((i) => i.classList.remove("active"));
      target.classList.add("active");
      panes.forEach((i) => i.classList.remove("active"));
      document.querySelector(active).classList.add("active");
    } else if (target.matches('[data-toggle="collapse"]')) {
      const collapse = target?.closest(".collapse");
      const items = collapse?.querySelectorAll(".c-item");
      const active = target?.closest(".c-item");
      if (active) {
        items.forEach((i) => i.classList.remove("active"));
        active.classList.add("active");
      } else {
        const attr = target.getAttribute("data-target");
        document.querySelector(attr).classList.toggle("hide");
      }
    } else if (target.matches("[data-toggle='modal']")) {
      const attr = target.getAttribute("data-target");
      const selector = document.querySelector(attr);
      selector.classList.toggle("active");
      !target.classList.contains("active")
        ? (body.style.overflow = "hidden")
        : null;
    } else if (target.matches(".modal-dialog")) {
      const modal = target.closest(".active");
      modal.classList.remove("active");
      body.style.overflow = "auto";
    } else if (target.matches('[data-toggle="notice"]')) {
      target.parentElement.remove();
    } else if (target.closest("[data-toggle='dropdown']")) {
      const dropdownT = target.closest(".dropdown");

      document.querySelectorAll("[data-toggle='dropdown']").forEach((item) => {
        const dropdownA = item.closest(".dropdown");

        if (dropdownT != dropdownA) {
          dropdownA.classList.remove("active");
        } else {
          dropdownT.classList.toggle("active");
        }
      });
    } else if (target.closest(".dropdown-menu")) {
      const menu = target.closest(".dropdown-menu");
      const btn = menu.previousElementSibling;
      const close = btn.getAttribute("data-dropdown-close");
      if (close == "outside") {
        menu.classList.add("show");
      } else if (close == "inside") {
        menu.classList.remove("show");
      } else if (close == null) {
        menu.classList.remove("show");
      }
    } else if (target.closest(".item-no-close")) {
    } else {
      document
        .querySelectorAll(".dropdown")
        .forEach((item) => item.classList.remove("active"));
    }
  });
})();

// const type = $(this).data("type");
// const link = window.location;
// if (type == "twitter") {
//     window.open("https://twitter.com/intent/tweet?text=" + link)
// } else if (type == "facebook") {
//     window.open("https://www.facebook.com/sharer.php?u=" + link)
// } else if (type == "linkedin") {
//     window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link)
// } else if (type == "link") {
//     navigator.clipboard.writeText(link);
// }
