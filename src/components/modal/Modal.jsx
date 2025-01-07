import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import nabil from "../../assets/nabilqr.jpeg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Modal({
  name,
  address,
  phone,
  setName,
  setAddress,
  setPhone,
  buyNow,
  setTransaction,
}) {
  let [isOpen, setIsOpen] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showQR, setshowQr] = useState(null);

    const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="  text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full  bg-yellow-500 py-2 text-center rounded-lg text-white font-bold bg-green-600"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Name
                              </label>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                name="name"
                                id="name"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Address
                              </label>
                              <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                name="address"
                                id="address"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            
                          </form>
                          <button
                            onClick={() => {
                              if (
                                name === "" ||
                                phone === "" ||
                                address === ""
                              ) {
                                return toast.error("All fields are requied");
                              } 
                              
                              const phoneRegex = /^[0-9]{10}$/; // Allows only 10-digit numbers
                               if (!phoneRegex.test(phone)) {
                                 return toast.error("Please enter a valid 10-digit mobile number");
                                  }

                              else {
                              }
                              setShowPaymentOptions(true);
                            }}
                            type="button"
                            className="focus:outline-none w-full text-white bg-violet-600 bg-green-600 hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 "
                          >
                            Order Now
                          </button>

                          {showPaymentOptions && (
                            <div className="flex justify-evenly">
                              <button
                                onClick={() => {
                                  setTransaction("bank");
                                  // buyNow();
                                  setshowQr(true);
                                  // closeModal();
                                }}
                                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                type="button"
                              >
                               <i class="fas fa-university"></i> 
                              </button>

                              <button
                                onClick={() => {
                                  setTransaction("cod");
                                  buyNow();
                                  closeModal();
                                  setTimeout(() => {
                                    window.location.href = "/order";
                                    // localStorage.clear("cart");
                                  }, 6000);
                                  localStorage.removeItem("cart");
                                }}
                                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                type="button"
                              >
                                <i class="fas fa-wallet"></i>
                              </button>
                            </div>
                          )}

                          {showQR && (
                            <div className="mt-4">
                              <img src={nabil} alt="bankqr" srcset="" />
                              <button
                                onClick={() => {
                                  buyNow();
                                  closeModal();
                                  navigate("/order");
                                }}
                                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold rounded-lg text-lg py-2 mt-4 w-full text-center"
                              >
                                Done
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
