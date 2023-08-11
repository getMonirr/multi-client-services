import Banner from "@/components/home/Banner";
import JobSection from "@/components/home/JobSection";
import PopularServices from "@/components/home/services/PopularServices";

const Home = () => {
  return (
    <main>
      <Banner />

      <JobSection></JobSection>
      
      <PopularServices />
    </main>
  );
};
export default Home;
