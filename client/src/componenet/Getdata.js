import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Getdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:8080/api/v1/enquires'); 
      setData(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {[data].map((item, index) => (
          <li key={index}>
            <p>id:{item._id}</p>
            <p>Name: {item.name}</p>
            <p>Email: {item.emailaddress}</p>
            <p>Phone Number: {item.phoneNumber}</p>
            <p>City: {item.city}</p>
            <p>State: {item.state}</p>
            <p>Pincode: {item.pincode}</p>
            <p>Highest Qualification: {item.highest}</p>
            <p>Interest: {item.interest}</p>
            <p>Job Experience: {item.priorcomputerknowledge}</p>
            <p>query : {item.query}</p>
            <p>dated: {item.dateofenquiry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Getdata;