import { getGuests } from "./database.js";

const guests = getGuests();

export const guestList = () => {
  let guestHtml = `<h2 class="guests--h2">Guests</h2>
  <ul class="guest--ul">`;

  for (const guest of guests) {
    guestHtml += `<li class="guest--li">
                    ${guest.name}
                    </li>`;
  }
  guestHtml += "</ul>";

  return guestHtml;
};
