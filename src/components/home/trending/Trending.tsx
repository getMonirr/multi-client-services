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
            <ul className="mt-3 menu bg-multi-icon-bg w-56 rounded-box">
              <li>
                <a>Web development</a>
              </li>
              <li>
                <a>Graphics Design</a>
              </li>
              <li>
                <a>AI Development</a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Top Talents</h2>
            <ul className="mt-3 menu bg-multi-icon-bg w-56 rounded-box">
              <li>
                <a>Md. Mehetaj Khandakar</a>
              </li>
              <li>
                <a>Md. Shahedul Islam</a>
              </li>
              <li>
                <a>Masum billah</a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Trending Services</h2>
            <ul className="mt-3 menu bg-multi-icon-bg w-56 rounded-box">
              <li>
                <a>Machine Learning</a>
              </li>
              <li>
                <a>AI Development</a>
              </li>
              <li>
                <a>MERN Stack Development</a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Top Services</h2>
            <ul className="mt-3 menu bg-multi-icon-bg w-56 rounded-box">
              <li>
                <a>Wordpress Development</a>
              </li>
              <li>
                <a>Next js development</a>
              </li>
              <li>
                <a>React development</a>
              </li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </RootContainer>
  );
};

export default Trending;
