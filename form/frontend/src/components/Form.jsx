import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        gender: '',
        age: '',
        occupation: '',
        bio: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to the backend
        // You can use an HTTP library like axios to make the request
        // Example: axios.post('/api/form', formData)
        // Handle the response from the backend accordingly
        axios.post('/api/form', formData)
            .then(response => {
            // Handle the response from the backend accordingly
            })
            .catch(error => {
            // Handle any errors that occurred during the request
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Age:
                <input type="date" name="age" value={formData.age} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Occupation:
                <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Bio:
                <textarea name="bio" value={formData.bio} onChange={handleChange} maxLength={500} required />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;