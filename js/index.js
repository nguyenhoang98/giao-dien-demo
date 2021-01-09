var menu_link = document.getElementsByClassName("menu-link");
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("menu")[0].style.background =
      "rgb(53, 52, 52)";
  } else {
    document.getElementsByClassName("menu")[0].style.background = "";
  }
};

//  show Menu bar

document.getElementsByClassName("toggle-menu")[0].onclick = toggleMenu;
function toggleMenu() {
  document
    .getElementsByClassName("menu")[0]
    .classList.toggle("menu-responsive");
}

// onclick menu link toggle menu

for (var i = 0; i < menu_link.length - 1; i++) {
  menu_link[i].onclick = toggleMenu;
}
