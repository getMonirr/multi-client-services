"use client";
import RootContainer from "@/components/shared/RootContainer";
import SectionStarter from "@/components/shared/SectionStarter";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Trending = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <RootContainer>
      <SectionStarter
        title="All Trending Topics"
        description="Overview of Tops/Trending"
      />
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Trending Skills</Tab>
            <Tab>Top Talents</Tab>
            <Tab>Trending Services</Tab>
            <Tab>Top Services</Tab>
          </TabList>

          <TabPanel>
            <h2>Trending Skills</h2>
            <ul className="mt-3 menu bg-base-200 w-56 rounded-box">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Top Talents</h2>
            <ul className="mt-3 menu bg-base-200 w-56 rounded-box">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Trending Services</h2>
            <ul className="mt-3 menu bg-base-200 w-56 rounded-box">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Top Services</h2>
            <ul className="mt-3 menu bg-base-200 w-56 rounded-box">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </RootContainer>
  );
};

export default Trending;
