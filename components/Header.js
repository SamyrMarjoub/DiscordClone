import React from 'react'
import { FaDiscord } from 'react-icons/fa'

export default function header() {
    return (
        <div className='w-[1200px]'>
            <div className='flex justify-between h-[70px] w-full'>
                <div className='w-[10%] flex items-center justify-center'>
                    <FaDiscord className='text-[35px] text-white' />
                    <h1 className='text-white font-bold text-[20px] pl-2 fonte'>Discord</h1>
                </div>
                <div className='w-[80%]  '>
                    <ul className='items-center h-full flex justify-center'>
                        <li className='inline p-3 font-bold text-white'>Download</li>
                        <li className='inline p-3 font-bold text-white'>Nitro</li>
                        <li className='inline p-3 font-bold text-white'>Discover</li>
                        <li className='inline p-3 font-bold text-white'>Safety</li>
                        <li className='inline p-3 font-bold text-white'>Support</li>
                        <li className='inline p-3 font-bold text-white'>Blog</li>
                        <li className='inline p-3 font-bold text-white' >Careers</li>

                    </ul>
                </div>
                <div className='w-[10%] flex items-center  bg-red'>
                    <button className='w-full h-[40px] rounded-3xl bg-white text-[14px] text-blackwhite '>Open Discord</button>
                </div>

            </div>
        </div>

    )
}
