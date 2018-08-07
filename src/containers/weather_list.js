import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9 / 5 - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(cityData);


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart data={temps} color="orange" units="F" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPA" />
        </td>
        <td>
          <Chart data={humidity} color="blue" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(weather) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);