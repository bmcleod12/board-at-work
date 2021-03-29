$(document).ready(() => {
  const socket = io.connect("https://project-2-group-3.herokuapp.com/");

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  socket.on("messageSent", message => {
    $.notify(
      "New Notification\n" + message.subject + "\n\nFrom: " + message.name,
      {
        className: "success"
      }
    );
  });
});
