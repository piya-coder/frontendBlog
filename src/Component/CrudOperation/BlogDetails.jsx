import React from 'react'

const BlogDetails = () => {
    return (
        <>
            <div className='bg-white px-[20px] py-[10px] h-[90px]  ' >
                <div className='flex justify-start items-center align-middle '>
                    <div className='capitalize text-black text-small font-semi-bold mr-[60px] ' >
                        <p>title : today's live session</p>
                        <p>description : MERN stack </p>
                        <p>author Name : Taufik Islam</p>
                    </div>
                    <div className=' flex justify-end gap-[10px] '>
                        <button className='bg-red-400 px-4 py-2 capitalize' >edit</button>
                        <button className='bg-green-400 px-4 py-2 capitalize '>delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails
