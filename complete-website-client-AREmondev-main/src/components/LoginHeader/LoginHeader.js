import React from 'react'
import { useSelector } from 'react-redux'
// import { NavLink } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './LoginHeader.css'
function LoginHeader() {
  const userLogIn = useSelector((state) => state.userLogIn)
  // useEffect(() => {
  //   dispatch(ServicesList())
  // }, [dispatch])
  const { userInfo } = userLogIn

  const isAdmin = userInfo.isAdmin

  return (
    <div className="admin-header-area">
      <div className="adminNav" sm={3}>
        <div className="site-logo">
          <h3>
            <Link to="/">Builder</Link>
          </h3>
        </div>
        <ul className="admin-nav-menu">
          {isAdmin ? (
            <>
              {' '}
              <li>
                <NavLink to="/manageorder">Order List</NavLink>
              </li>
              <li>
                <NavLink to="/addservice">Add Service</NavLink>
              </li>
              <li>
                <NavLink to="/makeadmin">Make Admin </NavLink>
              </li>
              <li>
                <NavLink to="/manageservice">Manage Service </NavLink>
              </li>
            </>
          ) : (
            <>
              {' '}
              <li>
                <NavLink active to="/order">
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/order-list">Order List</NavLink>
              </li>
              <li>
                <NavLink to="/review">Review</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default LoginHeader
