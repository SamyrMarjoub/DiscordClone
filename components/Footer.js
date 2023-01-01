import React from 'react'
import BrazilFlag from '../public/brazilicon.png'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='bg-[#23272a]  flex justify-center h-[500px] w-full'>
            <div className='w-[1200px] h-[65%] flex-col  mt-[50px] flex'>
                <div className='flex w-full pb-[30px]  border-b border-b-[#5865f2]'>
                    <div className='flex flex-col  items-start w-[30%]'>
                        <h3 className='text-[40px] max-w-[300px] leading-10 font-bold text-[#5865f2]'>IMAGINE A PLACE</h3>
                        <div className='flex w-full mt-5 items-center '>
                            <div className='mr-[10px]'>
                                <Image alt='' width={30} src={BrazilFlag} />

                            </div>
                            <div>
                                <span className='text-white'>Portugues do Brasil <IoIosArrowDown className='inline ml-1 text-[15px]' /> </span>

                            </div>
                        </div>
                        <div className='flex w-[50%] justify-between mt-5'>
                            <FaTwitter className='text-white  text-[25px]' />
                            <FaInstagram className='text-white  text-[25px]' />
                            <FaFacebook className='text-white  text-[25px]' />
                            <FaYoutube className='text-white text-[25px]' />
                        </div>

                    </div>
                    <div className='w-[15%]'>
                        <ul className='text-white'>
                            <li className='text-[#5865f2] p-1'>Product</li>
                            <li className='p-1'>Download</li>
                            <li className='p-1'>Nitro</li>
                            <li className='p-1'>Status</li>


                        </ul>
                    </div>
                    <div className='w-[15%]'>
                        <ul className='text-white'>
                            <li className='text-[#5865f2] p-1'>Company</li>
                            <li className='p-1'>About</li>
                            <li className='p-1'>Jobs</li>
                            <li className='p-1'>Brandings</li>
                            <li className='p-1'>Newsroom</li>

                        </ul>
                    </div>
                    <div className='w-[15%]' >
                        <ul className='text-white'>
                            <li className='text-[#5865f2] p-1'>Resources</li>
                            <li className='p-1' >College</li>
                            <li className='p-1'>Support</li>
                            <li className='p-1'>Safety</li>
                            <li className='p-1'>Blog</li>
                            <li className='p-1'>Feedback</li>
                            <li className='p-1'>Developers</li>
                            <li className='p-1'>StreamKit</li>
                            <li className='p-1'>Creators</li>

                        </ul>
                    </div>
                    <div className='w-[15%]'>
                        <ul className='text-white'>
                            <li className='text-[#5865f2] p-1'>Policies</li>
                            <li className='p-1'>Terms</li>
                            <li className='p-1'>Privacy</li>
                            <li className='p-1'>Cookie Settings</li>
                            <li className='p-1'>Guidelines</li>
                            <li className='p-1'>Acknowledgments</li>
                            <li className='p-1'>Licenses</li>
                            <li className='p-1'>Moderation</li>

                        </ul>
                    </div>

                </div>

                <div className='flex w-full justify-between mt-8'>
                    <div className='w-[50%] flex items-center'>
                        <FaDiscord className='text-[35px] mr-3 text-white' />
                        <span className='text-white text-[20px] font-bold'>Discord</span>
                    </div>
                    <div className='w-[50%] flex justify-end'>
                        <button className='bg-[#5865f2] text-white text-[13px] w-[120px] h-[40px] rounded-[20px]'>Open Discord</button>
                    </div>

                </div>
            </div>
        </footer>
    )
}
