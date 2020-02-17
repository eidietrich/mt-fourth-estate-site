import { each, on } from "./dom-utils.js";
import { addGAListeners } from "./google-analytics.js";

function createListeners() {
  on("click", "[data-target]", ev => {
    var targets = ev.currentTarget.dataset.target;
    var toggleClass = ev.currentTarget.dataset.toggleClass;
    toggleClass = toggleClass ? toggleClass : "is-active";

    each(targets, el => {
      el.classList.toggle(toggleClass);
    });
  });

  addGAListeners();
}

on("DOMContentLoaded", document, createListeners);
