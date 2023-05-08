// Import areas, services, supportedServices, and guests


// Store a local copy of areas, services, supportedServices, and guests

// Add a click event listener to display all of the areas that offer a service
document.addEventListener(
   "click",
   (clickEvent) => {
       const itemClicked = clickEvent.target
       // Check if item clicked is service list item

         // Define an empty array called whereServicesAre that will hold the areas where services are offered

         // Iterate supportedServices array

            // Iterate areas array

               /* Check if the clicked service id === foreign serviceID key in supportedServices
                  AND if foreign areaID key in supportedServices === area.id */ 

                  // Push the area mainAttraction to the array

         // Define a beginning string called messageString that says `${itemClicked.dataset.name} is available in`

         // Iterate through the whereServicesAre array

            // Check if one item in whereServicesAre array

               // Add `whereServicesAre[0]` to the messageString

            // Check if two items in whereServicesAre array

               // Add `whereServicesAre[0] and whereServicesAre[1]` to the messageString

            // Check if multiple items in whereServicesAre array

               // iterate through array with regular for loop

                  // Check if (index < whereServicesAre.length - 1)

                     // add all but the last area to messageString `whereServicesAre[index], `

                  // else, add last area to messageString `and whereServicesAre[index]`

            // Check if no items are in the array

               // Reset the value of messageString to `This service is not currently offered in the park`

         // Make a window alert to display messageString
         
   }
)

/* Export a function whose job it is to build an html list of all of the services offered.
   The services will need data attributes for type, id, and name. */
export const serviceList = () => {
   // Set a default html list with <ul> opening tag

   // Iterate through services array

      // Append html with list item of each service name and data attributes for type, id, and name

   // Append html string with closing ul tag

   // Return html list

}