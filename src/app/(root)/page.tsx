import Banner from "@/components/home/Banner";
import Review from "@/components/home/review/Review";
import JobSection from "@/components/home/JobSection";
import PopularServices from "@/components/home/services/PopularServices";
import Categories from "@/components/home/category/Categories";

const Home = () => {
  return (
    <main>
      <Banner />

      <JobSection></JobSection>

      <PopularServices />
      <Categories />
      <Review></Review>
    </main>
  );
};
export default Home;
