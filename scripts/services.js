import { getAreaService } from "./database.js"
import { getServices } from "./database.js"

const areaServices = getAreaService()
const services = getServices()

//create a function that finds the area id and returns an array
export const filteredArea = (area) => {
    let filteredAreaService = []

    for (const areaService of areaServices) {
        if (area.areaId === areaService.areaId)
            filteredAreaService.push(areaService.serviceId)
    }
    return filteredAreaService
}

//create a function that has a parameter of the function above and filters through to find the matching ids of area and servicearea
export const filteredAreas = (filteredServices) => {
    let areaServiceNames = "<ul>"

    for (const serviceId of filteredServices) {
        for (const service of services) {
            if (serviceId === service.id) {
                areaServiceNames += `<li class="service--${service.id}">${service.name}</li>`
            }
        }
    }
    areaServiceNames += `</ul>`
    return areaServiceNames
}