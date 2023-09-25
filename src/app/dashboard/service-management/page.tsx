"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const ServiceManagement = () => {
  const [data, setData] = useState("");

  // get email
  const session = useSession();
  const email = session?.data?.user?.email;

  useEffect(() => {
    axios.get(`/api/services?email=${email}`).then((result) => {
        console.log(result.data.data);
        setData(result.data.data);
    });
  }, []);
  return <div>
    <h1 className="text-3xl font-bold my-3">Manage Service</h1>
    {
        data ? "Hell qolrd" : <h1 className="text-3xl font-bold text-center">There is no data available</h1>
    }
  </div>;
};

export default ServiceManagement;
