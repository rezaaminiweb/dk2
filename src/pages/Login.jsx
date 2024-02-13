import React from 'react'
import logo from "./../assets/img/logo.svg"

const Login = () => {
    return (
        <div className='w-full'>
            <div className="container mx-auto">
                <div className="w-full h-screen flex justify-center items-center">

                    <div className='px-8 py-7 rounded-md border-[#0000006a]  border'>
                        <div className='flex justify-center'>
                            <figure>
                                <img src={logo} alt="" />

                            </figure>
                        </div>
                        <div className='flex py-2 font-bold text-sm'>
                            <p>ورود</p>
                            <span className='mx-3'>|</span>
                            <p className='' >ثبت نام</p>
                        </div>
                        <div className='py-5 text-sw'>
                            <p>سلام!</p>
                            <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید

                            </p>
                        </div>
                        <form action="" className=''>
                            <input type="text" className='block p-2 text-sl w-full outline-none border rounded-md border-red-600' id='Name' />
                            <label htmlFor="Name" className='text-sl'>لطفا این قسمت را خالی نگذارید


                            </label>
                            <div className='py-5'>
                            <button className='w-full bg-[#EF4056] rounded-md text-white py-3'>
                                ورود
                                
                            </button>
                            <p className='text-s py-4 w-[100%]'>ورود شما به معنای پذیرش <a href="" className='text-[#4297B7]'>شرایط دیجی‌کالا</a> و <a href="" className='text-[#4297B7]'>قوانین حریم‌</a>خصوصیاست</p>
                            </div>
                        </form>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login