import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
function Hero() {
  return (
    <section id="home" class="hero-area">
      <div class="container">
        <div class="wrapper">
          <div class="hero-title wow animate__fadeIn" data-wow-duration="1.5s">
            <h1>Find Your New Modern Apartment</h1>
            <form class="input-form inline-center">
              <label for="search">
                <i class="fas fa-search"></i>
              </label>
              <input type="text" placeholder="Search locations" id="search" />
              <Link to="/" class="input-btn">
                Search
              </Link>
            </form>
          </div>
          <div class="hero-img wow animate__fadeIn" data-wow-duration="1.5s">
            <div class="contact-info inline-center">
              <div class="phone">
                <i class="fas fa-phone-alt"></i>
                <Link to="/" class="mobile-number">
                  (000) 123-4567
                </Link>
              </div>
              <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                <Link to="/" class="location">
                  Melbourne,Australia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
