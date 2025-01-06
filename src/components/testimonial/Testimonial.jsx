// import React, { useContext } from "react";
// import myContext from "../../context/data/myContext";
// import Ayush from "../../assets/ayush.jpeg";
// import Krischal from "../../assets/krischal.jpeg";
// import shikhadidi from "../../assets/shikhadidi.jpeg";
// import arpit from "../../assets/arpit.jpeg";
// import devashish from "../../assets/devashish.png";

// function Testimonial() {
//   const context = useContext(myContext);
//   const { mode } = context;

//   return (
//     // <div>
//     //   <section className="text-gray-600 body-font mb-10">
//     //     <div className="container px-5 py-10 mx-auto">
//     //       <h1
//     //         className="text-center text-3xl font-bold text-black"
//     //         style={{ color: mode === "dark" ? "white" : "" }}
//     //       >
//     //         Hyper Foods
//     //       </h1>
//     //       <h2
//     //         className="text-center text-2xl font-semibold mb-10"
//     //         style={{ color: mode === "dark" ? "white" : "" }}
//     //       >
//     //         From the <span className="text-red-500">TEAM</span>
//     //       </h2>
//     //       <div className="flex flex-wrap -m-4 justify-center">
//     //         <div className="lg:w-1/3 sm:w-1/2 w-full mb-6 p-4 flex flex-col items-center">
//     //           <div className="h-full text-center">
//     //             <img
//     //               alt="testimonial"
//     //               className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//     //               src={Ayush}
//     //             />
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="leading-relaxed"
//     //             >
//     //               Foods from Hyper is happy mood.
//     //             </p>
//     //             <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
//     //             <h2
//     //               style={{ color: mode === "dark" ? "#ff4162" : "" }}
//     //               className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//     //             >
//     //               Ayush Poudel
//     //             </h2>
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="text-gray-500"
//     //             >
//     //               CEO
//     //             </p>
//     //           </div>
//     //         </div>
//     //         <div className="lg:w-1/3 sm:w-1/2 w-full mb-6 p-4 flex flex-col items-center">
//     //           <div className="h-full text-center">
//     //             <img
//     //               alt="testimonial"
//     //               className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//     //               src={shikhadidi}
//     //             />
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="leading-relaxed"
//     //             >
//     //               Yum Foods! from Hyper Foods.
//     //             </p>
//     //             <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
//     //             <h2
//     //               style={{ color: mode === "dark" ? "#ff4162" : "" }}
//     //               className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//     //             >
//     //               Shrikha Karki
//     //             </h2>
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="text-gray-500"
//     //             >
//     //               MD
//     //             </p>
//     //           </div>
//     //         </div>
//     //         <div className="lg:w-1/3 sm:w-1/2 w-full mb-6 p-4 flex flex-col items-center">
//     //           <div className="h-full text-center">
//     //             <img
//     //               alt="testimonial"
//     //               className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//     //               src={Krischal}
//     //             />
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="leading-relaxed"
//     //             >
//     //               Daily foods, Hyper Foods
//     //             </p>
//     //             <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
//     //             <h2
//     //               style={{ color: mode === "dark" ? "#ff4162" : "" }}
//     //               className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//     //             >
//     //               Krischal Shrestha
//     //             </h2>
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="text-gray-500"
//     //             >
//     //               Software Developer
//     //             </p>
//     //           </div>
//     //         </div>
//     //         <div className="lg:w-1/3 sm:w-1/2 w-full mb-6 p-4 flex flex-col items-center">
//     //           <div className="h-full text-center">
//     //             <img
//     //               alt="testimonial"
//     //               className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//     //               src={arpit}
//     //             />
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="leading-relaxed"
//     //             >
//     //               Hyper Foods 😋
//     //             </p>
//     //             <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
//     //             <h2
//     //               style={{ color: mode === "dark" ? "#ff4162" : "" }}
//     //               className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//     //             >
//     //               Arpit Adhikari
//     //             </h2>
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="text-gray-500"
//     //             >
//     //               Software Developer
//     //             </p>
//     //           </div>
//     //         </div>
//     //         <div className="lg:w-1/3 sm:w-1/2 w-full mb-6 p-4 flex flex-col items-center">
//     //           <div className="h-full text-center">
//     //             <img
//     //               alt="testimonial"
//     //               className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//     //               src={devashish}
//     //             />
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="leading-relaxed"
//     //             >
//     //               Yum Yum Yum Yum Yum Yum Yum 😋
//     //             </p>
//     //             <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
//     //             <h2
//     //               style={{ color: mode === "dark" ? "#ff4162" : "" }}
//     //               className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
//     //             >
//     //               Devashish Poudel
//     //             </h2>
//     //             <p
//     //               style={{ color: mode === "dark" ? "white" : "" }}
//     //               className="text-gray-500"
//     //             >
//     //               Designer
//     //             </p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     // </div>

//     <div>

//     </div>
//   );
// }

// export default Testimonial;

import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">
                2,157 people have said how good Rareblocks
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
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
                {/* Testimonial 1 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
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
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.”
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        alt="Leslie Alexander"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Leslie Alexander
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600 font-pj">
                          Freelance React Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
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
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “Rareblocks has completely surpassed my expectations.
                          The best part is how intuitive and easy it is to use.”
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-1.png"
                        alt="Jenny Wilson"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Jenny Wilson
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600 font-pj">
                          Product Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
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
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “Rareblocks has completely surpassed my expectations.
                          The best part is how intuitive and easy it is to use.”
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-1.png"
                        alt="Jenny Wilson"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Jenny Wilson
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600 font-pj">
                          Product Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more testimonials here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
