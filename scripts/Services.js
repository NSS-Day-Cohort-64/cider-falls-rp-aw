// Import areas, services, supportedServices, and guests
import { getAreas, getServices, getSupportedServices } from "./database.js"


// Store a local copy of areas, services,  and supportedServices
const services = getServices()
const areas = getAreas()
const supportedServices = getSupportedServices()

// Add a click event listener to display all of the areas that offer a service
document.addEventListener(
   "click",
   (clickEvent) => {
      const itemClicked = clickEvent.target
      // Check if item clicked is service list item
      if (itemClicked.dataset.type === 'service') {
         // Define an empty array called whereServicesAre that will hold the areas where services are offered
         let whereServicesAre = []
         // Iterate supportedServices array
         for (const supportedService of supportedServices) {
            // does the supportedService foreign id match the clicked service id?
            if (itemClicked.dataset.id === `${supportedService.serviceID}`) {
               // Iterate areas array
               for (const area of areas) {
               // AND does the supportedService foreign id match the area id?
                  if (supportedService.areaId === area.id) {
                     // Push the area mainAttraction to the array
                     whereServicesAre.push(area.mainAttraction)
                  }
               }
            }  
         }
         // Define a beginning string called messageString that says `${itemClicked.dataset.name} is available in`
         let messageString = `${itemClicked.dataset.name} is available in `
         // Check if one item in whereServicesAre array
         if (whereServicesAre.length === 1) {
            // Add `whereServicesAre[0]` to the messageString
            messageString += `${whereServicesAre[0]}`
         }
         // Check if two items in whereServicesAre array
         if (whereServicesAre.length === 2) {
            // Add `whereServicesAre[0] and whereServicesAre[1]` to the messageString
            messageString += `${whereServicesAre[0]} and ${whereServicesAre[1]}`
         }
         // Check if multiple items in whereServicesAre array
         if (whereServicesAre.length > 2) {
            // Iterate through the whereServicesAre array with regular for loop
            for (let index = 0; index < whereServicesAre.length; index++) {
               // Check if (index < whereServicesAre.length - 1)
               if (index < whereServicesAre.length -1) {
                  // add all but the last area to messageString `whereServicesAre[index], `
                  messageString += `${whereServicesAre[index]}, `
               } else { // else, add last area to messageString `and whereServicesAre[index]`
                  messageString += `and ${whereServicesAre[index]}`
               }       
            }
         }
         // Check if no items are in the array
         if (whereServicesAre.length === 0) {
            // Reset the value of messageString to `This service is not currently offered in the park`
            messageString = `This service is not currently offered in the park`
         }
         // Make a window alert to display messageString
         window.alert(messageString)
      }  
   }
)

/* Export a function whose job it is to build an html list of all of the services offered.
   The services will need data attributes for type, id, and name. */
export const serviceList = () => {
   // Set a default html list with <ul> opening tag
   let serviceHTML = `<ul class="service--ul">`
   // Iterate through services array
   for (let service of services) {
      // Append html with list item of each service name and data attributes for type, id, and name
      serviceHTML += `<li class="service--li service_highlight" data-type="service"
      data-id="${service.id}"
      data-name="${service.name}"
      >${service.name}</li>`
   }
   // Append html string with closing ul tag
   serviceHTML += `</ul>`
   // Return html list
   return serviceHTML
}