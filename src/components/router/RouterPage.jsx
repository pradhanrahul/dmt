import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../login/Login";
import SingleTransfer from "../singleTransfer/SingleTransfer";
import BulkTransfer from "../bulk/BulkTransfer";
import Dashboard from "../dashBoard/Dashboard";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/single" element={<SingleTransfer />} />
      <Route path="/bulk" element={<BulkTransfer />} />
    </Routes>
  );
};

export default RouterPage;
