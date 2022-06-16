import { guestHTML } from "./guests.js";
import { areasHTML } from "./areas.js";
import { parkServices } from "./services.js";
const mainContainer = document.querySelector("#container")

const applicationHTML = `
${areasHTML()} 
${guestHTML()} `


mainContainer.innerHTML = applicationHTML


const headerHTML = `${parkServices()}`

const headContainer = document.querySelector("#header")
headContainer.innerHTML = headerHTML