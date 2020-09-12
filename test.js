
const Users = require('./server/models/user')
const Links = require('./server/models/link')


// Allowing enough time for DB to get setup
setTimeout(() => {

  // Users.getAll()
  //   .then(users => {
  //     console.log("Users: ", users)
  //   })

  // Users
  //   .create({
  //     username: "Vivek Nair 3",
  //     password: "catherine123"
  //   })
  //   .then(user => {
  //     console.log("user", user)
  //   })

  Links.getAll()
    .then(links => {
      console.log(links)
    })



}, 1000)
