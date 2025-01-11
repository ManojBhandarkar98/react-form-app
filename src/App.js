import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function firstNameHandler(event) {
  //   setFirstName(event.target.value)
  // }
  // function lastNameHandler(event) {
  //   setLastName(event.target.value)
  // }

  //Handling Multiple state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="App">
      <form>
        <label>First Name : </label>
        <input type='text' placeholder='first name' onChange={changeHandler} name='firstName' value={formData.firstName}/><br />
        <label>Last Name : </label>
        <input type='text' placeholder='last name' onChange={changeHandler} name='lastName' value={formData.lastName}/><br />
        <label>Email : </label>
        <input type='email' placeholder='enter your email here' onChange={changeHandler} name='email'value={formData.email} />
      </form>
    </div>
  );
}

export default App;
