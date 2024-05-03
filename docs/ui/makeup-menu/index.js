import "../../docs.css";
import "@ebay/skin/tokens";
import "@ebay/skin/global";
import "@ebay/skin/menu";

// REQUIRE
// const Menu = require('../../../packages/ui/makeup-menu').default;

// IMPORT
import Menu from "../../../packages/ui/makeup-menu";

const log = (e) => console.log(e.type, e.detail);

window.onload = function () {
  document.querySelectorAll(".menu").forEach(function (el, i) {
    const widget = new Menu(el);

    el.addEventListener("makeup-menu-select", log);
    el.addEventListener("makeup-menu-change", log);
    el.addEventListener("makeup-menu-mutation", log);
  });
};