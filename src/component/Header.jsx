
import React, { useState } from 'react'
import img1 from "./../assets/img/a82dc765c699d74d33d41d7fdaa4e4faf69ed3ae_1707545885.webp"
import logo from "./../assets/img/logo.svg"
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { menubaghal, menuchild } from './Details/Details';
import { LocationCity, LocationCitySharp } from '@mui/icons-material';

const Header = () => {
    const [state1, setstate1] = useState(null)
    const [state2 , setstate2] = useState(false)

    return (
        <React.Fragment>
            <div className='w-full'>
                <a href="#">
                    <figure className='h-14 w-full overflow-hidden  '>
                        <img src={img1} className='w-full' alt="" />
                    </figure>
                </a>

            </div>
            <div className='w-full'>
                <div className='container mx-auto'>
                    <div className="flex justify-between py-4">
                        <div className='flex items-center'>
                            <div className='logo'>
                                <figure>
                                    <img src={logo} alt="" />
                                </figure>
                            </div>
                            <div className='px-7'>
                                <div className='px-7 py-1 relative bg-[#F0F0F1] rounded-md'>
                                    <SearchIcon />
                                    <input type="text" value={state1} onChange={(e) => setstate1(e.target.value)} className='px-3 py-1 bg-transparent outline-none text-s' placeholder='جستجو' name="" id="" />
                                    {state1 && <CancelIcon style={{fontSize:"15px"}} className='absolute top-[50%] translate-y-[-50%] cursor-pointer' onClick={(e) => setstate1('')} />}

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <a href='/home' className='flex justify-center items-center border border-black cursor-pointer rounded-md px-3 py-1 text-s'>

                                <LoginIcon className="mx-1 text-xs" style={{ fontSize: "18px" }} />
                                <p>
                                    ورود
                                </p>
                                <span className='mx-2'>|</span>
                                <p>
                                    ثبت نام
                                </p>
                            </a>
                            <div className='mx-2'>|</div>
                            <div>
                                <div className='shop'>
                                    <ShoppingCartIcon />
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-start'>
                            {menuchild.map((item) => {
                                return (
                                    <div key={item.id} className='flex mx-2 relative text-s items-center cursor-pointer after:absolute after:content-[""] after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-0 hover:after:w-full duration-300 after:duration-300 after:flex' >

                                        <div className='mx-1'>
                                            <i className='' style={{ fontSize: "2px" }}>
                                                {item.icon}
                                            </i>
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>


                                )
                            })}
                            <span className='mx-2'>|</span>
                            <div className='flex items-center'>


                                {menubaghal.map((item) => {
                                    return (
                                        <div className='mx-2 text-s cursor-pointer  after:flex after:content-[""] relative after:w-0 after:absolute  after:left-0 after:bottom-[-3px] after:h-[2px] after:duration-300 after:bg-red-500 hover:after:w-full duration-300'>
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className='relative'>
                            <a className='flex items-center group relative ' onMouseEnter={()=>setstate2(!state2)} onMouseLeave={()=>setstate2(!state2)} href='#'>
                                <div>
                                    <LocationCitySharp />
                                </div>

                                <div className='text-s  flex items-center mx-2'>
                                    لطفا شهر خود را وارد کنید
                                </div>
                                

                            </a>
                                {state2 && <ul className='flex absolute  w-full left-0 top-[100%] bg-slate-700 text-white p-2'>
                                    <li className='text-s'>
                                لطفا شهر خود را انتخاب کنید
                                    </li>

                                </ul>}

                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Header