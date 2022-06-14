const database = {
    areas: [{
        areaId: 1,
        name: "Chamfort River",
        location: "northeast"
    },
    {
        areaId: 2,
        name: "Lost Wolf Hiking Trail",
        location: "northern"
    }, 
    {
        areaId: 3,
        name: "Lodge",
        location: "northwest"
    },
    {
        areaId: 4,
        name: "Gander River",
        location: "southwest"
    },
    {
        areaId: 5,
        name: "Campgrounds",
        location: "southern"
    },
    {
        areaId: 6,
        name: "Pine Bluffs Trails",
        location: "southeast"
    }],
    guests: [{
        Id: 1,
        name: "Alphonse Meron",
        areaId: 1
    }, {
        id: 2,
        name: "Damara Pentecust",
        areaId: 2
    }, {
        id: 3,
        name: "Anna Bowton",
        areaId: 3
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        areaId: 4
    }, {
        id: 5,
        name: "Elmira Bick",
        areaId: 5
    }, {
        id: 6,
        name: "Bernie Dreger",
        areaId: 6
    }, {
        id: 7,
        name: "Rolando Gault",
        areaId: 1
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        areaId: 2
    }, {
        id: 9,
        name: "Tomlin Cutill",
        areaId: 3
    }, {
        id: 10,
        name: "Arv Biddle",
        areaId: 4
    }, {
        id: 11,
        name: "frodo baggins",
        areaId: 5
    }, {
        id: 12,
        name: "aragorn Elessar",
        areaId: 6
    }],
    services: [{
        id: 1,
        name: "rafting"
    }, {
        id: 2,
        name: "canoeing"
    }, {
        id: 3,
        name: "fishing"
    }, {
        id: 4,
        name: "hiking"
    }, {
        id: 5,
        name: "picnicking"
    }, {
        id: 6,
        name: "rock climbing"
    }, {
        id: 7,
        name: "lodging"
    }, {
        id: 8,
        name: "parking"
    }, {
        id: 9,
        name: "information"
    }, {
        id: 10,
        name: "zip lines"
    }],
    areaServices: [{
        id: 1,
        areaId:1,
        serviceId:1
    }, {
        id: 2,
        areaId:1,
        serviceId:2
    }, {
        id: 3,
        areaId: 1,
        serviceId: 3
    }, {
        id: 4,
        areaId: 2,
        serviceId: 4
    }, {
        id: 5,
        areaId: 2,
        serviceId: 5
    }, {
        id: 6,
        areaId: 2,
        serviceId: 6
    }, {
        id: 7,
        areaId: 3,
        serviceId: 7
    }, {
        id: 8,
        areaId: 3,
        serviceId: 8
    }, {
        id: 9,
        areaId: 3,
        serviceId: 9
    }, {
        id: 10,
        areaId: 3,
        serviceId: 5
    },{
        id: 11,
        areaId: 4,
        serviceId: 3
    }, {
        id: 12,
        areaId: 4,
        serviceId: 4
    }, {
        id: 13,
        areaId: 5,
        serviceId: 9
    }, {
        id: 14,
        areaId: 5,
        serviceId: 7
    }, {
        id: 15,
        areaId: 5,
        serviceId: 8
    }, {
        id: 16,
        areaId: 6,
        serviceId: 4
    }, {
        id: 17,
        areaId: 6,
        serviceId: 5
    }, {
        id: 18,
        areaId: 6,
        serviceId: 10
    }]
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAreaService = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}