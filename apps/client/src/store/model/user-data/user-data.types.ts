export interface IUserDataInitialState {
  userData: {
    email: string
    tel: string
    city: string
    delivery: string
    location: string
    client: string
    telegram: string
  }
}

export interface IUserDataPayload {
  email: string
  tel: string
  city: string
  delivery: string
  location: string
  client: string
  telegram: string
}
