import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Mainimgs from '../components/Mainimgs'

export default function Main() {
    return (
        <div className='w-full relative flex justify-center items-center'>
            <div className='w-[1200px] relative'>
                <main className={`h-[550px] W-full flex flex-col items-center justify-center`}>
                    <h1 className='text-[70px] fontBold text-center font-bold text-white'>IMAGINE A PLACE...</h1>
                    <p className='text-white max-w-2xl tracking-wide font-semibold text-center'>
                        ...where you can belong to a school club, a gaming group, or a worldwide art community.
                        Where just you and a handful of friends can spend time together.
                        A place that makes it easy to talk every day and hang out more often.
                    </p>
                    <div className='flex mt-6'>
                        <button className='w-[300px] mr-3 flex items-center
                 justify-center bg-white relative  h-[50px] rounded-3xl'> <FaDownload className='absolute left-[40px]' />  Download for Windows</button>
                        <button className='w-[300px] bg-[#23272a]  h-[50px] text-white rounded-3xl' >Open Discord in your Browser</button>

                    </div>
                </main>

            </div>
            <Mainimgs />

        </div>


    )
}
