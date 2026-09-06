question => when we get a user document from our MongoDB how it gives us, array in object or an object

and if it gives an object the why we use loggedInUser[key];
const loggedInUser = req.user;
Object.keys(req.body).forEach((key) => loggedInUser[key] = req.body[key]);