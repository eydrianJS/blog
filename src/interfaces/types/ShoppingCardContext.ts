import ProductInterface from '../ProductInterface'

type ShoppingCardContextInterface = [ProductInterface[], (newState: ProductInterface[]) => void]

export default ShoppingCardContextInterface
