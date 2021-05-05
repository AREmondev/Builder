import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import FormContainer from '../FormContainer/FormContainer'
import { register } from '../../action/userAction.js'
import Header from '../Header/Header'
function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const location = useLocation()
  const history = useHistory()

  let { from } = location.state || { from: { pathname: '/' } }

  function redirectAuth(auth) {
    history.push(auth)
  }
  const dispatch = useDispatch()
  const handelSignUp = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      dispatch(register(name, email, password, redirectAuth, from))
    }
  }

  return (
    <>
      <Header />
      <div className="div" style={{ marginTop: '75px' }}>
        <FormContainer>
          <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
          <Form onSubmit={handelSignUp}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Create Account
            </Button>
          </Form>
          <p className="mt-3">
            Have any account
            <Link style={{ color: 'green', fontWeight: 'bold' }} to="/login">
              {' '}
              Log In
            </Link>
          </p>
        </FormContainer>
      </div>
    </>
  )
}

export default SignUp
