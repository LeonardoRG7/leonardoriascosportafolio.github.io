// STIWCHER

const styleSwitcherToggle = () => {
  const styleSwitcher = document.querySelector(".js-style-switcher");
  const styleSwitcherToggler = document.querySelector(
    ".js-style-switcher-toggler"
  );

  styleSwitcherToggler.addEventListener("click", function () {
    styleSwitcher.classList.toggle("open");

    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
};
styleSwitcherToggle();

// THEME COLOR
const themeColor = () => {
  const hueSlider = document.querySelector(".js-hue-slider");
  const html = document.querySelector("html");

  const setHue = (value) => {
    html.style.setProperty("--hue", value);
    document.querySelector(".js-hue").innerHTML = value;
  };

  hueSlider.addEventListener("input", function () {
    setHue(this.value);

    localStorage.setItem("--hue", this.value);
  });

  const slider = (value) => {
    hueSlider.value = value;
  };

  if (localStorage.getItem("--hue") !== null) {
    setHue(localStorage.getItem("--hue"));
    slider(localStorage.getItem("--hue"));
  } else {
    const hue = getComputedStyle(html).getPropertyValue("'--hue");
    console.log(hue);
    slider(hue.split(" ").join(" "));
  }
};
themeColor();
