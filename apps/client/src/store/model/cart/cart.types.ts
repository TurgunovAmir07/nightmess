export interface IProduct {
  id: number
  name: string
  price: number
  img: string
}

export interface ICartItem {
  id: number
  product: IProduct
  quantity: number
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus'
}

export interface ICartInitialState {
  items: ICartItem[]
}
