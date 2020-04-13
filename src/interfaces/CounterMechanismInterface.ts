export default interface CounterMechanismInterface {
  handleIncremet: () => void
  handleDecrement: () => void
  handleChange: (e: any) => void
  incrementDisable: boolean
  decrementDisable: boolean
  counter: number
}
