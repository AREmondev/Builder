import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { UpdateOneUser } from '../../../action/userAction'

function UserList({ user }) {
  const [userRoll, setUserRoll] = useState(user.isAdmin)
  const dispatch = useDispatch()

  const handleUpdate = (e) => {
    const inputValue = e.target.value

    dispatch(UpdateOneUser(user._id, inputValue))
    setUserRoll(inputValue)
  }
  return (
    <>
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <Form.Control as="select" onChange={(e) => handleUpdate(e)}>
            <option value={`${userRoll}`} key="success">
              {`${userRoll}`}
            </option>
            {userRoll === false ? (
              <option value={true} key="success">
                true
              </option>
            ) : (
              <option value={false} key="success">
                false
              </option>
            )}
          </Form.Control>
        </td>
      </tr>
    </>
  )
}

export default UserList
