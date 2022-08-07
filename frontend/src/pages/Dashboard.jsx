import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RequestForm from "../components/RequestForm";
import { getRequests } from "../features/request/requestSlice";
import RequestTable from "../components/RequestTable";
import Footer from "../components/Footer";
import ColoredLine from "../components/Line";
import AdminHeader from "../components/AdminHeader";
import PostHeader from "../components/PostHeader";
import AdminTable from "../components/AdminTable";
import PostTable from "../components/PostTable";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
      </section>

      {user?.userRole === "basic" ? (
        <>
        <RequestForm />
        <RequestTable />
        
        </>
      ) : (
        [user?.userRole === "admin" ? 
        
          <>
          <AdminHeader />
          <AdminTable />
          </>
           : 
          <>
           <PostHeader />
           <PostTable />
          </>
         ]
      )}

      

      {/* <ColoredLine color="gray" /> */}
      <Footer />
    </>
  );
};

export default Dashboard;
