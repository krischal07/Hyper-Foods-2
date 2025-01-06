import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Ayush from "../../assets/ayush.jpeg";
import Krischal from "../../assets/krischal.jpeg";
import shikhadidi from "../../assets/shikhadidi.jpeg";
import arpit from "../../assets/arpit.jpeg";
import devashish from "../../assets/devashish.png";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section
        className={`py-12 sm:py-16 lg:py-20 ${
          mode === "dark" ? "bg-[rgb(14,24,39)]" : "bg-white"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p
                className={`text-lg font-medium ${
                  mode === "dark" ? "text-gray-300" : "text-gray-600"
                } font-pj`}
              >
                300+ people have said how good{" "}
                <span className="font-bold text-[#fe3b48]">Hyper</span>{" "}
                <span className="font-bold text-[#0c436f]">Foods</span> is
              </p>
              <h2
                className={`mt-4 text-3xl font-bold ${
                  mode === "dark" ? "text-white" : "text-gray-900"
                } sm:text-4xl xl:text-5xl font-pj`}
              >
                Our happy clients say about us
              </h2>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                {/* Testimonial Cards */}
                <div
                  className={`flex flex-col overflow-hidden shadow-xl ${
                    mode === "dark"
                      ? "bg-[rgb(23,33,46)] text-gray-300"
                      : "bg-white"
                  }`}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {/* Star Icons */}
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed font-pj">
                          "Hyper Foods is really trustable. Everytime I order
                          food, it deliver on time. The speed of delivery are
                          very fast and tracking system are helpful. I am much
                          satisfied."
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold font-pj">
                          Ramesh Shrestha
                        </p>
                        <p className="mt-0.5 text-sm font-pj">Businessman</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-col overflow-hidden shadow-xl ${
                    mode === "dark"
                      ? "bg-[rgb(23,33,46)] text-gray-300"
                      : "bg-white"
                  }`}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {/* Star Icons */}
                        {[...Array(4)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed font-pj">
                          "I like Hyper Foods service so much. Food always come
                          fresh and in time. Customer support is very helpfull
                          and solve problem quickly. Best experience ever had."
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold font-pj">
                          Kavita Sharma
                        </p>
                        <p className="mt-0.5 text-sm font-pj">Teacher</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-col overflow-hidden shadow-xl ${
                    mode === "dark"
                      ? "bg-[rgb(23,33,46)] text-gray-300"
                      : "bg-white"
                  }`}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {/* Star Icons */}
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed font-pj">
                          "My experiance with Hyper Foods is very good. Orders
                          is never late. They always deliver properly. Its my
                          most favorite food deliver service."
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold font-pj">
                          Suman Khanal
                        </p>
                        <p className="mt-0.5 text-sm font-pj">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add more cards as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
