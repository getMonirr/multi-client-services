import Banner from "@/components/home/Banner";
import Review from "@/components/home/review/Review";
import PopularServices from "@/components/home/services/PopularServices";

const Home = () => {
  return (
    <main>
      <Banner />
      <PopularServices />
      <Review></Review>
    </main>
  );
};
export default Home;
