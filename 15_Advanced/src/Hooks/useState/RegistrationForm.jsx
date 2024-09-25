import { useState } from "react";

export const RegistrationFrom = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    // we don't have to use this
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      case "phoneNumber":
        setPhoneNumber(e.target.value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    console.log(formData);
    
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please fill up to create an account.</p>
          <label>
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={onHandleInputChange}
          />
          <br />
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastname"
            required
            value={lastName}
            onChange={onHandleInputChange}
          />
          <br />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={onHandleInputChange}
          />
          <br />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={onHandleInputChange}
          />
          <br />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phone"
            placeholder="7007676869"
            required
            value={phoneNumber}
            onChange={onHandleInputChange}
          />

          <br />

          <p>
            Creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms $ Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </form>

      <section style={{ textAlign: "center", marginTop: "30px" }}>
        <p>
          Hello, my name is
          <span style={{ color: "blue" }}>
            {firstName} {lastName}
          </span>
          . My email is <span style={{ color: "red" }}>{email}</span> and my
          phone number is <span style={{ color: "blue" }}>{phoneNumber}</span>
        </p>
      </section>
    </>
  );
};
