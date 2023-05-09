import { guestList } from "./Guests.js";
import { areaList } from "./Areas.js";
const mainContainer = document.querySelector("#container");



const applicationHTML = `
<section class="services">

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