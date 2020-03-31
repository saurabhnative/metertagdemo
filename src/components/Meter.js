// OSX style disk usage example is taken from below article:
// https://css-tricks.com/html5-meter-element/
import React from "react";
import "./Meter.css";

export default function Meter() {
  return (
    <div className="d-flex flex-column">
      <div className="meterContainer">
        <h3 className="text-center">Meter tag</h3>
        <div>
          <p>
            {`The <meter> tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.`}
            <br />
            {`Examples: Disk usage, the relevance of a query result, etc.`}
          </p>
        </div>
        <div>
          <b>Simple demo</b>
          <div>
            <label htmlFor="disk_d" className={"disk-usage-meter-label"}>
              Disk usage D:
            </label>
            <meter id="disk_d" value="0.6">
              60%
            </meter>
          </div>
        </div>
        <div>
          <div>
            <b>
              OSX-style Disk Usage<sup>*</sup> :
            </b>
            <p>
              Macintosh HD{" "}
              <span className="free-space">64.54 GB free out of 120.47 GB</span>
            </p>
            <meter
              className={"diskmeter"}
              value="55.93"
              min="0"
              max="120.47"
              title="GB"
            >
              <div className="meter-gauge">
                <span style={{ width: "46.42%" }}>
                  Disk Usage - 55.93GB out of 120GB
                </span>
              </div>
            </meter>
            <ul className="swatch">
              <li className="swatch__elem">
                Audio <span className="used-space">670.5 MB</span>
              </li>
              <li className="swatch__elem">
                Movies <span className="used-space">10.1 GB</span>
              </li>
              <li className="swatch__elem">
                Photos <span className="used-space">25.19 GB</span>
              </li>
              <li className="swatch__elem">
                Apps <span className="used-space">19.31 GB</span>
              </li>
              <li className="swatch__elem">
                Other <span className="used-space">660.5 MB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footnotes">
        * OSX-style Disk Usage code taken from:
        <a
          href="https://css-tricks.com/html5-meter-element/"
          target="_blank"
          rel="noreferrer noopener"
        >
          CSS tricks article
        </a>
      </div>
    </div>
  );
}
