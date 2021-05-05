import React from 'react'
import './Agents.css'
import agent1 from '../img/agent1.jpg'
import agent2 from '../img/agent2.jpg'
import agent3 from '../img/agent3.jpg'
import { Link } from 'react-router-dom'
function Agents() {
  return (
    <section id="agent">
      <div class="container">
        <div class="title  wow animate__fadeInLeft" data-wow-duration="1.5s">
          <h2 class="section-title">Meet Our Agents</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column  wow animate__fadeInLeft"
              data-wow-duration="1.5s"
            >
              <div class="cart-img">
                <img src={agent1} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h6>Agent</h6>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <h6 class="mr-3 agent-name">Mr. Luke Skywalker</h6>
                  <div class="cart-info-category">
                    <div class="social-contact inline-center social">
                      <Link to="/">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="/">
                        {' '}
                        <i class="fab fa-twitter"></i>
                      </Link>
                      <Link href="">
                        <i class="fas fa-basketball-ball"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column  wow animate__fadeInUp"
              data-wow-duration="1.5s"
            >
              <div class="cart-img">
                <img src={agent2} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h6>Agent</h6>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <h6 class="mr-3 agent-name">Mr. Luke Skywalker</h6>
                  <div class="cart-info-category">
                    <div class="social-contact inline-center social">
                      <Link to="/">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="/">
                        {' '}
                        <i class="fab fa-twitter"></i>
                      </Link>
                      <Link href="/">
                        <i class="fas fa-basketball-ball"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="design-cart inline-center flex-column  wow animate__fadeInRight"
              data-wow-duration="1.5s"
            >
              <div class="cart-img">
                <img src={agent3} alt="offer img" />
              </div>
              <div class="cart-info">
                <div class="cart-info-title">
                  <h6>Agent</h6>
                </div>
                <div class="cart-info-details inline-center justify-content-between">
                  <h6 class="mr-3 agent-name">Mr. Luke Skywalker</h6>
                  <div class="cart-info-category">
                    <div class="social-contact inline-center social">
                      <Link to="/">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="/">
                        {' '}
                        <i class="fab fa-twitter"></i>
                      </Link>
                      <Link href="/">
                        <i class="fas fa-basketball-ball"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agents
