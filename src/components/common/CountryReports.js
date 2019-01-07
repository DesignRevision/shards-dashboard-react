import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Col,
  Row,
  FormSelect
} from "shards-react";

class CountryReports extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();

    this.createGoogleMaps = this.createGoogleMaps.bind(this);
    this.initCountriesMap = this.initCountriesMap.bind(this);
  }

  componentDidMount() {
    this.createGoogleMaps().then(this.initCountriesMap);
  }

  render() {
    const { title, countries } = this.props;

    return (
      <Card small className="country-stats">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
          <div className="block-handle" />
        </CardHeader>

        <CardBody className="p-0">
          {/* Map Container */}
          <div
            ref={this.mapRef}
            width="100%"
            height="100%"
            style={{ width: "100%", height: "180px" }}
          />

          {/* Countries Table List */}
          <table className="table m-0">
            <tbody>
              {countries.map((country, idx) => (
                <tr key={idx}>
                  <td>
                    <img
                      className="country-flag mr-1"
                      src={country.flag}
                      alt={country.title}
                    />
                    {country.title}
                  </td>
                  <td className="text-right">{country.visitorsAmount}</td>
                  <td className="text-right">{country.visitorsPercentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>

        <CardFooter className="border-top">
          <Row>
            {/* Time Span */}
            <Col>
              <FormSelect
                size="sm"
                value="last-week"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Last Week</option>
                <option value="today">Today</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </FormSelect>
            </Col>

            {/* View Full Report */}
            <Col className="text-right view-report">
              {/* eslint-disable-next-line */}
              <a href="#">View full report &rarr;</a>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }

  createGoogleMaps() {
    if (window.__SDPGoogleChartLoaded__) {
      return new Promise(resolve => {
        resolve();
      });
    }

    window.__SDPGoogleChartLoaded__ = true;

    return new Promise((resolve, reject) => {
      const gmap = document.createElement("script");
      gmap.src = "https://www.gstatic.com/charts/loader.js";
      gmap.type = "text/javascript";
      gmap.onload = resolve;
      gmap.onerror = reject;
      document.body.appendChild(gmap);
    });
  }

  initCountriesMap() {
    /* global google */

    google.charts.load("current", {
      packages: ["geochart"],
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    });

    google.charts.setOnLoadCallback(() => {
      const data = google.visualization.arrayToDataTable(this.props.mapsData);

      const options = {
        colorAxis: {
          colors: ["#B9C2D4", "#E4E8EF"]
        },
        legend: false,
        width: "100%"
      };

      const chart = new google.visualization.GeoChart(this.mapRef.current);

      function drawGeochart() {
        chart.draw(data, options);
      }

      drawGeochart();
      window.addEventListener("resize", drawGeochart);
    });
  }
}

CountryReports.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The countries data.
   */
  countries: PropTypes.array,
  /**
   * The map data.
   */
  mapsData: PropTypes.array
};

CountryReports.defaultProps = {
  title: "Users by Country",
  countries: [
    {
      flag: require("../../images/flags/flag-us.png"),
      title: "United States",
      visitorsAmount: "12,291",
      visitorsPercentage: "23.32%"
    },
    {
      flag: require("../../images/flags/flag-uk.png"),
      title: "United Kingdom",
      visitorsAmount: "11,192",
      visitorsPercentage: "18.8%"
    },
    {
      flag: require("../../images/flags/flag-au.png"),
      title: "Australia",
      visitorsAmount: "9,291",
      visitorsPercentage: "12.3%"
    },
    {
      flag: require("../../images/flags/flag-jp.png"),
      title: "Japan",
      visitorsAmount: "2,291",
      visitorsPercentage: "8.14%"
    }
  ],
  mapsData: [
    ["Country", "Users"],
    ["United States", 12219],
    ["United Kingdom", 11192],
    ["Australia", 9291],
    ["Japan", 2291]
  ]
};

export default CountryReports;
