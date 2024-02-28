import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Create.css";

const Create = () => {
  const navigate = useNavigate();
  const [CreateData, SetCreateData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetCreateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://65df2188ff5e305f32a185e0.mockapi.io/UserData",
        CreateData
      );

      navigate("/userDetails");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="form-container">
      <div class="form-box-container pe-5">
        <h2>Create Data:</h2>
        <form onSubmit={handleFormSubmit}>
          <div class="my-3">
            <label>
              User Name<span class="text-danger">*</span>
              <input
                className="form-control"
                type="text"
                name="name"
                value={CreateData.name}
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <div class="mb-3">
            <label>
              Email<span class="text-danger">*</span>
              <input
                className="form-control"
                type="email"
                name="email"
                value={CreateData.email}
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <div class="mb-3">
            <label>
              Phone<span class="text-danger">*</span>
              <input
                className="form-control"
                type="tel"
                name="phone"
                value={CreateData.phone}
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <div class="d-flex justify-content-center" id="btn-div">
            <button
              type="submit"
              class="btn btn-primary"
              style={{ fontSize: "large" }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
