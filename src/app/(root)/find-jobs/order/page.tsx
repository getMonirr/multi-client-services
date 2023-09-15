import RootContainer from "@/components/shared/RootContainer";
import { orderPage } from "@/constant/Constant";
import Image from "next/image";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import { FaBriefcase, FaComment, FaMapMarkerAlt, FaStar } from "react-icons/fa";
const userphoto =
  "https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?size=626&ext=jpg&ga=GA1.1.2077699082.1681132836&semt=sph";

const page = () => {
  const {
    name,
    username,
    level,
    totalHourRate,
    jobSuccuss,
    description,
    picture,
    work_category,
    reviews,
    ratings,
    price,
    totalJobComplete,
    languese,
    contry,
    skils,
  } = orderPage;
  return (
    <RootContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 pb-96 border p-4 text-black">
          <h1 className="text-3xl font-bold mb-10 capitalize">
            {work_category}
          </h1>
          <div className="flex gap-6 items-center  mb-6">
            <Image
              src={userphoto}
              alt="Vercel Logo"
              className="w-32 h-32 rounded-full"
              width={550}
              height={120}
              objectFit="cover"
              priority
            />
            <div>
              <h2 className="font-bold capitalize text-3xl mb-2">{name} </h2>
              <div className="flex gap-4 ">
                <p className="flex gap-2 items-center text-black ">
                  <FaMapMarkerAlt className="w-6 h-6" />
                  <span className="text-xl">{contry}</span>
                </p>

                <p className="flex gap-2 items-center">
                  <FaComment className="w-6 h-6" />
                  <span className="text-xl">{languese}</span>
                </p>

                <p className="flex gap-2 items-center">
                  <FaBriefcase className="w-6 h-6" />
                  <span className="text-xl">
                    {totalJobComplete} Orders complete
                  </span>
                </p>
              </div>
              <div
                id="review"
                className="flex justify-between items-center mt-2"
              >
                <SimpleBtn>Contact me</SimpleBtn>
                <p className="flex items-center gap-1 ">
                  {" "}
                  <FaStar className="text-yellow-500 w-4 h-4" />
                  <span>
                    {ratings}({reviews.length})
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg mb-6">{description}</p>
          <div className=" ">
            {skils.map((skil, i) => (
              <p className="bg-gray-200 px-6 py-2 mr-4 capitalize inline-block rounded-xl my-4" key={i}>
                {skil}
              </p>
            ))}
          </div>
        </div>

        {/* gig section  */}
        <div className="">
          <p className="md:sticky top-20 ">hellop</p>
        </div>
      </div>
    </RootContainer>
  );
};

export default page;
