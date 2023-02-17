import React, { Component } from 'react';
import Getdata from './Getdata';

const data = [
  
];

<Table data={data} />


class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>State</th>
            <th>Pincode</th>
            <th>Highest Qualification</th>
            <th>Interest</th>
            <th>Job Experience</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.pincode}</td>
              <td>{row.highestQualification}</td>
              <td>{row.interest}</td>
              <td>{row.jobExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
