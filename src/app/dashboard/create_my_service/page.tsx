import Overview from "@/components/Dashboard/Overview/Overview";
import Pricing from "@/components/Dashboard/Pricing/Pricing";
import Seller_description from "@/components/Dashboard/Seller_description/Seller_description";
import Thumbnail from "@/components/Dashboard/Thumbnail/Thumbnail";
import Publish_service from "@/components/Dashboard/publish_service/publish_service";
import React from "react";

const create_my_service = () => {
  return (
    <div className="m-10">
      <Overview />
      <Pricing />
      <Seller_description />
      <Thumbnail />
      <Publish_service />
    </div>
  );
};

export default create_my_service;
