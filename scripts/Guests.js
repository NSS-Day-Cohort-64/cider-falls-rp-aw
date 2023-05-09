import { getGuests } from "./database.js";

const guests = getGuests();

export const guestList = () => {
  let guestHtml = `<ul class="the-guests"><h3>Guests List</h3>`;

  for (const guest of guests) {
    guestHtml += `<li>
                    ${guest.name}
                    </li>`;
  }
  guestHtml += "</ul>";

  return guestHtml;
};
