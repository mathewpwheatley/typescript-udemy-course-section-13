import { User } from './models/User'

const user = new User({, name: "Bob" })

user.on('save', () => {
  console.log(user)
})

user.save()
