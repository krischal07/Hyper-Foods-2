import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div >     
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Hyper Foods</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>From the <span className=' text-red-500'>Team</span> </h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="src/assets/ayush dai.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Foods from Hyper is happy mood.</p>
                                <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ayush Poudel</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">CEO</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="src/assets/shikhadidi.jpeg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Yum Foods! from Hyper Foods.</p>
                                <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Shrikha Karki</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">MD</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="src/assets/krischal.jpeg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Daily foods, Hyper Foods</p>
                                <span className="inline-block h-1 w-10 rounded bg-red-600 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Krischal Shrestha</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial

// style={{ backgroundColor: '#6F3434', minHeight: '100vh' }}

// code for menu 1
// import React, { useContext } from 'react'
// import myContext from '../../context/data/myContext'

// function Menu() {
//     const context = useContext(myContext)
//     const { mode } = context

//     return (
//         <div>
//             <section className="text-gray-600 body-font mb-10">
//                 <div className="container px-5 py-10 mx-auto">
//                     <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Our Menu</h1>
//                     <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Explore our <span className=' text-red-500'>delicious</span> offerings</h2>
//                     <div className="flex flex-wrap -m-4">
//                         <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//                             <div className="h-full text-center">
//                                 <img alt="menu-item" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://via.placeholder.com/150" />
//                                 <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Delicious pizza with fresh ingredients</p>
//                                 <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
//                                 <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Pizza</h2>
//                                 <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">$12.99</p>
//                             </div>
//                         </div>
//                         <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//                             <div className="h-full text-center">
//                                 <img alt="menu-item" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://via.placeholder.com/150" />
//                                 <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Freshly grilled chicken with a side of veggies</p>
//                                 <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
//                                 <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Grilled Chicken</h2>
//                                 <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">$10.99</p>
//                             </div>
//                         </div>
//                         <div className="lg:w-1/3 lg:mb-0 p-4">
//                             <div className="h-full text-center">
//                                 <img alt="menu-item" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://via.placeholder.com/150" />
//                                 <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Tasty vegan burger served with fries</p>
//                                 <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
//                                 <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Vegan Burger</h2>
//                                 <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">$8.99</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Menu


// code for menu 2 option
// import React, { useContext } from 'react';
// import myContext from '../../context/data/myContext';

// function Menu() {
//     const context = useContext(myContext);
//     const { mode } = context;

//     // Conversion rate from USD to NRP
//     const usdToNrp = 133;

//     // Sample menu items
//     const menuItems = [
//         { name: 'Pizza', priceInUsd: 12.99 },
//         { name: 'Grilled Chicken', priceInUsd: 10.99 },
//         { name: 'Vegan Burger', priceInUsd: 8.99 },
//     ];

//     return (
//         <div>
//             <section className="text-gray-600 body-font mb-10">
//                 <div className="container px-5 py-5 mx-auto"> 
//                     <h1 className='text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Our Menu</h1>
//                     <h2 className='text-center text-2xl font-semibold mb-6' style={{ color: mode === 'dark' ? 'white' : '' }}>Explore our <span className='text-red-500'>delicious</span> offerings</h2>
//                     <div className="flex flex-wrap -m-2"> 
//                         {menuItems.map((item, index) => (
//                             <div key={index} className="lg:w-1/3 lg:mb-0 mb-4 p-4"> 
//                                 <div className="h-full text-center">
//                                     <img
//                                         alt={item.name}
//                                         className="w-32 h-32 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
//                                         src="https://via.placeholder.com/150"
//                                     />
//                                     <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">{item.name}</h2>
//                                     <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">
//                                         Rs.{(item.priceInUsd * usdToNrp).toFixed(0)}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Menu;
