import { getAreas } from "./database.js";
import { filteredArea } from "./services.js";
import { filteredAreas } from "./services.js";

const areas = getAreas()
//create a function that stores a string value of html
//itterates through areas and returns interpolated string

export const areasHTML = () => {
    let areaList = `<div class="areaList">`
    for (const area of areas) {
        areaList += `<article id="area--${area.areaId}" class="area__card"><h2>${area.name}</h2>`
        const filteredAreaFunc = filteredArea(area)
        const finalAreaFilter = filteredAreas(filteredAreaFunc)
        areaList += finalAreaFilter
        areaList += "</article>"
    }
    areaList += "</div>"
    return areaList
}