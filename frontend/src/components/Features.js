import { Link } from "react-router-dom";
import "./Features.css";

const Features = () => {
  return (
    <>
      <div className="feature-section">
        <div className="wrapper--header">
          <h1>SITE HIGHLIGHTS</h1>
        </div>
        <div className="wrapper-container">
          <div className="wrapper-container--card">
            <Link to="https://moe.gov.lk/ministry/circulars/" target="_blank">
              <img src="./images/circulars.png" alt="circulars"></img>
              <div className="card--header">
                <h3>Circulars</h3>
              </div>
            </Link>
          </div>
          <div className="wrapper-container--card">
            <Link
              to="https://moe.gov.lk/ministry/statistics-reports/"
              target="_blank"
            >
              <img src="./images/stats.png" alt="reports & stats"></img>
              <div className="card--header">
                <h3>Reports & Statistics</h3>
              </div>
            </Link>
          </div>
          <div className="wrapper-container--card">
            <Link
              to="https://moe.gov.lk/ministry/policy-and-publications/"
              target="_blank"
            >
              <img src="./images/publications.png" alt="publications"></img>
              <div className="card--header">
                <h3>Publications</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
