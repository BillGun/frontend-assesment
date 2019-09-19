import React, { Component, Fragment } from "react";
import InstagramSVG from "../../../public/assets/instagram-logo.svg";
import YoutubeSVG from "../../../public/assets/youtube.svg";
import FacebookSVG from "../../../public/assets/facebook.svg";
import LinkedInSVG from "../../../public/assets/linkedin.svg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="flex-container-footer-top">
          <div>
            <h2 className="footer-logo">nodeflux</h2>
          </div>
          <div className="footer-item">
            <p>Company</p>
            <div className="footer-subitem">
              <p>About</p>
              <p>Carrer</p>
              <p>Blog's</p>
            </div>
          </div>
          <div className="footer-item">
            <p>Nodeflux Cloud</p>
            <div className="footer-subitem">
              <p>Security & Defense</p>
              <p>Smart City</p>
              <p>Retail</p>
            </div>
          </div>
          <div className="footer-item">
            <p>Product</p>
            <div className="footer-subitem">
              <p>Nodeflux Grid</p>
              <p>Nodeflux Cloud</p>
            </div>
          </div>
          <div className="footer-item">
            <p>Location</p>
            <div className="footer-subitem">
              <p>
                Jl. Kemang Timur No.24, RT.7/RW.4, Bangka, Mampang Prpt.,
                Jakarta Selatan, 12730
              </p>
              <p>(021) 22718184</p>
              <p>hello@nodeflux.io</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex-container-footer-bottom">
          <p>© 2019 All right reserved - nodeflux.io</p>
          <div className="social-media">
            <a href="">
              <img src={InstagramSVG} />
            </a>
            <a href="">
              <img src={YoutubeSVG} />
            </a>
            <a href="">
              <img src={FacebookSVG} />
            </a>
            <a href="">
              <img src={LinkedInSVG} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
