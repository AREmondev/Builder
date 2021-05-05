import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { dltServicesList, ServicesList } from '../../../action/servicesAction'

function ManageService() {
  const dispatch = useDispatch()
  const allServices = useSelector((state) => state.allServices)
  useEffect(() => {
    dispatch(ServicesList())
  }, [dispatch])
  const dltService = (id) => {
    dispatch(dltServicesList(id))
    alert('Services Deleted')
  }
  const { services } = allServices

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
                <th>Service Name</th>
                <th>Price</th>
                <th>desc</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id}>
                  <td>{service.name}</td>
                  <td>{service.price}</td>
                  <td>{service.description.slice(0, 30)}</td>
                  <td>
                    <Button
                      onClick={(e) => dltService(service._id)}
                      className="dlt-btn"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ManageService
