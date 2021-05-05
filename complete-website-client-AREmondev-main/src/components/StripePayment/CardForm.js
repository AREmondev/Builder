import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createOrder } from '../../action/orderAction'

const CheckoutForm = ({ order }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      alert('Order Not Created Please Try Again')
    } else {
      console.log('[PaymentMethod]')

      dispatch(
        createOrder({
          orderItems: order,
          paymentMethod: paymentMethod.type,
          totalPrice: order.price,
        }),
      )
      alert('Order Created')
      history.push('/order-list')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button
        style={{ fontSize: '16px', marginTop: '20px' }}
        variant="primary"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </Button>
    </form>
  )
}

export default CheckoutForm
