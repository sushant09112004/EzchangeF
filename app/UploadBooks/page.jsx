"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    prize: "",
    image: null,
    year: "",   // New year field
    field: "",  // New field field
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("prize", formData.prize);
    data.append("image", formData.image);
    data.append("year", formData.year);  // Append year to form data
    data.append("field", formData.field); // Append field to form data

    try {
      const response = await axios.post("/api/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="text-black bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="container bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-3xl transform hover:scale-101 transition duration-300 ease-in-out">
        <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">Submit Your Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Tittle<span className>(Tagline)</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Tittle"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="prize" className="block text-lg font-medium text-gray-700 mb-2">
              Prize
            </label>
            <input
              id="prize"
              type="number"
              name="prize"
              placeholder="Prize"
              value={formData.prize}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-lg font-medium text-gray-700 mb-2">
              Year
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <div>
            <label htmlFor="field" className="block text-lg font-medium text-gray-700 mb-2">
              Field
            </label>
            <select
              id="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Field</option>
              <option value="Science">Science</option>
              <option value="Arts">Arts</option>
              <option value="Commerce">Commerce</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>

          <div>
            <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">
              Image (Square)
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
