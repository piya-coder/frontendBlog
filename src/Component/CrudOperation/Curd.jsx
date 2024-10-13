import React, { useState } from 'react'
import BlogDetails from './BlogDetails';
const Curd = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    ///usestate functionality start here===============
    const [InputValue, setInputValue] = useState({
        Title: "",
        Description: "",
        Author: "",
    });


    ///HandleInputValue====
    const HandleInputValue = (e) => {
        setInputValue({
            ...InputValue,
            [e.target.id]: e.target.value
        })
        console.log(e.target.id);
    }
    ///HandleSubmitBlog functionality implementation
    const HandleSubmitBlog = () => {
        console.log("hello");

    }


    return (
        <>
            <h1 className=' text-black text-2xl font-bold uppercase text-center mb-3 ' >crud operation</h1>
            <div className=' flex justify-between items-center bg-slate-400 h-[680px]  ' >
                <div className='  flex justify-center items-center text-center w-[600px] ' >
                    <div className='flex flex-col justify-center items-center text-center w-full' >
                        <form onSubmit={handleSubmit}>
                            <div className='mt-5'>
                                <input type="text"
                                    id='title'
                                    name='title'
                                    placeholder='Title'

                                    autoComplete='off'
                                    onChange={HandleInputValue}

                                    className='w-full mt-3 bg-red-400 px-[30px] py-6 text-White font-bold text-xl inputField' />
                            </div>
                            <div className='mt-5'>
                                <input type="text"
                                    id='description'
                                    name='description'

                                    placeholder='Description'
                                    autoComplete='off'
                                    onChange={HandleInputValue}
                                    className='w-full mt-3 bg-red-400 px-[30px] py-6 text-White font-bold text-xl inputField' />
                            </div>
                            <div className='mt-5'>

                                <input type="text"
                                    id='Name'
                                    name='Name'
                                    placeholder='Author Name'
                                    autoComplete='off'
                                    onChange={HandleInputValue}
                                    className='w-full mt-3 bg-red-400 px-[30px] py-6 text-White font-bold text-xl inputField' />
                            </div>
                            <button
                                type='submit'

                                className=' w-[70%] mt-6 bg-blue-600 px-12 py-5
                        text-white font-semibold text-xl capitalize ' onClick={HandleSubmitBlog} >submit blog</button>
                        </form>
                    </div>
                </div>
                <div className='bg-red-400 w-[600px] h-[680px] flex justify-start px-[40px] py-[30px] text-start flex-col gap-6 overflow-y-scroll '>
                    <div className='bg-white px-[20px] py-[10px] h-[90px]  ' >
                        <div className='flex justify-start items-center align-middle '>
                            <div className='capitalize text-black text-small font-semi-bold mr-[60px] ' >
                                <p> title : hello </p>
                                <p>description : mern stack  </p>
                                <p>author Name : taufik islam </p>
                            </div>
                            <div className=' flex justify-end gap-[10px] '>
                                <button className='bg-red-400 px-4 py-2 capitalize' >edit</button>
                                <button className='bg-green-400 px-4 py-2 capitalize '>delete</button>
                            </div>
                        </div>
                    </div>
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                    <BlogDetails />
                </div>
            </div>
        </>
    )
}

export default Curd
