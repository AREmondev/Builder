import React from 'react'
import offer1 from '../img/offer1.jpg'
import offer2 from '../img/offer2.jpg'
import offer3 from '../img/offer3.jpg'
import offer4 from '../img/offer4.jpg'
import offer5 from '../img/offer5.jpg'
import offer6 from '../img/offer6.jpg'
import meta1 from '../img/meta1.svg'
import meta from '../img/meta.svg'
import { Link } from 'react-router-dom'

function Feature() {
  return (
    <section class="offers-area" id="apartment">
      <div class="container">
        <div class="title wow animate__fadeInLeft" data-wow-duration="1.5s">
          <h2 class="section-title">More Then 500+ Appartments For Rent</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column wow animate__fadeInUp"
              data-wow-duration="1.5s"
            >
              <div class="cart-img">
                <img src={offer1} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h5>Random Street, Apt B453, New York</h5>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <span class="price">$3500</span>
                  <div class="cart-info-category">
                    <span class="mr-3">
                      <img src={meta1} alt="Bathroom img" />
                      2BA
                    </span>
                    <span>
                      <img src={meta} alt="bed img" />
                      2BD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column wow animate__fadeInUp"
              data-wow-duration="1.55s"
            >
              <div class="cart-img">
                <img src={offer2} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h5>Random Street, Apt B453, New York</h5>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <span class="price">$3500</span>
                  <div class="cart-info-category">
                    <span class="mr-3">
                      <img src={meta1} alt="Bathroom img" />
                      2BA
                    </span>
                    <span>
                      <img src={meta} alt="bed img" />
                      2BD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column wow animate__fadeInUp"
              data-wow-duration="1.6s"
            >
              <div class="cart-img">
                <img src={offer3} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h5>Random Street, Apt B453, New York</h5>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <span class="price">$3500</span>
                  <div class="cart-info-category">
                    <span class="mr-3">
                      <img src={meta1} alt="Bathroom img" />
                      2BA
                    </span>
                    <span>
                      <img src={meta} alt="bed img" />
                      2BD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column wow animate__fadeInUp"
              data-wow-duration="1.65s"
            >
              <div class="cart-img">
                <img src={offer4} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h5>Random Street, Apt B453, New York</h5>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <span class="price">$3500</span>
                  <div class="cart-info-category">
                    <span class="mr-3">
                      <img src={meta1} alt="Bathroom img" />
                      2BA
                    </span>
                    <span>
                      <img src={meta} alt="bed img" />
                      2BD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column wow animate__fadeInUp"
              data-wow-duration="1.7s"
            >
              <div class="cart-img">
                <img src={offer5} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h5>Random Street, Apt B453, New York</h5>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <span class="price">$3500</span>
                  <div class="cart-info-category">
                    <span class="mr-3">
                      <img src={meta1} alt="Bathroom img" />
                      2BA
                    </span>
                    <span>
                      <img src={meta} alt="bed img" />
                      2BD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column wow animate__fadeInUp"
              data-wow-duration="1.75s"
            >
              <div class="cart-img">
                <img src={offer6} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h5>Random Street, Apt B453, New York</h5>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <span class="price">$3500</span>
                  <div class="cart-info-category">
                    <span class="mr-3">
                      <img src={meta1} alt="Bathroom img" />
                      2BA
                    </span>
                    <span>
                      <img src={meta} alt="bed img" />
                      2BD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="offer-footer inline-center">
          <form
            class="input-form inline-center wow animate__fadeInUp"
            data-wow-duration="1.5s"
          >
            <label for="search">
              <i class="fas fa-search"></i>
            </label>
            <input type="text" placeholder="Search locations" id="search" />
            <Link to="/" class="input-btn">
              Search
            </Link>
          </form>
          <Link
            to="/"
            class="view-all-btn  wow animate__fadeInUp"
            data-wow-duration="1.5s"
          >
            View All Appartments
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Feature
