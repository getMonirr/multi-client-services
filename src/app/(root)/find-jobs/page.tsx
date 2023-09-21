"use client";
import Bannar from "@/components/searchComponents/Bannar";
import JobsBody from "@/components/searchComponents/JobsBody";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const search: any = searchParams.get("searchQuery");
  console.log(search);
  return (
    <div>
      <Bannar queryData={search}></Bannar>
    </div>
  );
};

export default SearchPage;
