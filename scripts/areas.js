import { getAreas } from "./database.js";
import { filteredArea } from "./services.js";
import { filteredAreas } from "./services.js";
import { filterGuests } from "./guests.js";

const areas = getAreas()
//create a function that stores a string value of html
//itterates through areas and returns interpolated string

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [,areaId] = itemClicked.id.split("--")

            for (const area of areas) {
                if (area.areaId === parseInt(areaId)) {
                    const currentGuest = filterGuests(area)
                    window.alert(`There are ${currentGuest} guests in ${area.name}`)
                }
            }
        }
    }
)





export const areasHTML = () => {
    let areaList = `<div class="areaList">`
    for (const area of areas) {
        areaList += `<article class="area__card"><h2 id="area--${area.areaId}">${area.name}</h2>`
        const filteredAreaFunc = filteredArea(area)
        const finalAreaFilter = filteredAreas(filteredAreaFunc)
        areaList += finalAreaFilter
        areaList += "</article>"
    }
    areaList += "</div>"
    return areaList
}