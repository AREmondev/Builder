import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderList from '../components/Admin/OrderList/OrderList'
import LoginHeader from '../components/LoginHeader/LoginHeader'
import { getAllOrder } from '../action/orderAction'

function ManageOrder() {
  const dispatch = useDispatch()
  const getOrder = useSelector((state) => state.getOrder)
  const { loading, order } = getOrder

  useEffect(() => {
    dispatch(getAllOrder())
  }, [dispatch])
  return (
    <>
      <LoginHeader />
      <OrderList order={order} loading={loading} />
    </>
  )
}

export default ManageOrder
