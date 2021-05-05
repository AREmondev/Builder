import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import LoginHeader from '../components/LoginHeader/LoginHeader'
import { CreateReview } from '../action/reviewAction.js'

function ManageProduct() {
  const [description, setDescription] = useState()
  const dispatch = useDispatch()

  const handelReview = (description, name, email) => {
    dispatch(CreateReview(description, name, email))
  }
  return (
    <>
      <LoginHeader />
      <div className="mng-product-area">
        <div className="area-header">
          <h4>Give Your Feedback</h4>
        </div>
        <div className="main">
          <div className="all-products-area">
            <Form>
              <Form.Group controlId="description">
                <Form.Control
                  type="text"
                  textArea
                  placeholder="Your Feedback"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button onClick={() => handelReview(description)}>
                Submit Review
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageProduct
