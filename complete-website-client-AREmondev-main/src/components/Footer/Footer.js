import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footer-title">
          <form></form>
          <h2>Builder Explore Real Estate</h2>
          <form class="footer-form inline-center">
            <input
              type="text"
              placeholder="Subscribe To Our Newsletter"
              name=""
              id=""
            />
            <i class="fas fa-arrow-right"></i>
          </form>
        </div>
        <div class="row footer-link justify-content-between">
          <div class="col-md-2">
            <div class="copyright">
              <h3>Builder</h3>
              <p class="copyright-text">© 2019 - Builder, All Right Reserved</p>
            </div>
          </div>
          <div class="col-md-8">
            <div class="link row">
              <div class="col-6 footer-col col-md-3">
                <h6 class="footer-menu-link">menu</h6>
                <ul class="footer-menu">
                  <li>
                    <Link to="/">Agents</Link>
                  </li>
                  <li>
                    <Link to="/">Hunters</Link>
                  </li>
                </ul>
              </div>
              <div class="col-6 footer-col col-md-3">
                <h6 class="footer-menu-link">Company</h6>
                <ul class="footer-menu">
                  <li>
                    <Link to="/">About</Link>
                  </li>

                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                  <li>
                    <Link to="/">Social</Link>
                  </li>
                </ul>
              </div>
              <div class="col-6 footer-col col-md-3">
                <h6 class="footer-menu-link">Project</h6>
                <ul class="footer-menu">
                  <li>
                    <Link to="/">Appartments</Link>
                  </li>
                  <li>
                    <Link to="/">How It Works</Link>
                  </li>
                </ul>
              </div>
              <div class="col-6 footer-col col-md-3">
                <h6 class="footer-menu-link">SERVICES</h6>
                <ul class="footer-menu">
                  <li>
                    <Link to="/">Renting</Link>
                  </li>

                  <li>
                    <Link to="/">Selling</Link>
                  </li>
                  <li>
                    <Link to="/">Building</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
