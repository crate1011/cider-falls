import { guestHTML } from "./guests";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list details__guests">
        ${guestHTML()} 
</section>`

mainContainer.innerHTML = applicationHTML