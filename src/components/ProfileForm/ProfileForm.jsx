import React, { useEffect, useState } from "react";
import * as usersAPI from '../../utilities/users-api';

export default function ProfileForm({ user, setUser }) {
  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    (async () => {
      const updatedUser = await usersAPI.getUser()
      setFormData({...updatedUser})
    })()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await usersAPI.updateUser(formData);
    setUser(formData);
  }
  return (
    <>
      <h1>Welcome, {formData.name} </h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Update</button>
      </form>
    </>
  )
}
