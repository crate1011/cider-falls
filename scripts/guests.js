import { getGuests } from "./database.js";

const guests = getGuests()
//create a function that stores a string var
//itterates through guests and interpolates a string
//returns interpolated string
export const guestHTML = () => {

    let guestList = `<div class="guest_aside"><hi class+"guest_list">Guest List<hi/>`

    for (const guest of guests) {
        guestList += `<ul class="guest">${guest.name}</ul>`
    }
    guestList += `</div>`
    
    return guestList
}