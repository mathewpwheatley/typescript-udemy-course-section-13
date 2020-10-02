import { Eventing } from './Eventing'
import { Sync } from './Sync'

// Type interface for user properties
export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'

// User class
export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
}
