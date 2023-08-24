import Banner from "@/components/home/Banner";
import Review from "@/components/home/review/Review";
import JobSection from "@/components/home/JobSection";
import PopularServices from "@/components/home/services/PopularServices";
import Categories from "@/components/home/category/Categories";
import Trending from "@/components/home/trending/Trending";

const Home = () => {
  return (
    <main>
      <Banner />

      {/* <JobSection></JobSection> */}

      <PopularServices />
      <Categories />
      <Trending />
      <Review></Review>
    </main>
  );
};
export default Home;
