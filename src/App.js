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
  //controlled component - all state track using formData and in all button track using value attribute.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Comments: "",
    isVisible: true
  });

  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: type === "checkbox" ? checked : event.target.value
      }
    })
  }

  return (
    <div className="App">
      <form>
        <label>First Name : </label>
        <input type='text' placeholder='first name' onChange={changeHandler} name='firstName' value={formData.firstName} /><br /><br />
        <label>Last Name : </label>
        <input type='text' placeholder='last name' onChange={changeHandler} name='lastName' value={formData.lastName} /><br /><br />
        <label>Email : </label>
        <input type='email' placeholder='enter your email here' onChange={changeHandler} name='email' value={formData.email} /><br /><br />
        <label>Comments : </label>
        <textarea placeholder='enter your comments here' name='comments' value={formData.Comments} /><br /><br />
        <input type='checkbox' onChange={changeHandler} name='isVisible' id='isVisible' checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am I Visible ?</label>
      </form>
    </div>
  );
}

export default App;
