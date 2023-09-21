"use client";

import Link from "next/link";

import contactImage from "@/assets/contactImage/cont.webp";
import Image from "next/image";
import RootContainer from "@/components/shared/RootContainer";

const ContactPage = () => {
  return (
    <RootContainer>
      <div className="pb-5">
        <Image
          src={contactImage}
          className="mx-auto w-full mt-2 rounded-lg h-[100vh]"
          alt="about"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8  pt-20" id="contact">
          <div className=" border rounded-lg ">
            <h4 className="text-3xl mb-10 text-center font-bold bg-multi-icon-bg shadow-2xl py-3 ">
              Contact Form
            </h4>
            <form className="p-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="mail"
                  name="from_email"
                  placeholder="Write Your Email Here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="border-2 border-black border-opacity-40 rounded-xl mb-5 p-3 "
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <input
                className="btn bg-multi-icon-bg hover:border-multi-primary"
                type="submit"
                value="Send"
              />
            </form>
          </div>

          <div className=" bg-slate-200 flex flex-col">
            <h2 className="text-3xl text-center font-bold bg-black text-white bg-opacity-40 shadow-2xl py-3 ">
              More contact
            </h2>
            <div className="  p-4 flex flex-col justify-between flex-grow">
                <p className="p-4 text-center bg-gray-200 shadow-2xl rounded">
                  Our team is dedicated to providing top-notch service and
                  assistance. Please feel free to use the form left to drop us a
                  message. Whether it is regarding our services, potential
                  collaboration, or any other inquiry, we will make sure the
                  right person gets back to you promptly.
                </p>
              <div className="md:flex gap-5 justify-between">
                <div>
                  <h4 className="text-2xl mt-5">Find On Us</h4>
                  <div className="my-5 flex items-center gap-4">
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
                <div className="">
                  <h5 className="text-2xl my-5 ">Contact</h5>
                  <p>Phone:+8801719440550</p>
                  <p>Fax:+8801913507041</p>
                  <p>Email:solutions@gmail.com</p>
                  <p>Address:91 B.C.C. Road Wari, Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootContainer>
  );
};

export default ContactPage;
