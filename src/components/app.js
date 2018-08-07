import React, { Component } from 'react';
import Header from './header';
import WeatherList from '../containers/weather_list';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <WeatherList />
        <Footer />
      </section>
    );
  }
}
