"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    // Fetch data when the component is mounted
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/upload"); // Adjust API endpoint if needed
        setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-50 text-black min-h-screen flex flex-col items-center">
      <div className="container bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-6xl mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Fetched Data</h2>
        <div className="results space-y-4">
          {fetchedData.length > 0 ? (
            fetchedData.map((item, index) => (
              <div
                key={index}
                className="result-card flex flex-col space-y-4 border p-4 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="image-container">
                    <img
                      src={`data:${item.image.contentType};base64,${item.image.data}`}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-container flex flex-col space-y-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                    <p>Prize: ₹{item.prize}</p>
                  </div>
                </div>
                {/* Display the createdAt timestamp */}
                <div className="text-left text-sm text-gray-500">
                  Posted on: {new Date(item.createdAt).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <p>No data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
