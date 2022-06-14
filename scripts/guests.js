import { getGuests } from "./database.js";

const guests = getGuests()
//create a function that stores a string var
//itterates through guests and interpolates a string
//returns interpolated string
export const guestHTML = () => {

    let guestList = `<div class="guest_aside"><h1 class="guest_list">Guest List</h1><ul>`

    for (const guest of guests) {
        guestList += `<li class="guest">${guest.name}</li>`
    }
    guestList += `</ul></div>`
    
    return guestList
}