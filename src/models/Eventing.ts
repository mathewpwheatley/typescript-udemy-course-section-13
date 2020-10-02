// Type alias for a function
type Callback = () => void

export class Eventing {
  events: { [key: string]: Callback[] } = {}

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
