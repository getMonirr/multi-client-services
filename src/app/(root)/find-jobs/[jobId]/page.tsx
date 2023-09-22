
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
            <h3 className=" text-lg lg:text-2xl font-bold">
              I will create figma website ui ux and landing page
            </h3>
            <UserInfo />
            <div className="mt-8">
              <JobSlider images={images} />
            </div>
            <div className="my-8">
              <h2 className="text-xl font-bold mb-4">About the services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis natus ex quia delectus quo modi aliquam veritatis
                voluptas numquam suscipit nisi officia et provident saepe id,
                culpa ratione, nihil hic quasi consequuntur dicta. Unde, culpa
                sint dolorem soluta, quod quas autem rerum distinctio sit
                recusandae nam alias quo, mollitia debitis dicta sed voluptates
                maxime similique. Eveniet necessitatibus modi totam, deserunt,
                laudantium aliquam reiciendis sequi dolor consequatur iste
                distinctio autem dolorum. Architecto vitae minus delectus beatae
                quam totam alias ipsum quos, laudantium laborum ipsa, odit iure
                nulla aperiam nesciunt deleniti. Officiis quidem quis impedit
                incidunt dicta vitae sed tempora doloremque rerum. Porro neque
                quis assumenda illum ipsam totam molestias soluta aperiam
                recusandae laudantium, voluptates suscipit a aspernatur
                pariatur, earum quisquam. Veritatis animi provident non maxime,
                expedita id dolores, tempore deleniti similique cupiditate ut
                fugit cumque esse dolorem. Accusamus odit deleniti tempora
                repellat. Amet id sed omnis, quod enim temporibus debitis alias
                recusandae corrupti ratione, quasi neque dolor quae voluptate
                nam impedit unde et porro quos harum magni quidem illo? Rerum
                qui harum dignissimos magnam temporibus veritatis, consequuntur
                accusamus facilis distinctio eos modi est? Autem fugiat placeat,
                ex, cupiditate quisquam ea repellat, amet distinctio quod
                adipisci ad facilis. Ratione vel pariatur autem.
              </p>
            </div>
            {/* about the seller */}
            <div>
              <AboutSeller />
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
