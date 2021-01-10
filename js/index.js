var menu_action = document.getElementById("menu-action");
var menu_link = document.getElementsByClassName("menu-link");
var pageY = window.pageYOffset;
menu_action.onclick = toggleMenuMobile;
window.onscroll = toggleBgMenu;
function toggleMenuMobile() {
  document
    .getElementsByClassName("menu")[0]
    .classList.toggle("menu-responsive");
}
// click menu-link
for (let i = 0; i < menu_link.length; i++) {
  menu_link[i].onclick = toggleMenuMobile;
}
// scroll show background menu
function toggleBgMenu() {
  var _pageY = window.pageYOffset;
  if (_pageY > pageY) {
    document.getElementsByClassName("menu")[0].style.top = "0px";
  } else if (_pageY < pageY) {
    document.getElementsByClassName("menu")[0].style.top = "-82px";
  }
  pageY = _pageY;
}
