import React from 'react'
import { useSelector } from 'react-redux'
import LoginHeader from '../components/LoginHeader/LoginHeader'

function AdminScreen() {
  const userLogIn = useSelector((state) => state.userLogIn)

  const { userInfo } = userLogIn

  const isAdmin = userInfo.isAdmin

  return (
    <>
      <LoginHeader />
      {isAdmin ? (
        <>
          <div className="mng-product-area">
            <div className="area-header">
              <h4>Give Your Feedback</h4>
            </div>
            <div className="main">
              <div className="all-products-area">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mng-product-area">
          <div className="area-header">
            <h4>Admin</h4>
          </div>
          <div className="main">
            <div className="all-products-area">
              <h1>You Are Not Admin :)</h1>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AdminScreen
