// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", async (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));

    const announcements = await db.Announcements.findAll({}).then(
      dbAnnouncements => {
        return dbAnnouncements.map(announcement => {
          return announcement.toJSON();
        });
      }
    );

    const quotes = await db.Quotes.findAll({}).then(dbQuotes => {
      return dbQuotes.map(quote => {
        return quote.toJSON();
      });
    });

    const birthdays = await db.Birthdays.findAll({}).then(dbBirthdays => {
      return dbBirthdays.map(birthday => {
        return birthday.toJSON();
      });
    });

    const reminders = await db.Reminders.findAll({}).then(dbReminders => {
      return dbReminders.map(reminder => {
        return reminder.toJSON();
      });
    });

    const roles = await db.Roles.findAll({}).then(dbRoles => {
      return dbRoles.map(role => {
        return role.toJSON();
      });
    });

    const events = await db.Events.findAll({}).then(dbEvents => {
      return dbEvents.map(event => {
        return event.toJSON();
      });
    });

    const toDos = await db.ToDos.findAll({}).then(dbToDos => {
      return dbToDos.map(toDo => {
        return toDo.toJSON();
      });
    });

    console.log(
      announcements,
      quotes,
      birthdays,
      reminders,
      roles,
      events,
      toDos
    );

    res.render("index", {
      announcements,
      quotes,
      birthdays,
      reminders,
      roles,
      events,
      toDos
    });
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
