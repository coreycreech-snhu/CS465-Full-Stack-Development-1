const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}
//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf-8'));

// const travel2 = async function (req, res, next) {
//     console.log('TRAVEL CONTROLLER BREGIN');
//     await fetch(tripsEndpoint, options)
//             .then((res) => res.json())
//             .then((json) => {
//                 res.render("travel", {title: "Travlr Getaways", trips: json, message});
//             })
//             .catch((err) => res.status(500).send(err.message));
// }

 const travel = async (req, res, next) => {
    try {
      // Simulate fetching data from an external API
      const response = await fetch(tripsEndpoint);
      const json = await response.json();
  
      // Render the view with the fetched data
      res.render('travel', {title: "Travlr Getaways", trips: json});
    } catch (error) {
      console.error('Error fetching data:', error);
      // Pass the error to the next middleware (error handling middleware)
      next(error); 
    }
  };

 /* GET travel view */
// const travel = (req, res) => {
//     res.render('travel', {title: "Travlr Getaways", trips})
// }

module.exports = {
    travel
}