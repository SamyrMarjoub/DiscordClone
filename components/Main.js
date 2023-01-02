import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Mainimgs from '../components/Mainimgs'
import Image from 'next/image'
import img2 from '../public/img1.svg'
export default function Main() {
    return (
        <div className='w-full relative overflow-hidden disconuvem flex justify-center items-center'>
            <div className='w-[1200px] relative'>
                <main className={`min-h-[550px] relative mobile:p-5 tablets:min-h-[700px] query:items-start query:p-10  smalltablets:justify-start  W-full flex flex-col items-center justify-center`}>
                    <h1 className='text-[70px] smalltablets:mt-[30px] smallmobile:max-w-sm smallmobile:text-center  query:max-w-[500px] smalltablets:text-[30px] query:text-start query:leading-[60px] fontBold text-center font-bold text-white'>IMAGINE A PLACE...</h1>
                    <p className='text-white mobile:text-[13px] smallmobile:max-w-sm smallmobile:text-center query:mt-[30px] smalltablets:mt-0 query:text-start max-w-2xl tracking-wide font-semibold text-center'>
                        ...where you can belong to a school club, a gaming group, or a worldwide art community.
                        Where just you and a handful of friends can spend time together.
                        A place that makes it easy to talk every day and hang out more often.
                    </p>
                    <div className='flex query:flex-col  mt-6'>
                        <button className='w-[300px] mr-3 flex items-center
                 justify-center bg-white relative  h-[50px] rounded-3xl'> <FaDownload className='absolute left-[40px]' />  Download for Windows</button>
                        <button className='w-[300px] query:mt-5 bg-[#23272a]  h-[50px] text-white rounded-3xl' >Open Discord in your Browser</button>

                    </div>
                    <Image className='absolute hidden smalltablets:block bottom-0 left-[-50px]' src={img2} alt='' width={600} />

                  
                </main>

            </div>
            <Mainimgs />

        </div>


    )
}
