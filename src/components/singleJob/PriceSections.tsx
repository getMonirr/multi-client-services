"use client";
import React from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SinglePrice from "./SinglePrice";
import Link from "next/link";

const PriceSections = ({userDetails}: {userDetails : any}) => {
  const {basic,premium, standard, } = userDetails?.packages
  return (
    <div className="border sticky top-[100px]">
      <Tabs>
        <TabList className="flex items-center justify-between gap-2 lg:gap-4 border-b p-1 lg:p-2">
          <Tab className="px-4 py-2 bg-multi-icon-bg rounded-md w-full">
            Basic
          </Tab>
          <Tab className="px-4 py-2 bg-multi-icon-bg rounded-md w-full">
            Standard
          </Tab>
          <Tab className="px-4 py-2 bg-multi-icon-bg rounded-md w-full">
            Premium
          </Tab>
        </TabList>
        <TabPanel>
          <SinglePrice data={basic} seller ={userDetails}  />
        </TabPanel>
        <TabPanel>
          <SinglePrice data={standard} seller ={userDetails}   />
        </TabPanel>
        <TabPanel>
          <SinglePrice data={premium} seller ={userDetails}  />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PriceSections;
