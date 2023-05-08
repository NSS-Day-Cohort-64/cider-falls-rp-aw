import { guestList } from "./Guests.js"
import { serviceList } from "./Services.js"
const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="services">
${serviceList()}
</section>
<div class="areas_and_guests">
<section class="areas">

</section>
<aside class="guestlist">
${guestList()}
</aside>
</div>
`

mainContainer.innerHTML = applicationHTML