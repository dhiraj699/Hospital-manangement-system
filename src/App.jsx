import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




  
function App() {
  const [formData, setFormData] = useState({
    patient_id: "",
    name: "",
    age: "",
    gender: "",
    contactNumber: "",
    address: "",
    token_number: "",
    appointment_date: "",
    doctor_assigned: "",
    bed_number: "",
    admission_date: "",
    discharge_date: "",
  });
function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event)
  {
    event.preventDefault();
    console.log("Form Give DAta")
    console.log(formData);
  }

  return (
    <>
      <div className="App">
        <form onSubmit={submitHandler}>
          <h1>Hospital Management Form</h1>
          <label>
            Patient ID:
            <input
              type="text"
              name="patient_id"
              value={formData.patient_id}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <label>
            Contact Number:
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Token Number:
            <input
              type="text"
              name="token_number"
              value={formData.token_number}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Appointment Date:
            <input
              type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Doctor Assigned:
            <input
              type="text"
              name="doctor_assigned"
              value={formData.doctor_assigned}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Bed Number:
            <input
              type="text"
              name="bed_number"
              value={formData.bed_number}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Admission Date:
            <input
              type="date"
              name="admission_date"
              value={formData.admission_date}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Discharge Date:
            <input
              type="date"
              name="discharge_date"
              value={formData.discharge_date}
              onChange={handleChange}
            />
          </label>
          <br />

          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
        </form>
         
      </div>
    </>
  )
}

export default App
