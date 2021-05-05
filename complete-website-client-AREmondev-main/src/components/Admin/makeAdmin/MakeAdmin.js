import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../action/userAction'
import UserList from './UserList'

function MakeAdmin() {
  const dispatch = useDispatch()

  const getAllUser = useSelector((state) => state.getAllUser)

  const { users } = getAllUser
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
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
                <th>User Name</th>
                <th>Email</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserList key={user._id} user={user} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default MakeAdmin
