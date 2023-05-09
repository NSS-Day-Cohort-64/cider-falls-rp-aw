import { guestList } from "./Guests.js";
import { areaList } from "./Areas.js";
import { serviceList } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="services">
<h5 class="service--header">Come experience all we have to offer:</h5>
${serviceList()}
</section>
<div class="areas_and_guests">
<section class="areas">
${areaList()}
</section>
<aside class="guestlist">
${guestList()}
</aside>
</div>
`;





mainContainer.innerHTML = applicationHTML