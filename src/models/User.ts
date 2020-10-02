import axios, { AxiosResponse } from 'axios'

// Type interface for user properties
interface UserProps {
  id?: number
  name?: string
  age?: number
}

// Type alias for a function
type Callback = () => void

// User class
export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    // Check there are handlers, if so run them all
    if (!handlers || handlers.length === 0) {
      return
    } else {
      handlers.forEach((callback) => {
        callback()
      })
    }
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      })
  }

  save(): void {
    const id = this.get('id')
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      // post
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}
