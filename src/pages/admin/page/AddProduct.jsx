import React from 'react'

function AddProduct() {
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-blue-950 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            className=' bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none'
                            placeholder='Title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            className=' bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none'
                            placeholder='Price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            className=' bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none'
                            placeholder='ImageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            className=' bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none'
                            placeholder='Category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                            className=' bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none'
                            placeholder='Description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            className=' bg-white w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct