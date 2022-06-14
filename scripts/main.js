import { guestHTML } from "./guests.js";
import { areasHTML } from "./areas.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list details__guests">
        ${guestHTML()} 
</section>
<section class="detail--column list details__guests">
        ${areasHTML()} 
</section>`

mainContainer.innerHTML = applicationHTML