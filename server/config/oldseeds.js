const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  await Event.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    location: {
      zipcode: '98056',
      title: 'Home',
      location: 'Renton'
    },
  });

  console.log("users seeded");

  process.exit();
});
