import React, { Component } from 'react';

export class Grades extends Component {
  displayName = Grades.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    fetch('api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table'>
        <thead>
        <tr>
            <th>Subject</th>
            <th>Grade</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Grades.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>My grades</h1>
        <h3>Semesters</h3>
        {contents}
      </div>
    );
  }
}
