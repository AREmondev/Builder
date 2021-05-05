import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updateOneOrder } from '../../../action/orderAction'

function OrderService({ ordr }) {
  const [status, setStatus] = useState(ordr.status)
  const dispatch = useDispatch()
  const handleUpdate = (e) => {
    const inputValue = e.target.value

    dispatch(updateOneOrder(ordr._id, inputValue))
    setStatus(inputValue)
  }
  return (
    <>
      <tr key={ordr._id}>
        <td>{ordr.orderItems[0].name}</td>
        <td>{ordr.totalPrice}</td>
        <td>{ordr.paymentMethod}</td>
        <td>
          <Form.Control as="select" onChange={(e) => handleUpdate(e)}>
            <option value={status} key="success">
              {status}
            </option>
            {status === 'pending' ? (
              <option value="success" key="success">
                Success
              </option>
            ) : (
              <option value="pending" key="success">
                Pending
              </option>
            )}
          </Form.Control>
        </td>
      </tr>
    </>
  )
}

export default OrderService
