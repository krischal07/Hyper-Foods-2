// import React, { useContext } from "react";
// import myContext from "../../context/data/myContext";
// import Layout from "../../components/layout/Layout";
// import Loader from "../../components/loader/Loader";

// function Order() {
//   console.log("Rendering OrderTableWithDateAndTime component...");

//   const user = JSON.parse(localStorage.getItem("user") || "{}");
//   const userid = user?.uid;
//   console.log("userid", userid);

//   if (!userid) {
//     console.error("User is not logged in.");
//     return <div>User not logged in</div>;
//   }

//   const context = useContext(myContext);

//   if (!context) {
//     console.error("Context is undefined. Ensure Provider is set up correctly.");
//     return <div>Context not available</div>;
//   }

//   const { mode, loading, order } = context;

//   if (loading) {
//     return <Loader />;
//   }

//   if (!order || order.length === 0) {
//     return <h2 className="text-center tex-2xl text-black">No Orders</h2>;
//   }

//   // Filter orders for the current user and sort by date (latest first)
//   const userOrders = order
//     .filter((obj) => obj.userId.uid === userid)
//     .sort((a, b) => new Date(b.date) - new Date(a.date));

//   if (userOrders.length === 0) {
//     return <h2 className="text-center tex-2xl text-black">No Orders</h2>;
//   }

//   return (
//     <Layout>
//       <div className="h-full pt-10">
//         <table className="table-auto w-full border-collapse border border-black">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-black px-4 py-2">Order ID</th>
//               <th className="border border-black px-4 py-2">Date & Time</th>
//               <th className="border border-black px-4 py-2">Item</th>
//               <th className="border border-black px-4 py-2">Price</th>
//               <th className="border border-black px-4 py-2">Quantity</th>
//               <th className="border border-black px-4 py-2">Total Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userOrders.map((order) => (
//               <React.Fragment key={order.id}>
//                 {order.cartItems?.map((item, index) => (
//                   <tr
//                     key={item.id}
//                     className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
//                   >
//                     {index === 0 && (
//                       <>
//                         <td
//                           className="border border-black px-4 py-2 text-center"
//                           rowSpan={order.cartItems.length}
//                         >
//                           {order.orderId || "No Order ID"}
//                         </td>
//                         <td
//                           className="border border-black px-4 py-2 text-center"
//                           rowSpan={order.cartItems.length}
//                         >
//                           {new Date(order.date).toLocaleString() || "N/A"}
//                         </td>
//                       </>
//                     )}
//                     <td className="border border-black px-4 py-2">
//                       <div className="flex items-center">
//                         <img
//                           src={item.imageUrl}
//                           alt="Product"
//                           className="w-12 h-12 rounded-lg mr-4"
//                         />
//                         <span>{item.title}</span>
//                       </div>
//                     </td>
//                     <td className="border border-black px-4 py-2 text-center">
//                       Rs {item.price}
//                     </td>
//                     <td className="border border-black px-4 py-2 text-center">
//                       {item.quantity}
//                     </td>
//                     <td className="border border-black px-4 py-2 text-center">
//                       Rs {item.price * item.quantity}
//                     </td>
//                   </tr>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Layout>
//   );
// }

// export default Order;

import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Order() {
  console.log("Rendering OrderTableWithDateAndTime component...");

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userid = user?.uid;
  console.log("userid", userid);

  if (!userid) {
    console.error("User is not logged in.");
    return <div>User not logged in</div>;
  }

  const context = useContext(myContext);

  if (!context) {
    console.error("Context is undefined. Ensure Provider is set up correctly.");
    return <div>Context not available</div>;
  }

  const { mode, loading, order } = context;

  if (loading) {
    return <Loader />;
  }

  if (!order || order.length === 0) {
    return <h2 className="text-center tex-2xl text-black">No Orders</h2>;
  }

  // Filter orders for the current user and sort by date (latest first)
  const userOrders = order
    .filter((obj) => obj.userId.uid === userid)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (userOrders.length === 0) {
    return <h2 className="text-center tex-2xl text-black">No Orders</h2>;
  }

  return (
    <Layout>
      <div className="h-full pt-10">
        <table className="table-auto w-full border-collapse border border-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black px-4 py-2">Order ID</th>
              <th className="border border-black px-4 py-2">Date & Time</th>
              <th className="border border-black px-4 py-2">Item</th>
              <th className="border border-black px-4 py-2">Price</th>
              <th className="border border-black px-4 py-2">Quantity</th>
              <th className="border border-black px-4 py-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((order) => {
              // Calculate total price for each order
              const totalOrderPrice = order.cartItems?.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              );

              return (
                <React.Fragment key={order.id}>
                  {order.cartItems?.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      {index === 0 && (
                        <>
                          <td
                            className="border border-black px-4 py-2 text-center"
                            rowSpan={order.cartItems.length}
                          >
                            {order.orderId || "No Order ID"}
                          </td>
                          <td
                            className="border border-black px-4 py-2 text-center"
                            rowSpan={order.cartItems.length}
                          >
                            {order.addressInfo.date || "N/A"}
                          </td>
                        </>
                      )}
                      <td className="border border-black px-4 py-2">
                        <div className="flex items-center">
                          <img
                            src={item.imageUrl}
                            alt="Product"
                            className="w-12 h-12 rounded-lg mr-4"
                          />
                          <span>{item.title}</span>
                        </div>
                      </td>
                      <td className="border border-black px-4 py-2 text-center">
                        Rs {item.price}
                      </td>
                      <td className="border border-black px-4 py-2 text-center">
                        {item.quantity}
                      </td>
                      <td className="border border-black px-4 py-2 text-center">
                        Rs {item.price * item.quantity}
                      </td>
                    </tr>
                  ))}

                  <td
                    colSpan="5"
                    className="border border-black px-4 py-2 text-right font-bold"
                  >
                    Total Price:
                  </td>
                  <td className="0 px-4 py-2 text-center font-bold">
                    Rs {totalOrderPrice || 0}
                  </td>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Order;
