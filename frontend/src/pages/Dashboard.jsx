import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RequestForm from "../components/RequestForm";
import { getRequests } from "../features/request/requestSlice";
import RequestTable from "../components/RequestTable";

const Dashboard = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
 

  useEffect(() => {
    

    if (!user) {
      navigate("/login");
    }

    dispatch(getRequests())

  
  }, [user, navigate]);

  return <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
    </section>

    <RequestForm />

    <RequestTable />

  </>
};

export default Dashboard;
