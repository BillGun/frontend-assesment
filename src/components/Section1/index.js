import React, { Component, Fragment } from "react";
import UserSilhoutteSVG from "../../../public/assets/user-silhouette.svg";
import BusSVG from "../../../public/assets/bus.svg";

const FaceCardItem = props => {
  return (
    <div className="col-md-4 card-item">
      <img src={props.photoURL || UserSilhoutteSVG} className="card-img" />
      <p className="card-glow">{props.gender}</p>
      <p>Age {props.age}</p>
      <p>{props.dateTime}</p>
    </div>
  );
};

const TrafficCardItem = props => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={props.photoURL || BusSVG} className="card-img" />
      </div>
      <div className="col-md-4">
        <div className="card-plate">
          <p>{props.plateNumber}</p>
        </div>
      </div>
      <div className="col-md-4">
        <p className="card-glow">{props.plateNumber}</p>
        <p>{props.type}</p>
        <p>{props.dateTime}</p>
      </div>
    </div>
  );
};

class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceRecognition: {
        totalPerson: 81032,
        IdentifiedPerson: 65112
      },
      trafficSurveilance: {
        totalVehicle: 5122,
        totalLicensePlate: 4232
      },
      faceDetection: [
        {
          photoURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODYuJ6y4zR1kksIzOAOjQr-UoIYVJ4wIDHGEixJTF1GeD3NFC",
          gender: "Male",
          age: "13-24",
          dateTime: "Today, 20.45"
        },
        {
          photoURL: "",
          gender: "Male",
          age: "17-20",
          dateTime: "Today, 20.45"
        },
        {
          photoURL:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg",
          gender: "Female",
          age: "12-24",
          dateTime: "Today, 20.45"
        }
      ],
      trafficSurveilanceList: [
        {
          photoURL:
            "https://5.imimg.com/data5/CI/ND/MY-1116278/hot-wheels-car-500x500.jpg",
          plateNumber: "AB 123",
          type: "Car",
          dateTime: "Today, 20.45"
        },
        {
          photoURL:
            "https://blog.corgithings.com/wp-content/uploads/2017/08/road1.jpg",
          plateNumber: "CD 456",
          type: "Car",
          dateTime: "Today, 20.45"
        },
        {
          photoURL: "",
          plateNumber: "EF 789",
          type: "Car",
          dateTime: "Today, 20.45"
        }
      ]
    };
  }

  render() {
    const FaceItemList = this.state.faceDetection.map((value, index) => {
      return (
        <Fragment key={index}>
          <FaceCardItem {...value} />
        </Fragment>
      );
    });

    const TrafficItemList = this.state.trafficSurveilanceList.map(
      (value, index) => {
        return (
          <Fragment key={index}>
            <TrafficCardItem {...value} />
          </Fragment>
        );
      }
    );
    return (
      <section className="section-1">
        <div className="section-1-globe col-md-12">
          <div className="row percent-break">
            <div className="offset-md-1 col-md-3">
              <div className="card">
                <div className="card-header">
                  <p>
                    <span className="card-subtitle">Face</span> Recognition
                  </p>
                </div>
                <div className="row card-content">
                  <div className="col-md-6">
                    <p>Total Person</p>
                    <p className="card-glow two-em-size">
                      {this.state.faceRecognition.totalPerson}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>Identified Person</p>
                    <p className="card-glow two-em-size">
                      {this.state.faceRecognition.IdentifiedPerson}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="offset-md-4 col-md-3">
              <div className="card-reverse">
                <div className="card-header">
                  <p>
                    <span className="card-subtitle">Traffic</span> Survelliance
                  </p>
                </div>
                <div className="row card-content">
                  <div className="col-md-6">
                    <p>Total Vehicle</p>
                    <p className="card-glow two-em-size">
                      {this.state.trafficSurveilance.totalVehicle}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>Total License Plate</p>
                    <p className="card-glow two-em-size">
                      {this.state.trafficSurveilance.totalLicensePlate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="offset-md-1 col-md-3">
              <div className="card">
                <div className="card-header">
                  <p>
                    <span className="card-subtitle">Face</span> Detection
                  </p>
                </div>
                <div className="row card-content card-list">{FaceItemList}</div>
              </div>
            </div>

            <div className="offset-md-4 col-md-3">
              <div className="card-reverse">
                <div className="card-header">
                  <p>
                    <span className="card-subtitle">Traffic</span> Survelliance
                  </p>
                </div>
                <div className="card-content card-list">{TrafficItemList}</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="section-1-footer">
              <h2 className="quotes">Extending Vision Beyond Imagination</h2>
              <button className="explore-button">Explore More</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
