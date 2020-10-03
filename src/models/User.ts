import { Model } from './Model'
import { Attributes } from './Attributes'
import { ApiSync } from './ApiSync'
import { Eventing } from './Eventing'

// Type interface for user properties
export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'

// User class
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
}
