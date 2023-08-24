import SectionStarter from "@/components/shared/SectionStarter";
import React from "react";
import SingleMember from "./SingleMember";
import RootContainer from "@/components/shared/RootContainer";

const Teams = () => {
  return (
    <div className="bg-multi-icon-bg mt-16 pb-32 pt-1">
      <RootContainer>
        <SectionStarter title="Our team" description="Welcome Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-32 mt-32">
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
        </div>
      </RootContainer>
    </div>
  );
};

export default Teams;
