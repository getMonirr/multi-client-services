"use client";
import RootContainer from "@/components/shared/RootContainer";
import AboutSeller from "@/components/singleJob/AboutSeller";
import JobSlider from "@/components/singleJob/JobSlider";
import PriceSections from "@/components/singleJob/PriceSections";
import SellerFAQ from "@/components/singleJob/SellerFAQ";
import SellerReviews from "@/components/singleJob/SellerReviews";
import UserInfo from "@/components/singleJob/UserInfo";
import getDataFromDB from "@/utils/getDataFromDB";
import { headers } from "next/headers";
// get data

const SingleJob = async ({ params }: { params: { jobId: string } }) => {
  const { jobId } = params;
  const host = headers().get("host");
  const service = await getDataFromDB(`http://${host}/api/services/${jobId}`);
  const { title, description, seller, images } = service?.data;
  console.log({ service });
  return (
    <div className="my-16">
      <RootContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="order-2 lg:order-1">
            <h3 className=" text-lg lg:text-2xl font-bold">{title}</h3>
            <UserInfo seller={seller} />
            <div className="mt-8">
              <JobSlider images={images} />
            </div>
            <div className="my-8">
              <h2 className="text-xl font-bold mb-4">About the services</h2>
              <p>{description}</p>
            </div>
            {/* about the seller */}
            <div>
              <AboutSeller seller={seller} />
            </div>
            <div>
              <SellerFAQ />
            </div>
            <div>
              <SellerReviews />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <PriceSections />
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default SingleJob;
