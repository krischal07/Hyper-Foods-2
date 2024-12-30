import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

// function Order() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userid = user.uid;
//   // if (!userid) {
//   //   return <div>User not loggeed in</div>;
//   // }
//   console.log("userid", userid);
//   const context = useContext(myContext);
//   const { mode, loading, order } = context;
//   console.log("order", order, userid);
//   return (
//     <Layout>
//       {loading && <Loader />}
//       {order.length > 0 ? (
//         <>
//           <div className=" h-full pt-10">
//             {order
//               .filter((obj) => obj.userid == userid)
//               .map((order) => {
//                 // order.cartItems.map()
//                 return (
//                   <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//                     {order.cartItems.map((item) => {
//                       return (
//                         <div className="rounded-lg md:w-2/3">
//                           <div
//                             className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
//                             style={{
//                               backgroundColor: mode === "dark" ? "#282c34" : "",
//                               color: mode === "dark" ? "white" : "",
//                             }}
//                           >
//                             <img
//                               src={item.imageUrl}
//                               alt="product-image"
//                               className="w-full rounded-lg sm:w-40"
//                             />
//                             <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                               <div className="mt-5 sm:mt-0">
//                                 <h2
//                                   className="text-lg font-bold text-gray-900"
//                                   style={{
//                                     color: mode === "dark" ? "white" : "",
//                                   }}
//                                 >
//                                   {item.title}
//                                 </h2>
//                                 <p
//                                   className="mt-1 text-xs text-gray-700"
//                                   style={{
//                                     color: mode === "dark" ? "white" : "",
//                                   }}
//                                 >
//                                   {item.description}
//                                 </p>
//                                 <p
//                                   className="mt-1 text-xs text-gray-700"
//                                   style={{
//                                     color: mode === "dark" ? "white" : "",
//                                   }}
//                                 >
//                                   {item.price}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 );
//               })}
//           </div>
//         </>
//       ) : (
//         <h2 className=" text-center tex-2xl text-white">Not Order</h2>
//       )}
//     </Layout>
//   );
// }

// export default Order;

function Order() {
  console.log("Rendering Order component...");

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userid = user?.uid;
  console.log("userid", userid);

  if (!userid) {
    console.error("User is not logged in.");
    return <div>User not logged in</div>;
  }

  console.log("User ID:", userid);

  const context = useContext(myContext);

  if (!context) {
    console.error("Context is undefined. Ensure Provider is set up correctly.");
    return <div>Context not available</div>;
  }

  const { mode, loading, order } = context;

  console.log("Context data:", { mode, loading, order });

  if (loading) {
    return <Loader />;
  }

  if (!order || order.length === 0) {
    return <h2 className="text-center tex-2xl text-black">No Orders</h2>;
  }

  const userOrders = order.filter((obj) => obj.userId.uid === userid);
  console.log("userOrders", userOrders);
  if (userOrders.length === 0) {
    return <h2 className="text-center tex-2xl text-black">No Orders</h2>;
  }

  return (
    <Layout>
      <div className="h-full pt-10">
        {userOrders.map((order) => (
          <div
            className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
            key={order.id}
          >
            {order.orderId ? <h1>{order.orderId}</h1> : <div>No order id</div>}
            {order.cartItems?.map((item) => (
              <div className="rounded-lg md:w-2/3" key={item.id}>
                <div
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start 0"
                  style={{
                    backgroundColor: mode === "dark" ? "#282c34" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2
                        className="text-lg font-bold text-gray-900"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        {item.title}
                      </h2>
                      <p
                        className="mt-1 text-xs text-gray-700"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        {item.description}
                      </p>
                      <p
                        className="mt-1 text-xs text-gray-700"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        {item.price}
                      </p>
                    </div>
                    <div>
                      <p>Quantity</p>
                      <h2 className="flex justify-center">{item.quantity}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Order;
