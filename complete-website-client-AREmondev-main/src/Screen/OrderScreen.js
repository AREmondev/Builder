import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import LoginHeader from '../components/LoginHeader/LoginHeader'
import { Link, useLocation } from 'react-router-dom'
import { SingleServicesList } from '../action/servicesAction'
import StripePayment from '../components/StripePayment/StripePayment'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
function OrderScreen() {
  const dispatch = useDispatch()
  const singleService = useSelector((state) => state.singleService)
  const userLogin = useSelector((state) => state.userLogIn)
  const { userInfo } = userLogin
  const query = useQuery()
  const id = query.get('id')
  useEffect(() => {
    dispatch(SingleServicesList(id))
  }, [dispatch, id])
  const { loading, service } = singleService

  return (
    <>
      <LoginHeader />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {!service ? (
            <h2>
              Please Select Service from{' '}
              <Link
                style={{ textDecoration: 'underLine', color: 'blue' }}
                to="/"
              >
                Home
              </Link>
            </h2>
          ) : (
            <>
              <div className="mng-product-area">
                <div className="area-header">
                  <h4>Your Order</h4>
                </div>
                <div className="main">
                  <div className="all-products-area">
                    <Form>
                      <Form.Group controlId="name">
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          value={userInfo.name}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Control
                          type="text"
                          placeholder="Enter Email"
                          value={userInfo.email}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="serviceName">
                        <Form.Control
                          type="text"
                          value={service.name}
                          placeholder="Enter serviceName"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="serviceName">
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="paymentMethod"
                        />
                        <label
                          style={{ marginLeft: '12px', fontSize: '16px' }}
                          htmlFor="paymentMethod"
                        >
                          Card
                        </label>
                        <p className="my-3">
                          Your Service Charge{' '}
                          <strong>$ {service.price} </strong>
                        </p>
                      </Form.Group>
                    </Form>
                    <StripePayment order={service} />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default OrderScreen
