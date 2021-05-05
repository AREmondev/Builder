import React from 'react'
import { useHistory } from 'react-router-dom'

function SingleService({ service, index }) {
  const history = useHistory()
  const handelOrder = (data) => {
    history.push(`/order/service?id=${data._id}`)
  }
  return (
    <div
      onClick={() => handelOrder(service)}
      class="col-lg-4 service_item  col-md-6"
    >
      <div class="work-card  wow animate__fadeInUp">
        <span class="work-number">{index + 1}</span>
        <img className="service_img" src={service.image} alt={service.name} />

        <h5 className="service_name">
          <span>0{index + 1}</span>
          {service.name}
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <p>{service.name}</p>
          <div className="service-price">${service.price}</div>
        </div>
      </div>
    </div>
  )
}

export default SingleService
