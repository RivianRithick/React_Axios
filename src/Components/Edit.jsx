import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Edit.css";

const Edit = ({ id }) => {
  const navigate = useNavigate();

  const [editData, SetEditData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://65df2188ff5e305f32a185e0.mockapi.io/UserData/${id}`
      );

      SetEditData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    SetEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://65df2188ff5e305f32a185e0.mockapi.io/UserData/${id}`,
        editData
      );
      navigate("/userDetails");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="form-container">
      <div class="form-box-container pe-5">
        <h2>Edit Data:</h2>
        <form onSubmit={handleFormSubmit} class="fw-bolder">
          <div class="my-3">
            <label className="form-label">
              User Name<span class="text-danger">*</span>
              <input
                className="form-control Inputs"
                id=""
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <div class="mb-3">
            <label>
              User Email<span class="text-danger">*</span>
              <input
                className="form-control Inputs"
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <div class="mb-3">
            <label>
              Phone<span class="text-danger">*</span>
              <input
                className="form-control Inputs"
                type="tel"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <div class="d-flex justify-content-center" id="btn-div">
            <button
              type="submit"
              class="btn btn-primary "
              style={{ fontSize: "large" }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
