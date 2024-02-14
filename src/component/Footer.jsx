
import React from 'react'
import { menuFooter, menuFooter3, menuFooter4, menuFoter1, menuFoter2 } from './Details/Details'
import digi from "./../assets/img/digi.svg"
const Footer = () => {
    return (
        <React.Fragment>
            <div className='w-full  '>
                <div className='container mx-auto'>
                    <div className='flex justify-between p-5'>
                        <figure>
                            <img src={digi} className='w-[60%]' alt="" />
                        </figure>
                        <div className='flex justify-center py-1 items-center rounded-md px-3 border border-black'>
                            <span className='me-1'>
                                بازگشت به بالا
                            </span>
                            <i className='bi bi-arrow-up-short text-xl flex items-center justify-center'>

                            </i>
                        </div>

                    </div>
                    <div className='flex p-5'>
                        <ul className='flex items-center'>
                            <li className='text-sm'>
                                <p>تلفن پشتیبانی 02161930000</p>
                            </li>
                            <span className='mx-4 flex justify-center items-center'>
                                |
                            </span>
                            <li>
                                <p>
                                    021-91000100
                                </p>
                            </li>
                            <span className='mx-4 flex items-center justify-center'>
                                |
                            </span>
                            <li>
                                <p>7 روز هفته , 24 ساعته پاسخگوی شما عزیزان هستیم</p>
                            </li>
                        </ul>

                    </div>
                    <div className='flex justify-around p-5'>
                        {
                            menuFooter.map((item) => {
                                return (
                                    <div >
                                        <figure>

                                            <img src={item.image} alt="" />
                                            <figcaption>
                                                <p>
                                                    {item.detail}
                                                </p>
                                            </figcaption>
                                        </figure>


                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='flex justify-around p-5'>


                        <ul className=''>
                            <li className='text-2xl text-rose-600 py-5'>
                                با دیجی کالا
                            </li>
                            {menuFoter1.map((item) => {
                                return (
                                    <li key={item.id} className='py-1'>
                                        {item.detail}
                                    </li>
                                )
                            })}


                        </ul>
                        
                        <ul className=''>
                            <li className='text-2xl text-rose-600 py-5'>
                                خدمات مشتریان
                            </li>
                            {menuFoter2.map((item) => {
                                return (
                                    <li key={item.id} className='py-1'>
                                        {item.detail}
                                    </li>
                                )
                            })}


                        </ul>
                        
                        <ul className=''>
                            <li className='text-2xl text-rose-600 py-5'>
                                راهنمای خرید از دیجی کالا 
                            </li>
                            {menuFooter3.map((item) => {
                                return (
                                    <li key={item.id} className='py-1'>
                                        {item.detail}
                                    </li>
                                )
                            })}


                        </ul>
                        
                        <ul className=''>
                            <li className='text-2xl text-rose-600 py-5'>
                                همراه ما باشید 
                            </li>
                            {menuFooter4.map((item) => {
                                return (
                                    <i key={item.id} className={item.iconsrc+' text-2xl mx-2'}>
                                        
                                    </i>
                                )
                            })}


                        </ul>
                        
                        
                    </div>

                </div>

            </div>

        </React.Fragment>
    )
}

export default Footer