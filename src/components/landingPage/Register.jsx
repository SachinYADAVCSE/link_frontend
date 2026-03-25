import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const UserRegister = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    profile: null
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  // Update input values
  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Simple client-side validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('username', formData.username);
      data.append('email', formData.email);
      data.append('password', formData.password);
      if(formData.profile) data.append('profile.avatarUrl', formData.profile);

      const response = await axios.post('https://linkbackend-production-51ce.up.railway.app/api/auth/register', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        Swal.fire({
          title: "Registration Successful",
          text: response.data.message || "Account created successfully",
          icon: "success"
        });

        navigate("/login")
        setFormData({
          name: '',
          username: '',
          email: '',
          password: '',
          profile: null
        });
        setErrors({});
      }
    } catch (error) {
      Swal.fire({
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error"
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md mt-40">
      <h2 className="text-3xl font-semibold text-center mb-8">Register</h2>

      <form onSubmit={handleRegister}>

        {/* Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaUser /></span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Username</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaUser /></span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaEnvelope /></span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><FaKey /></span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Profile Picture */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Profile Picture</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 text-gray-600"><MdAddPhotoAlternate /></span>
            <input
              type="file"
              name="profile"
              onChange={handleChange}
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link to="/login" className="text-blue-900">
          Already have an account? Login here
        </Link>
      </div>
    </div>
  );
};

export default UserRegister;
