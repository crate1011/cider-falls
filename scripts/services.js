import { getAreaService } from "./database.js"
import { getServices } from "./database.js"
import { getAreas } from "./database.js"

const areas = getAreas()
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

//create a function that itterates through services and finds matching area
export const parkServices = () => {
    let parkHTML = `<article class="serviceList">Park Services:`

    for (const service of services) {
        parkHTML += `<div class="service__card" id="service--${service.id}">${service.name}</div>`
    }
    parkHTML += `</article>`

    return parkHTML
}

//
export const filterService = (service) => {
    const serviceNames = []

    for (const areaService of areaServices) {
        if (service.id === areaService.serviceId) {
            serviceNames.push(areaService.areaId)
        }
    }
    return serviceNames
}

export const finalFilterService = (serviceNames) => {
    let serviceList = ""

    for (const serviceName of serviceNames) {
        for (const area of areas) {
            if (area.areaId === serviceName) {
                serviceList += ` - ${area.name}`
            }
        }
    }
    return serviceList
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    const areaIds = filterService(service)
                    const areaNames = finalFilterService(areaIds)
                    window.alert(`${service.name} is available in ${areaNames}.`)
                }
            }
        }
    }
)