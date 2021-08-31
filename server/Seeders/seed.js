const db = require('../config/connection');
const { User, Event } = require('../models');
const userSeeds = require('./userSeeds.json');
// const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
  try {
    await Event.deleteMany({});
    await User.deleteMany({});
    
    const userArr = await User.create(userSeeds);
    // console.log(userArr);

    const eventArr = await Event.insertMany(
      [
        {
          "title": "Brian's Event",
          "organizer" : userArr[0],
          "locationName": "Brian's Place",
          "locationAddress": "101 Brian's st.",
          "locationZipCode": "98004", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
          },
        
        {
          "title": "Max's Event",
          "organizer" : userArr[1],
          "locationName": "Max's Place",
          "locationAddress": "101 Max's st.",
          "locationZipCode": "98004", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "Andy's Event",
          "organizer" : userArr[2],
          "locationName": "Andy's Place",
          "locationAddress": "101 Andy's st.",
          "locationZipCode": "98004", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "Kent's Event",
          "organizer" : userArr[3],
          "locationName": "Kent's Place",
          "locationAddress": "101 Kent's st.",
          "locationZipCode": "98005", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "Edward's Event",
          "organizer" : userArr[4],
          "locationName": "Edward's Place",
          "locationAddress": "101 Edward's st.",
          "locationZipCode": "98005", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "Alan's Event",
          "organizer" : userArr[5],
          "locationName": "Alan's Place",
          "locationAddress": "101 Alan's st.",
          "locationZipCode": "98005", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "C.A's Event",
          "organizer" : userArr[6],
          "locationName": "C.A's Place",
          "locationAddress": "101 C.A's st.",
          "locationZipCode": "98006", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "David's Event",
          "organizer" : userArr[7],
          "locationName": "David's Place",
          "locationAddress": "101 David's st.",
          "locationZipCode": "98006", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "Donald's Event",
          "organizer" : userArr[8],
          "locationName": "Donald's Place",
          "locationAddress": "101 Donald's st.",
          "locationZipCode": "98006", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        },
        {
          "title": "Lernantino's Event",
          "organizer" : userArr[9],
          "locationName": "Lernantino's Place",
          "locationAddress": "101 Lernantino's st.",
          "locationZipCode": "98004", 
          "description": "So much Happening, lots of fun ", 
          "eventDate": "8282021",
          "eventTime": "1200"
        }
      ]
      
    );
    console.log(eventArr);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
