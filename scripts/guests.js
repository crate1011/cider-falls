import { getGuests } from "./database";

guestArray = getGuests()

export const guestHTML = () => {

    let guestList = `<div class="guest_aside"><hi class+"guest_list">Guest List<hi/>`

    for (const guest of guestArray) {
        guestList += `<ul class="guest">${guest.name}</ul>`
    }
    guestList += `</div>`
    
    return guestList
}