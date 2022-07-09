import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
 

  useEffect(() => {
    

    if (!user) {
      navigate("/login");
    }

  
  }, [user, navigate]);

  
  return <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <h3>You are {user && user.userRole}</h3>

      <p>Create a Request</p>
    </section>
  </>
};

export default Dashboard;
