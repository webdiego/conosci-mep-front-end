import "./main.scss";
import * as data from "../src/Resources/users.json";
const users = document.querySelector(".mep-users");
const createElement = function (el, n) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(`mep-user`);
    newDiv.innerHTML = `
  <h2 class="mep-user_name">${el.name}</h2>
  <div class="mep-user-company">
  <h4 class="mep-user-sub-title">Company </h4>
  <p class="mep-user-company_name">${el.company.name}</p>
  <p class="mep-user-company_type">${el.company.bs}</p>
  </div>

  <h4 class="mep-user-sub-title"> Address </h4>
  <p class="mep-user_address">${el.address.city}, ${el.address.street}</p>
  
  <h4 class="mep-user-sub-title"> Contact </h4>
  <p class="mep-user_email">${el.email}</p>
  <p class="mep-user_email">${el.website}</p>
  <p class="mep-user_email">${el.phone}</p>`;
    users.appendChild(newDiv);
};
data.forEach(function (el) {
    createElement(el, el.id);
    console.log(el);
});
