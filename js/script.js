"use strict";

// xml https request
let users = document.getElementById("div-users");
let companyName = document.getElementById("div-name");
let request = new XMLHttpRequest();

request.open("GET", "https://reqres.in/api/unknown");
request.addEventListener("load", function () {
  let responseText = this.response;
  let responseJs = JSON.parse(responseText);

  let ul = document.createElement("ul");
  responseJs.data.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = `${element.name} ${element.color}`;
    li.style.color = element.color;
    ul.appendChild(li);
  });
  users.appendChild(ul);
});
request.send();
request.addEventListener("error", function () {
  let pError = document.createElement("p");
  pError.textContent = "server error";
  users.appendChild(pError);
});

// fetch
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
})
  .then(function (response) {
    if (!response.ok) {
      throw response.status;
    }
    return response.json();
  })
  .then(function (response2) {
    response2.forEach((item) => {
      let p2 = document.createElement("p");
      p2.innerText = item.company.name;
      companyName.appendChild(p2);
    });
  })
  .catch(function (error) {
    if (error !== 200) {
      let p3 = document.createElement("p");
      p3.innerText = "page not found";
      companyName.appendChild(p3);
    }
  });
