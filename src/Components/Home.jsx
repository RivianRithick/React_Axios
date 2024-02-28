import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [UserDetails, SetUserDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  const userImages = [
    {
      images: [
        "https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png",
      ],
    },
  ];

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <div className="container p-5 mt-1">
      <div class="ms-1 mt-5">
        <h3>
          For Create New User :
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
      <h1 className="mb-5 text-center">Home</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
        {UserDetails.map((item, index) => {
          return (
            <div key={index} class="col h-100">
              <div class="card h-100 " id="cards-w">
                {userImages.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item.images} class="card-img-top" alt="..." />
                    </div>
                  );
                })}
                <div class="card-body">
                  <h5 class="card-title">Name: {item.name}</h5>
                  <h5 class="card-title">Email: {item.email}</h5>
                  <h5 class="card-title">Phone: {item.phone}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
