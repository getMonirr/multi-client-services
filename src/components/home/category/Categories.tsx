import RootContainer from "@/components/shared/RootContainer";
import SectionStarter from "@/components/shared/SectionStarter";
import { BsCodeSlash } from "react-icons/bs";
import SingleCategory from "./SingleCategory";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";
import { headers } from "next/headers";

const categoryItems = [
  {
    icon: BsCodeSlash,
    category: "web development",
    rating: 4.6,
    skill: 15,
  },
  {
    icon: BsCodeSlash,
    category: "mobile app development",
    rating: 4.2,
    skill: 12,
  },
  {
    icon: BsCodeSlash,
    category: "data science",
    rating: 4.8,
    skill: 18,
  },
  {
    icon: BsCodeSlash,
    category: "graphic design",
    rating: 4.5,
    skill: 10,
  },
  {
    icon: BsCodeSlash,
    category: "digital marketing",
    rating: 4.3,
    skill: 14,
  },
  {
    icon: BsCodeSlash,
    category: "cybersecurity",
    rating: 4.7,
    skill: 16,
  },
  {
    icon: BsCodeSlash,
    category: "AI and Machine Learning",
    rating: 4.9,
    skill: 20,
  },
  {
    icon: BsCodeSlash,
    category: "UI/UX design",
    rating: 4.4,
    skill: 11,
  },
];
const getData = async (host: string | null) => {
  const res = await fetch(`http://${host}/api/services?statistics='category'`);
  return res.json();
};

const Categories = async () => {
  const host = headers().get("host");
  const data = await getData(host);
  return (
    <div className="dark:bg-gray-900 py-8">
      <RootContainer>
        <div data-aos="fade-down">
          <SectionStarter
            title="Find talent by category"
            description="just click"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* generate all categories */}
            {data?.data.map((category: any, index: number) => (
              <SingleCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default Categories;
