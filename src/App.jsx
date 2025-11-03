import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User, Mail, Phone, Home, Hash, Calendar, Stethoscope, Bed, LogOut, FileText } from 'lucide-react';

 
const IconWrapper = ({ children }) => <span className="absolute inset-y-0 left-0 flex items-center pl-3">{children}</span>;
const PatientIDIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const AgeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>; // This is a placeholder, UserCheck is better
const GenderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M12 22a10 10 0 0 0 0-20 10 10 0 0 0 0 20Z"></path><path d="M12 4v7.5"></path><path d="m8.5 16 7-7"></path></svg>; // Using CircleDot, Users is better
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const HashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const StethoscopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M4 18a1 1 0 0 1-1-1v-3a4 4 0 0 1 4-4h1"></path><path d="M19 10h1a4 4 0 0 1 4 4v3a1 1 0 0 1-1 1"></path><path d="M8 10V7a6 6 0 0 1 12 0v3"></path><circle cx="12" cy="18" r="3"></circle></svg>;
const BedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>;

function FormInput({ id, label, type, name, value, onChange, icon, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <IconWrapper>{icon}</IconWrapper>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full py-3 pr-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
        />
      </div>
    </div>
  );
}

function FormSelect({ id, label, name, value, onChange, icon, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <IconWrapper>{icon}</IconWrapper>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full py-3 pr-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out appearance-none bg-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

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
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Data Submitted:");
    console.log(formData);
  }

  const genderOptions = [
    { value: "", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-8 flex items-center justify-center transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-2xl max-w-5xl w-full">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
              Patient Registration
            </h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
              <FileText className="w-6 h-6 mr-2" />
              <span className="text-lg font-medium">Hospital Management</span>
            </div>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
            <fieldset className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
              <legend className="text-lg font-semibold text-gray-700 dark:text-gray-300 px-2">Patient Details</legend>
              <div className="space-y-6">
                <FormInput
                  id="patient_id"
                  label="Patient ID"
                  type="text"
                  name="patient_id"
                  value={formData.patient_id}
                  onChange={handleChange}
                  icon={<PatientIDIcon />}
                  placeholder="e.g., P-12345"
                />
                <FormInput
                  id="name"
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  icon={<UserIcon />}
                  placeholder="Dhiraj Kumar"
                />
                <FormInput
                  id="age"
                  label="Age"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  icon={<AgeIcon />}
                  placeholder="e.g., 35"
                />
                <FormSelect
                  id="gender"
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  icon={<GenderIcon />}
                  options={genderOptions}
                />
              </div>
            </fieldset>

            <fieldset className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
              <legend className="text-lg font-semibold text-gray-700 dark:text-gray-300 px-2">Contact Info</legend>
              <div className="space-y-6">
                <FormInput
                  id="contactNumber"
                  label="Contact Number"
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  icon={<PhoneIcon />}
                  placeholder="(+91) 6201557347"
                />
                <FormInput
                  id="address"
                  label="Address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  icon={<HomeIcon />}
                  placeholder="Ramgarh, Jharkhand, India"
                />
                <div className="h-20"></div> 
                <div className="h-20"></div>
              </div>
            </fieldset>

            <fieldset className="md:col-span-2 border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
              <legend className="text-lg font-semibold text-gray-700 dark:text-gray-300 px-2">Admission Details</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                <FormInput
                  id="token_number"
                  label="Token Number"
                  type="text"
                  name="token_number"
                  value={formData.token_number}
                  onChange={handleChange}
                  icon={<HashIcon />}
                  placeholder="T-789"
                />
                <FormInput
                  id="doctor_assigned"
                  label="Doctor Assigned"
                  type="text"
                  name="doctor_assigned"
                  value={formData.doctor_assigned}
                  onChange={handleChange}
                  icon={<StethoscopeIcon />}
                  placeholder="Dr. Dhiraj Kumar"
                />
                <FormInput
                  id="bed_number"
                  label="Bed Number"
                  type="text"
                  name="bed_number"
                  value={formData.bed_number}
                  onChange={handleChange}
                  icon={<BedIcon />}
                  placeholder="B-101"
                />
                <FormInput
                  id="appointment_date"
                  label="Appointment Date"
                  type="date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  icon={<CalendarIcon />}
                />
                <FormInput
                  id="admission_date"
                  label="Admission Date"
                  type="date"
                  name="admission_date"
                  value={formData.admission_date}
                  onChange={handleChange}
                  icon={<CalendarIcon />}
                />
                <FormInput
                  id="discharge_date"
                  label="Discharge Date (Optional)"
                  type="date"
                  name="discharge_date"
                  value={formData.discharge_date}
                  onChange={handleChange}
                  icon={<CalendarIcon />}
                />
              </div>
            </fieldset>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 dark:focus:ring-offset-gray-800"
            >
              Submit Patient Record
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default App;