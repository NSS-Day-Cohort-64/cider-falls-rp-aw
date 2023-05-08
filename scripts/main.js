import { guestList } from "./Guests.js"
const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="services"

</section>
<div class="areas_and_guests">
<section class="areas"

</section>
<aside class="guestlist">
${guestList()}
</section>
</div>
`

mainContainer.innerHTML = applicationHTML