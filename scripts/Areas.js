// Import areas, sevices, supportedServices, and guests
import {
  getAreas,
  getServices,
  getGuests,
  getSupportedServices,
} from "./database.js";

// Store copy of areas, services, supportedServices, and guests
const areas = getAreas();
const services = getServices();
const guests = getGuests();
const supportedServices = getSupportedServices();

/* Add a click event listener that displays the number of guests at each area
   when the area name is clicked */
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  // Check if item clicked is an area list item
  if (itemClicked.dataset.type === "area") {
    // Set a default counter
    let areaId = itemClicked.dataset.id
    let counter = 0;
    // Iterate through guests array
    for (const guest of guests) {
      // Check if guest.areaId foreign key matches the id of the clicked area
      if (guest.areaId === parseInt(areaId)) {
        // Add +1 to the counter
        counter++;
      }
    }
    // Make an alert that says `There are ${counter} guests in this area`
    window.alert(`There are ${counter} guests in this area`);
  }
});

/* Define a function called findServices that takes in one area and the supportedServices array,
   and returns an array of the matching service bridges. */
const findSupportedServices = (areaObject, supportedServicesArray) => {
  // Define an empty array
  let serviceMatches = [];
  // Iterate through supportedServices array
  for (let supportedService of supportedServicesArray) {
    // Check if areaObject.id === supportedService.areaId
    if (areaObject.id === supportedService.areaId) {
      // push supportedService to array
      serviceMatches.push(supportedService);

      // Return array
    }
  }
  return serviceMatches;
};

/* Define a function whose job it is to find a matching service. It will take in 2 parameters:
   one of the supportedService objects and the array of services. */
const findServicesForThisArea = (supportedServiceObject, servicesArray) => {
  // define an empty string
  let addService = "";
  // Iterate through the services array
  for (const service of servicesArray) {
    // Check if supportedServiceObject.serviceId === service.id
    if (supportedServiceObject.serviceID === service.id) {
      // set string equal to service.description
      addService = service.name;
      // Return string
      return addService;
    }
  }
};

/* Define and export a function that builds an HTML list of area names 
and their provided services. */
export const areaList = () => {
  // Define html string with <div> opening tag
  let areahtml = "<div>";
  // Iterate through areas array (for area of areas)
  for (const area of areas) {
    // Define empty array that will hold the services for each area called servicesForThisArea
    let servicesForThisArea = [];
    // invoke and store findSupportedServices(area, supportedServices) as serviceMatches
    let serviceMatches = findSupportedServices(area, supportedServices);
    // Iterate through serviceMatches
    for (const serviceMatch of serviceMatches) {
      // invoke and store findServicesForThisArea(serviceMatch, services) as addService
      let addService = findServicesForThisArea(serviceMatch, services);
      // add 'addService' to the servicesForThisArea array
      servicesForThisArea.push(addService);
    }
    // Append html string with the main attraction name and data attributes for type and id <h3></h3>
    areahtml += `<h3 data-type="area" data-id="${area.id}">${area.mainAttraction}</h3>`;
    // Append html string with <ul> tag
    areahtml += "<ul>";
    // Iterate through the servicesForThisArea array
    for (const service of servicesForThisArea) {
      // Append html with each service as a <li></li>
      areahtml += `<li>${service}</li>`;
    }
    areahtml += `</ul>`
  }
  // Append html string with </ul>
  areahtml += "</div>";
  // Return html string
  return areahtml;
};
