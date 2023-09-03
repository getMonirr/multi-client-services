"use client";
import Link from "next/link";
import { useState } from "react";

import aboutImage from "../../../assets/aboutImage/aboutNew.jpg";
import whyImage from "@/assets/aboutImage/why.jpg";
import missionImage from "@/assets/aboutImage/mission.jpg";
import commitmentImage from "@/assets/aboutImage/commitment.png";
import jImage from "@/assets/aboutImage/joinUs.jpg";
import teamImage from "@/assets/aboutImage/teamImage.avif";

import Image from "next/image";
import AboutTeam from "@/components/home/team/AboutTeam";
const AboutPage = () => {
  const [learnMore, setLearnMore] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const btnSetLearnMore = () => {
    setLearnMore(true);
    setDisabled(true);
  };
  return (
    <div className="m-5">
      <div className="border-2 border-multi-primary border-opacity-50 p-5">
        <div className="mx-auto">
          <Image src={aboutImage} className="mx-auto" alt="about" />
        </div>

        <p>
          Welcome to Solutions, where talent meets opportunity and possibilities
          are endless. We are more than just a freelance platform, we are a
          dynamic community that connects skilled freelancers with clients
          seeking top-notch services.
        </p>

        {learnMore && (
          <p>
            We are not just a platform; we are a global community of talented
            individuals, passionate about turning dreams into reality. Whether
            you are a freelance writer, a graphic designer, a video editor, a
            programmer, or any other creative professional, we are here to
            empower you and connect you with clients who appreciate your unique
            skills. Our journey began with a simple idea: to create a space
            where freelancers could showcase their expertise and clients could
            find the perfect match for their projects. Over the years, we have
            grown into a vibrant ecosystem that fosters innovation, diversity,
            and growth. What sets us apart is our commitment to excellence. We
            believe in pushing boundaries, challenging the status quo, and
            exceeding expectations. Our platform is not just a place to find
            gigs; it is a space to create lasting relationships, explore new
            horizons, and bring groundbreaking ideas to life.
          </p>
        )}

        <div className="text-center mt-3">
          <button
            onClick={btnSetLearnMore}
            disabled={disabled}
            className="btn bg-multi-icon-bg hover:border-multi-primary"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
        <div className="flex justify-between gap-4">
          <Image src={whyImage} className="mx-auto w-1/2" alt="about" />
          <div className="w-1/2">
            <h2 className="">Why Solutions?</h2>
            <p>
              1. Diverse Talent Pool: We pride ourselves on hosting a diverse
              and talented pool of freelancers from various industries and
              backgrounds. Whatever your project demands, we have the experts
              ready to bring it to life
            </p>
            <p>
              2. Seamless Collaboration: Our user-friendly platform makes it
              easy for clients to find the right freelancer and for freelancers
              to showcase their skills. Streamlined communication tools ensure
              smooth collaboration every step of the way.
            </p>
            <p>
              3. Trust and Security: We prioritize the safety of both
              freelancers and clients. Our rigorous vetting process ensures that
              only the best professionals join our community, and secure payment
              systems provide peace of mind for all transactions.
            </p>
            <p>
              4. Customized Solutions: Whether you are a startup looking for a
              logo, an enterprise in need of development work, or an individual
              seeking creative services, Solutions offers tailored solutions to
              meet your unique needs.
            </p>
            <p>
              5. Flexibility and Freedom: Freelancers, embrace the freedom of
              choosing projects that resonate with you. Clients, find the
              perfect match for your project without the constraints of
              traditional employment.
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
        <div className="flex justify-between gap-4">
          <div className="w-1/2">
            <h2 className="text-2xl">Our Mission</h2>
            <p>
              At Solutions our mission is to empower freelancers and clients
              around the world to collaborate, create, and achieve their goals.
              We believe that every project is an opportunity for innovation and
              growth, and we are here to make those connections happen.
            </p>
          </div>
          <Image src={missionImage} className="w-1/2" alt="about" />
        </div>
      </div>

      <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
        <div className="mx-auto">
          <Image src={commitmentImage} alt="commitment" />
        </div>
        <p>
          We are committed to fostering a supportive and collaborative
          environment where success knows no boundaries. Through constant
          innovation, user-driven improvements, and a dedication to excellence,
          we strive to be your go-to platform for all your freelance needs.
        </p>
      </div>
      <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
        <div className="mx-auto">
          <Image className="mx-auto" src={jImage} alt="" />
        </div>

        <p>
          Whether you are a freelancer looking to showcase your skills and
          connect with exciting projects, or a client ready to bring your
          visions to life, Solutions is here to guide you every step of the way.
          Join our growing community today and unlock the potential of talent
          and opportunity.
        </p>

        <div className="my-5 grid grid-flow-col gap-4 justify-between px-20">
          <Link href="https://twitter.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-[#00acee]"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link href="https://www.youtube.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-error"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              className="fill-[#0072b1]"
            >
              <path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z"></path>
            </svg>
          </Link>
          <Link href="https://www.facebook.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </div>

      
      <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
        <div className="mx-auto">
          <Image className="w-full" src={teamImage} alt="commitment" />
        </div>
        <div>
        <AboutTeam></AboutTeam>
      </div>
        </div>
    </div>
  );
};

export default AboutPage;
