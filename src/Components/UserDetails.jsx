import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ SetId }) => {
  const navigate = useNavigate();

  const [UserDetails, SetUserDetails] = useState([]);

  const [DeleteData, SetDeleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [DeleteData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65df2188ff5e305f32a185e0.mockapi.io/UserData"
      );
      SetUserDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    SetId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://65df2188ff5e305f32a185e0.mockapi.io/UserData/${id}`
      );
      SetDeleteData((prevData) => !prevData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <div>
      <h1 className="mt-2  text-center">User Details</h1>
      <table class="table mt-3">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {UserDetails.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div class="ms-1 mt-5">
        <h3>
          For Create New User:
          <button
            className="btn btn-success ms-2"
            onClick={() => {
              handleCreate();
            }}
          >
            Create
          </button>
        </h3>
      </div>
    </div>
  );
};

export default UserDetails;
