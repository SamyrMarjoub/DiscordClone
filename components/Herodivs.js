import React from 'react'
import Image from 'next/image'
import ilu1 from '../public/ilus1.svg'
import ilu2 from '../public/ilu2.svg'
import ilu3 from '../public/ilu3.svg'
import ilu4 from '../public/ilu4.svg'
import { FaDownload } from 'react-icons/fa'

export default function Herodivs() {
    return (
        <>
            <div className='w-full flex justify-center bg-white'>

                <div className='w-[1200px] flex flex-col '>

                    <div className='w-full smalltablets:flex-col flex mt-[100px] pb-[100px]'>
                        <div className='w-[65%] smalltablets:w-full queryH:w-[50%]'>
                            <Image alt='' className='w-[100%]' src={ilu1} />
                        </div>
                        <div className='w-[35%] queryH:w-[50%] smalltablets:w-full flex flex-col items-center justify-center '>
                            <h1 className='text-black queryH:max-w-[90%] smalltablets:leading-9  mobile:text-start smalltablets:text-[30px] font2 font-bold text-[48px] tracking-tight leading-[60px]'>Create an invite-only place where you belong</h1>
                            <p className='leading-8 mobile:text-justify queryH:max-w-[90%] text-[20px] mt-5 text-[#23272a]'>Discord servers are organized
                                into topic-based channels where you can collaborate,
                                share, and just talk about your day without clogging up a group chat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f6f6f6] h-auto flex justify-center w-full '>

                <div className='w-[1200px] h-auto flex flex-col'>

                    <div className='w-full h-auto flex mt-[100px] smalltablets:flex-col  pb-[100px] flex-row-reverse'>
                        <div className='w-[65%] queryH:w-[50%] smalltablets:w-full h-auto flex justify-end'>
                            <Image className='text-end' alt='' src={ilu2} />
                        </div>
                        <div className='w-[35%] queryH:w-[50%] smalltablets:w-full flex flex-col smalltablets:items-center smalltablets:justify-center justify-center '>
                            <h1 className='text-black font2 max-w-none w-full  mobile:text-start smalltablets:text-[30px]
                            font-bold text-[48px]  queryH:pt-0 smalltablets:p-0   queryH:pb-0 queryH:p-10 queryH:max-w-[90%] tracking-tight leading-[60px]'>Where hanging out is easy</h1>
                            <p className='leading-8 mobile:text-justify smalltablets:p-0  queryH:p-10 queryH:pt-0 queryH:max-w-[90%] text-[20px] mt-5 text-[#23272a]'>Grab a seat in a voice channel when you’re free.
                                Friends in your server can see you’re around and instantly pop in to talk without having to call..</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='w-full flex justify-center bg-white'>

                <div className='w-[1200px] mobile:items-center  flex flex-col '>

                    <div className='w-[100%] mobile:w-[90%] flex smalltablets:flex-col mt-[100px] pb-[100px]'>
                        <div className='w-[65%] smalltablets:w-full queryH:w-[50%]'>
                            <Image alt='' className='w-full' src={ilu3} />
                        </div>
                        <div className='w-[35%] queryH:w-[50%] smalltablets:w-full smalltablets:items-center smalltablets:justify-center flex flex-col justify-center '>
                            <h1 className='text-black smalltablets:text-[30px] queryH:max-w-[90%] font2 font-bold text-[48px] mobile:w-full mobile:max-w-none mobile:text-start tracking-tight leading-[60px]'>From few to a fandom</h1>
                            <p className='leading-8 mobile:max-w-full mobile:text-justify queryH:max-w-[90%] text-[20px] mt-5 text-[#23272a]'>Get any community running with moderation tools and custom
                                member access. Give members special powers, set up private channels, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center bg-[#f6f6f6] pb-[100px]'>
                <div className='w-[1200px] queryH:w-[90%] flex flex-col mt-[100px] '>
                    <div className='w-full flex justify-center flex-col items-center'>

                        <h2 className='text-[48px] smalltablets:text-[30px] mobile:max-w-[600px] mobile:text-start  font2 font-bold text-center'>
                            RELIABLE TECH FOR STAYING CLOSE

                        </h2>
                        <p className='text-[20px] mobile:text-justify text-[#23272a] max-w-[900px] text-center'>
                            Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                        </p>
                    </div>
                    <div className='w-full'>
                        <Image src={ilu4} className='w-full' alt='' />
                    </div>

                    <div className='mt-[100px] w-full flex-col items-center flex justify-center'>
                        <div className={`w-[500px] smalltablets:w-[90%] bg-[url(../public/estrelas.svg)] flex justify-center items-center bg-contain bg-no-repeat h-[60px]`}>
                            <span className='font-bold text-[30px] text-center'>Ready to start your journey</span>
                        </div>
                        <div className='w-[500px] smalltablets:w-[100%] mt-[30px] flex justify-center'>
                            <button className='flex relative justify-center smalltablets:text-center items-center bg-[#5865f2]
                             text-white w-[60%] text-[18px] h-[50px] rounded-[30px]'>
                                <FaDownload className='absolute smalltablets:hidden left-11 top-4' /> <span className='absolute smalltablets:static smalltablets:text-[90%] right-9'>Download for Windows</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
