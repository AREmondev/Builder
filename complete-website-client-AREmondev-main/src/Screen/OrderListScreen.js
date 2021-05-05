import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrder } from '../action/orderAction'
import LoginHeader from '../components/LoginHeader/LoginHeader'
import UserOrderItem from '../components/UserOrderItem/UserOrderItem'

function OrderListScreen() {
  const dispatch = useDispatch()
  const userOrder = useSelector((state) => state.userOrder)
  const { loading, order } = userOrder

  useEffect(() => {
    dispatch(getUserOrder())
  }, [dispatch])
  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <LoginHeader />
          <div className="mng-product-area">
            <div className="area-header">
              <h4>Your Order List</h4>
            </div>

            <div className="main">
              <div className="all-products-area">
                <Row>
                  {order.map((item) => (
                    <UserOrderItem key={item._id} item={item} />
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default OrderListScreen
