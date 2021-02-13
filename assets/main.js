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
  <img src="../src/img/Guardians-of-The-Galaxy.png>
  <p class="mep-user-company_name">${el.company.name}</p>
  <p class="mep-user-company_type">${el.company.bs}</p>
  </div>

  <h4 class="mep-user-sub-title"> Address </h4>
  <p class="mep-user_address">${el.address.city}, ${el.address.street}</p>
  <p class="mep-user_email">${el.email}</p>


  
`;
    users.appendChild(newDiv);
};
data.forEach(function (d) {
    createElement(d, d.id);
    console.log(d);
});
