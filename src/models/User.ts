// Type interface for user properties
interface UserProps {
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
}
