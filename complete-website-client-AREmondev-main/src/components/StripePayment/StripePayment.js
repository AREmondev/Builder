import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CardForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51IkYwQLfTUZak8Ghf9BaqOonpbrR9Z3PBjWEjLuTp39sQ9nc7mV97ImBwwqSrA2wfatnmcIHNb3o8DXnP4jH0TQR00NDn3gyTp',
)

const StripePayment = ({ order }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
  )
}
export default StripePayment
