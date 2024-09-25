import { useState } from "react";

export const RegistrationFromReact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });


  
  const onHandleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({...prev, [name]: value}))
    
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user)
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
            value={user.firstName}
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
            value={user.lastName}
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
            value={user.email}
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
            value={user.password}
            onChange={onHandleInputChange}
          />
          <br />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phoneNumber"
            placeholder="7007676869"
            required
            value={user.phoneNumber}
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
            {user.firstName} {user.lastName}
          </span>
          . My email is <span style={{ color: "red" }}>{user.email}</span> and my
          phone number is <span style={{ color: "blue" }}>{user.phoneNumber}</span>
        </p>
      </section>
    </>
  );
};
