import React from 'react'
import { Table } from 'react-bootstrap'
import OrderService from './OrderService'

function OrderList({ order, loading }) {
  return (
    <div className="mng-product-area">
      <div className="area-header">
        <h4>Manage Product</h4>
      </div>
      <div className="main">
        <div className="all-products-area">
          <Table>
            <thead className="products-title">
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                order.map((ordr) => <OrderService ordr={ordr} />)
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default OrderList
