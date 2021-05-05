import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddServicesList } from '../../../action/servicesAction'
import './AddServices.css'
function AddServices() {
  const [name, setName] = useState()
  const [desc, setDesc] = useState()
  const [price, setPrice] = useState()
  const [img, setImg] = useState()
  const handleImgFile = (e) => {
    const imgData = new FormData()
    imgData.set('key', 'f7f7f557e9e948e808c9ac2bf760a395')
    imgData.append('image', e.target.files[0])
    axios
      .post('https://api.imgbb.com/1/upload', imgData)
      .then((data) => setImg(data.data.data.url))
  }
  const dispatch = useDispatch()
  const handleService = (name, img, price, desc) => {
    try {
      dispatch(
        AddServicesList({
          name: name,
          image: img,
          price: price,
          description: desc,
        }),
      )
      setName('')
      setDesc('')
      setPrice('')
      setImg('')
      alert('Service Created')
    } catch (error) {}
  }

  return (
    <div className="mng-product-area">
      <div className="area-header">
        <h4>Manage Product</h4>
      </div>
      <div className="main">
        <Form className="add-form-area">
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="name">Service Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="serviceName"
                  id="name"
                  className="border"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="description">Service Description</label>
                <input
                  onChange={(e) => setDesc(e.target.value)}
                  type="text"
                  name="description"
                  id="description"
                  className="border"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  name="servicePrice"
                  id="price"
                  className="border"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <input
                  onChange={handleImgFile}
                  type="file"
                  name="serviceImg"
                  id="file"
                  files={img}
                />
              </div>
            </Col>
          </Row>
        </Form>
        <Button
          onClick={() => handleService(name, img, price, desc)}
          style={{ margin: '15px 0 0 auto', display: 'table' }}
          className="main-btn"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default AddServices
