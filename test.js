
const Users = require('./server/models/user')
const Links = require('./server/models/link')
const Sessions = require('./server/models/session')


// Allowing enough time for DB to get setup
setTimeout(() => {

  // Users.getAll()
  //   .then(users => {
  //     console.log("Users: ", users)
  //   })

  Sessions.create()
    .then(metadata  => {
      const rowId = metadata.insertId

      console.log(metadata)

      Sessions.get({ id: rowId })
        .then(actualRowData => {
          console.log(actualRowData)
        })
    })

  // Users
  //   .create({
  //     username: "Vivek Nair 3",
  //     password: "catherine123"
  //   })
  //   .then(user => {
  //     console.log("user", user)
  //   })



}, 1000)
