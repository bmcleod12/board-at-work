const dropdownButtons = document.querySelectorAll(".dropdownContent");

dropdownButtons.forEach(element => element.addEventListener("click",menuSelect));

function menuSelect (event) {
var clickId = event.currentTarget.getAttribute("data-id");
var category = document.querySelector("#" +clickId);

    category.classList.remove("hidden");

console.log(clickId);
}

