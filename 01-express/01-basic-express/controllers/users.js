// Users
const getUsersHandler = (req, res) => {
    res.send('Get user route');
  }
  
const postUsersHandler = (req, res) => {
    res.send('Post users route');
}
  
const getSingleUserHandler = (req, res) => {
    res.send(`Get comment route. UserId ${req.params.userId}`)
}

module.exports = {
    getUsersHandler,
    postUsersHandler,
    getSingleUserHandler
}