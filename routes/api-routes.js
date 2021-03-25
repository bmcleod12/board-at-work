// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // GET route for getting all of the announcements
  // findAll returns all entries for a table when used with no options
  app.get("/api/announcements", (req, res) => {
    db.Announcements.findAll({}).then(dbAnnouncements => {
      res.json(dbAnnouncements);
    });
  });

  app.get("/api/quotes", (req, res) => {
    db.Quotes.findAll({}).then(dbQuotes => {
      res.json(dbQuotes);
    });
  });

  app.get("/api/birthdays", (req, res) => {
    db.Birthdays.findAll({}).then(dbBirthdays => {
      res.json(dbBirthdays);
    });
  });

  app.get("/api/reminders", (req, res) => {
    db.Reminders.findAll({}).then(dbReminders => {
      res.json(dbReminders);
    });
  });

  app.get("/api/roles", (req, res) => {
    db.Roles.findAll({}).then(dbRoles => {
      res.json(dbRoles);
    });
  });

  app.get("/api/events", (req, res) => {
    db.Events.findAll({}).then(dbEvents => {
      res.json(dbEvents);
    });
  });

  app.get("/api/todos", (req, res) => {
    db.ToDos.findAll({}).then(dbToDos => {
      res.json(dbToDos);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //Post Announcement
  app.post("/api/:catergorie", (req, res) => {
    console.log(req.params);
    switch (req.params.catergorie) {
      case "announcement":
        createAnnouncement(req, res);
        break;

      default:
        break;
    }
  });
  function createAnnouncement(req, res) {
    db.Announcements.create(req.body).then(dbAnnouncements => {
      res.json(dbAnnouncements);
    });
  }
};
