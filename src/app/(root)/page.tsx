import Banner from "@/components/home/Banner";
import Review from "@/components/home/review/Review";
import JobSection from "@/components/home/JobSection";
import PopularServices from "@/components/home/services/PopularServices";
import Categories from "@/components/home/category/Categories";
import Trending from "@/components/home/trending/Trending";
import Teams from "@/components/home/team/Teams";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession();
  return (
    <main>
      <Banner />
      <PopularServices />
      <Categories />
      <Trending />
      <Teams />
      <Review></Review>
    </main>
  );
};
export default Home;
