import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, phone };
    fetch("/enquires", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
       <label htmlFor="address">Address:</label>
      <input
        type="address"
        id="address"
        value={address}
        onChange={(event) => setaddress(event.target.value)}
      /> 
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;