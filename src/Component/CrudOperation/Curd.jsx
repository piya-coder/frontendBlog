
// eslint-disable-next-line no-unused-vars
import React , { useEffect, useState } from 'react'
import axios from "axios"



const Curd = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    ///usestate functionality start here===============
    const [InputValue, setInputValue] = useState({
        title: "",
        description: "",
        authorName: "",
    });
    const [ allauthorDAta  , setallauthorDAta] = useState([]);

    /// ================================= useEffect functionality implementation  =========================
    useEffect(() => {
        const allData = async () => {
            try {
                const responseData = await axios.get("http://localhost:4000/getAllblog");
                setallauthorDAta(responseData?.data?.data);

            } catch (error) {
                console.log(error);

            }

        }
        allData();
    }, []);


    ///HandleInputValue====
    const HandleInputValue = async (event) => {
        const { id, value } = event.target
        setInputValue({
            ...InputValue,
            [id]: value,
        })
    }
    ///HandleSubmitBlog functionality implementation
    const HandleSubmitBlog = async () => {
        const { title, description, authorName } = InputValue;
        // Make a request for a user with a given ID
        axios.post('http://localhost:4000/createBlog', {
            "title": title,
            "description": description,
            "authorName": authorName
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
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
                                    placeholder='title'
                                    autoComplete='off'
                                    value={InputValue.title}
                                    onChange={HandleInputValue}
                                    className='w-full mt-3 bg-red-400 px-[30px] py-6 text-White font-bold text-xl inputField' />
                            </div>
                            <div className='mt-5'>
                                <input type="text"
                                    id='description'
                                    name='description'
                                    placeholder='Description'
                                    autoComplete='off'
                                    value={InputValue.description}
                                    onChange={HandleInputValue}
                                    className='w-full mt-3 bg-red-400 px-[30px] py-6 text-White font-bold text-xl inputField' />
                            </div>
                            <div className='mt-5'>

                                <input type="text"
                                    id='authorName'
                                    name='Author'
                                    placeholder='Author Name'
                                    autoComplete='off'
                                    value={InputValue.authorName}
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
                {allauthorDAta?.map((item)=>(

                ))}

               

            </div>
        </>
    )
}

export default Curd
