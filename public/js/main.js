const socket = io.connect("https://project-2-group-3.herokuapp.com/");

socket.on("messageSent", message => {
  $.notify(
    "New Notification\n" + message.subject + "\n\nFrom: " + message.name,
    {
      className: "success"
    }
  );
});
