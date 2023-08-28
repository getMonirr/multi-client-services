"use client";

import Teams from "@/components/home/team/Teams";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
export const metadata: Metadata = {
    title: "Multi-Client | About",
    description: "This is a multi-client services website",
  };

const AboutPage = () => {
    const [learnMore, setLearnMore] = useState(false);
    const [disabled, setDisabled] = useState(false)
    const btnSetLearnMore = () => {
        setLearnMore(true);
        setDisabled(true);
    }
    return (
        <div className="m-5">
            <div className="border-2 border-multi-primary border-opacity-50 p-5">
                <h1 className="text-center">About Us</h1>
                <p>
                    Welcome to Solutions, where talent meets opportunity and possibilities are endless. We are more than just a freelance platform, we are a dynamic community that connects skilled freelancers with clients seeking top-notch services.
                </p>

                {learnMore &&
                    <p>
                        We are not just a platform; we are a global community of talented individuals, passionate about turning dreams into reality. Whether you are a freelance writer, a graphic designer, a video editor, a programmer, or any other creative professional, we are here to empower you and connect you with clients who appreciate your unique skills.

                        Our journey began with a simple idea: to create a space where freelancers could showcase their expertise and clients could find the perfect match for their projects. Over the years, we have grown into a vibrant ecosystem that fosters innovation, diversity, and growth.

                        What sets us apart is our commitment to excellence. We believe in pushing boundaries, challenging the status quo, and exceeding expectations. Our platform is not just a place to find gigs; it is a space to create lasting relationships, explore new horizons, and bring groundbreaking ideas to life.
                    </p>
                }

                <div className="text-center mt-3">
                    <button onClick={btnSetLearnMore} disabled={disabled} className="btn bg-multi-icon-bg hover:border-multi-primary">Learn More</button>
                </div>
            </div>
            <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
                <h2 className="text-center">Why Solutions?</h2>
                <p>1. Diverse Talent Pool: We pride ourselves on hosting a diverse and talented pool of freelancers from various industries and backgrounds. Whatever your project demands, we have the experts ready to bring it to life</p>
                <p>2. Seamless Collaboration: Our user-friendly platform makes it easy for clients to find the right freelancer and for freelancers to showcase their skills. Streamlined communication tools ensure smooth collaboration every step of the way.</p>
                <p>3. Trust and Security: We prioritize the safety of both freelancers and clients. Our rigorous vetting process ensures that only the best professionals join our community, and secure payment systems provide peace of mind for all transactions.</p>
                <p>4. Customized Solutions: Whether you are a startup looking for a logo, an enterprise in need of development work, or an individual seeking creative services, Solutions offers tailored solutions to meet your unique needs.</p>
                <p>5. Flexibility and Freedom: Freelancers, embrace the freedom of choosing projects that resonate with you. Clients, find the perfect match for your project without the constraints of traditional employment.</p>
            </div>


            <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
                <h2 className="text-center">Our Mission
                </h2>
                <p>At Solutions our mission is to empower freelancers and clients around the world to collaborate, create, and achieve their goals. We believe that every project is an opportunity for innovation and growth, and we are here to make those connections happen.</p>
            </div>
            <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
                <h2 className="text-center">Our Commitment
                </h2>
                <p>We are committed to fostering a supportive and collaborative environment where success knows no boundaries. Through constant innovation, user-driven improvements, and a dedication to excellence, we strive to be your go-to platform for all your freelance needs.</p>
            </div>
            <div className="border-2 border-multi-primary border-opacity-50 p-5 mt-5">
                <h2 className="text-center">Join Us
                </h2>
                <p>Whether you are a freelancer looking to showcase your skills and connect with exciting projects, or a client ready to bring your visions to life, Solutions is here to guide you every step of the way. Join our growing community today and unlock the potential of talent and opportunity.</p>

                <div className="my-5 grid grid-flow-col gap-4 justify-between px-20">
                    <Link href='https://twitter.com/'>
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
                    <Link href='https://www.youtube.com/'>
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
                    <Link href='https://www.facebook.com/'>
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


            <div>
                <Teams></Teams>
            </div>
        </div>
    );
};

export default AboutPage;