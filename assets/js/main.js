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
    } else if (target.matches('[data-nxt-toggle="collapse"]')) {
      const collapse = target?.closest(".collapsible");
      const items = collapse?.querySelectorAll(".collapse-item");
      const active = target?.closest(".collapse-item");
      if (active) {
        items.forEach((i) => i.classList.remove("active"));
        if (active.classList.contains(".active")) {
          active.classList.remove("active");
        } else {
          active.classList.add("active");
        }
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

function multirange(
  inputMin,
  inputMax,
  sideTomove,
  rangethumb,
  range,
  minText,
  maxText
) {
  const min_value = parseFloat(inputMin.value);
  const min_range = parseFloat(inputMin.min);
  const max_input = parseFloat(inputMax.value);
  const max_range = parseFloat(inputMin.max);
  let count;
  if (sideTomove === "left") {
    inputMin.value = Math.min(min_value, max_input - 1);
    count = ((inputMin.value - min_range) / (max_range - min_range)) * 100;
    rangethumb.style.setProperty(sideTomove, `${count}%`);
    range.style.setProperty(sideTomove, `${count}%`);
    minText.innerHTML = `${inputMin.value}`;
  } else if (sideTomove === "right") {
    inputMax.value = Math.max(min_value + 1, max_input);
    count = ((inputMax.value - min_range) / (max_range - min_range)) * 100;
    rangethumb.style.setProperty(sideTomove, `${100 - count}%`);
    range.style.setProperty(sideTomove, `${100 - count}%`);
    maxText.innerHTML = `${inputMax.value}`;
  }
}

document.querySelectorAll(".multi-range").forEach((el) => {
  const min_input = el.querySelector(".min-range");
  const max_input = el.querySelector(".max-range");
  const minrangethumb = el.querySelector(".min-range-thumb");
  const maxrangethumb = el.querySelector(".max-range-thumb");
  const range = el.querySelector(".range");
  const minText = el.querySelector(".min");
  const maxText = el.querySelector(".max");

  multirange(
    min_input,
    max_input,
    "left",
    minrangethumb,
    range,
    minText,
    maxText
  );
  multirange(
    min_input,
    max_input,
    "right",
    maxrangethumb,
    range,
    minText,
    maxText
  );

  min_input.addEventListener("input", function () {
    multirange(
      min_input,
      max_input,
      "left",
      minrangethumb,
      range,
      minText,
      maxText
    );
  });

  max_input.addEventListener("input", function () {
    multirange(
      min_input,
      max_input,
      "right",
      maxrangethumb,
      range,
      minText,
      maxText
    );
  });
});
