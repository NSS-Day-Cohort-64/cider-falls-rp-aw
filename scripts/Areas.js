// Import areas, sevices, supportedServices, and guests


// Store copy of areas, services, supportedServices, and guests




/* Define a function called findServices that takes in one area and the supportedServices array,
   and returns an array of the matching service bridges. */
const findSupportedServices = (areaObject, supportedServicesArray) = {
    // Define an empty array

    // Iterate through supportedServices array

        // Check if areaObject.id === supportedService.areaId

            // push supportedService to array

    // Return array

}

/* Define a function whose job it is to find a matching service. It will take in 2 parameters:
   one of the supportedService objects and the array of services. */
const findServicesForThisArea = (supportedServiceObject, servicesArray) => {
    // define an empty string

    // Iterate through the services array

        // Check if supportedServiceObject.serviceId === service.id 

            // set string equal to service.description
    
            // Return string

}


/* Define and export a function that builds an HTML list of area names 
and their provided services. */
export const areaList = () => {
    // Define html string with <div> opening tag

    // Iterate through areas array (for area of areas)

        // Define empty array that will hold the services for each area called servicesForThisArea

        // invoke and store findSupportedServices(area, supportedServices) as serviceMatches

        // Iterate through serviceMatches

            // invoke and store findServicesForThisArea(serviceMatch, services) as addService

            // add 'addService' to the servicesForThisArea array

        // Append html string with the main attraction name and data attributes for type and id <h3></h3>

        // Append html string with <ul> tag

        // Iterate through the servicesForThisArea array
        
            // Append html with each service as a <li></li>

        // Append html string with </ul>

    // Return html string

}
    