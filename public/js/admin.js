const socket = io.connect("https://project-2-group-3.herokuapp.com/");

const dropdownButtons = document.querySelectorAll(".dropdownContent");

dropdownButtons.forEach(element => {
  return element.addEventListener("click", menuSelect);
});

document.getElementById("submit").onclick = () => {
  submitNotification();
};

function menuSelect(event) {
  const clickId = event.currentTarget.getAttribute("data-id");
  const category = document.querySelector("#" + clickId);

  category.classList.remove("hidden");

  console.log(clickId);
}

function submitNotification() {
  socket.emit("messageSent", {
    name: document.getElementById("name").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  });
}

socket.on("messageSent", message => {
  $.notify(
    "New Notification\n" + message.subject + "\n\nFrom: " + message.name,
    {
      className: "success"
    }
  );
});
