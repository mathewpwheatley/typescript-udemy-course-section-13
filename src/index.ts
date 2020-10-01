import { User } from './models/User'

const user = new User({ name: 'Bob', age: 20 })

user.on('change', () => {
  console.log('change 1')
})

user.on('change', () => {
  console.log('change 2')
})

user.on('save', () => {
  console.log('save 1')
})

user.trigger('save')
