// var userinfoJSON = {};


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App

// =============================================================
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing


// Moved below to data/friends.js
// =============================================================
// var surveyResults = [
//     {
//         name:"Ahmed",
//         photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         scores:[
//             5,
//             1,
//             4,
//             4,
//             5,
//             1,
//             2,
//             5,
//             4,
//             1
//           ]
//       },
//       {
//         name:"Betty",
//         photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         scores:[
//             4,
//             2,
//             4,
//             3,
//             2,
//             1,
//             3,
//             5,
//             3,
//             1
//           ]
//       }

// ];

// Data of current tables seated


// module.exports = reservations;
// module.exports = tables;
// module.exports = userinfoJSON



// // Routes Moved to htmlRoutes.js
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });
// //route that sends user to the reserve a table page
// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
// });


// Displays all current survey as a JSON object - moved to apiRoutes.js
// app.get("/api/survey", function (req, res) {
//     return res.json(survey);
// });








//Add CommentCollapse 
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
/////////////////////////////////////////////////////////