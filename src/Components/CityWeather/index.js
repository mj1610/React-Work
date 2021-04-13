import React from 'react';
import { Container, Alert, Table } from 'react-bootstrap';

function CityWeather({cityWeather, err }) {
    return (
        <Container className='div'>        
            { err && <Alert variant="danger">{err}</Alert> }
            {cityWeather && 
            // <div className="div">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Info Type</th>
              <th>Info Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <th>Weather</th>
              <td>
                {cityWeather.weather[0].main}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <th>Humidity</th>
              <td>
                {cityWeather.main.humidity}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <th>Temperature</th>
              <td>
                {cityWeather.main.temp -273} <sup>o</sup>C
              </td>
            </tr>
            <tr>
              <td>4</td>
              <th>Pressure</th>
              <td>
                {cityWeather.main.pressure} hpa
              </td>
            </tr>
            <tr>
              <td>5</td>
              <th>Wind Speed</th>
              <td>
                {cityWeather.wind.speed} m/s
              </td>
            </tr>
            <tr>
              <td>6</td>
              <th>Clouds</th>
              <td>
                {cityWeather.clouds.all} %
              </td>
            </tr>
          </tbody>
        </Table>
        // </div>
            }       
        </Container>
    );
};


export default CityWeather;