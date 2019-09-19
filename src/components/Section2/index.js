import React, { Component, Fragment } from "react";
import UserSVG from "../../../public/assets/illustration-fr.svg";

class Section2 extends Component {
  render() {
    return (
      <section className="section-2">
        <div className="col-md-12">
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <h2 className="title">
                <span className="underline"> What </span>We Do
              </h2>
              <div className="section-2-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="content-number">
                      <p>1</p>
                    </div>
                    <div className="content-image">
                      <img src={UserSVG}></img>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="content-description card-reverse">
                      <div className="content-description-title">
                        <p>
                          <span className="card-glow">Face</span> Recognition
                        </p>
                        <hr></hr>
                      </div>
                      <div className="content-description-body">
                        <p>
                          Cras quis nulla commodo, aliquam lectus sed, blandit
                          augue. Cras ullamcorper bibendum bibendum. Duis
                          tincidunt urna non pretium porta. Nam condimentum
                          vitae ligula vel ornare. Phasellus at semper turpis.
                          Cras quis nulla commodo, aliquam lectus sed, blandit
                          augue. Cras ullamcorper bibendum bibendum.
                        </p>
                      </div>
                      <div className="content-description-footer">
                        <p>Learn More -></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;
