import { User } from './models/User'

const user = new User({ name: 'Bob', age: 20 })

user.save()
