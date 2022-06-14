import { guestHTML } from "./guests.js";
import { areasHTML } from "./areas.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
${areasHTML()} 
${guestHTML()} `


mainContainer.innerHTML = applicationHTML