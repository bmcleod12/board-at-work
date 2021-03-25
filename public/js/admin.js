const dropdownButtons = document.querySelectorAll(".dropdownContent");

dropdownButtons.forEach(element => {
  return element.addEventListener("click", menuSelect);
});

function menuSelect(event) {
  const clickId = event.currentTarget.getAttribute("data-id");
  const category = document.querySelector("#" + clickId);

  category.classList.remove("hidden");

  console.log(clickId);
}
