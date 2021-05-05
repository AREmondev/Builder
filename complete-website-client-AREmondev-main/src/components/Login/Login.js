import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { logIn } from '../../action/userAction.js'
import FormContainer from '../FormContainer/FormContainer'
import Header from '../Header/Header.js'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()

  let { from } = location.state || { from: { pathname: '/' } }

  function redirectAuth(auth) {
    history.push(auth)
  }

  const handelLogIn = (e) => {
    e.preventDefault()
    dispatch(logIn(email, password, redirectAuth, from))
  }

  return (
    <>
      <Header />
      <div className="div" style={{ marginTop: '75px' }}>
        <FormContainer>
          <h2 style={{ marginBottom: '20px' }}>Sign In</h2>
          <Form onSubmit={handelLogIn}>
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
                placeholder="Enter Email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Log In
            </Button>
          </Form>
          <p className="mt-3">
            Don't Have any account
            <Link style={{ color: 'green', fontWeight: 'bold' }} to="/signup">
              {' '}
              Sign Up
            </Link>
          </p>
        </FormContainer>
      </div>
    </>
  )
}

export default Login
