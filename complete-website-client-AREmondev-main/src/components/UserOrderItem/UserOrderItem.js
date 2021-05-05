import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function UserOrderItem({ item }) {
  const myOrder = item.orderItems[0]
  return (
    <Col style={{ marginBottom: '22px' }} lg={4} md={6}>
      <Card>
        <Card.Body>
          <Card.Title style={{ marginBottom: '25px' }}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>{myOrder.name}</h5>
              <Button
                disabled
                variant={item.status === 'success' ? 'primary' : 'danger'}
              >
                {item.status}
              </Button>
            </div>
          </Card.Title>
          <Card.Text>{myOrder.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default UserOrderItem
