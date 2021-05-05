import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AllReview } from '../../action/reviewAction'
import Rating from '../Rating/Rating'
import './Review.css'
function Review() {
  const dispatch = useDispatch()

  const getAllReview = useSelector((state) => state.getAllReview)

  useEffect(() => {
    dispatch(AllReview())
  }, [dispatch])

  const { review, success } = getAllReview

  return (
    <section className="review">
      <h2 className="title text-center mx-auto text-white ">
        Our Customer Feedback
      </h2>
      <div class="container">
        <div className="carowsel-area">
          <Carousel>
            {success ? (
              review.map((rev) => (
                <Carousel.Item>
                  <Carousel.Caption>
                    <h3>{rev.name}</h3>
                    <p>{rev.description}</p>
                    <Rating value={rev.rating} />
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            ) : (
              <h4>Review Coming Soon</h4>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Review
