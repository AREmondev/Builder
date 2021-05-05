import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ServicesList } from '../../action/servicesAction'
import './Services.css'
import SingleService from './SingleService'

function Services() {
  const dispatch = useDispatch()
  const allServices = useSelector((state) => state.allServices)
  useEffect(() => {
    dispatch(ServicesList())
  }, [dispatch])
  const { services } = allServices

  return (
    <Container>
      <div
        style={{ paddingTop: '60px' }}
        class="title wow animate__fadeInLeft"
        data-wow-duration="1.5s"
      >
        <h2 class="section-title">Our Services</h2>
        <div class="subtitle">
          <p>
            In this space market-facing, yet UI work flows , or bake it in. Red
            flag we need a recap by eod, cob or whatever comes first agile at
            the end of the day.{' '}
          </p>
        </div>
      </div>
      <Row>
        {services.map((service, index) => (
          <SingleService index={index} key={service._id} service={service} />
        ))}
      </Row>
    </Container>
  )
}

export default Services
