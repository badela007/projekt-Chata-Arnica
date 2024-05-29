// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
); //vybírá querySelectorem checkbox element - přepínač módů

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}; //funkce, když je element zaškrntý, přepne se na dark-mode, když není zaškrtnutý, přepne se na light mode

toggleSwitch.addEventListener('change', switchTheme, false);
//dává posluchač událostí na checkbox toggleSwith, který čeká na událost change, zavolá se funkce switchTheme, false je výchozí hodnota
