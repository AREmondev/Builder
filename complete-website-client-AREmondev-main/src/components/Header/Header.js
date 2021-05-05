import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../action/userAction'
import './Header.css'
function Header() {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogIn)
  const { userInfo } = userLogin
  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <Navbar
      id="navbar header"
      style={{ padding: '30px 0' }}
      class="sticky"
      expand="lg"
    >
      <Container>
        <Link className="logo" to="/">
          Builder
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-center">
            <Link className="menu-item" to="/contact">
              Contact Us
            </Link>
            <Link className="menu-item" to="/admin">
              Admin
            </Link>
            <Link className="menu-item" to="/order-list">
              Order
            </Link>
            {userInfo || (userInfo && userInfo.length > 0) ? (
              <NavDropdown
                className="ml-3 dropdown"
                title={userInfo.name}
                id="username"
              >
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/dashboard">
                  Dashboard
                </Link>

                <NavDropdown.Item onClick={handleLogOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link className="menu-item drop-item" to="/login">
                LogIn
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
