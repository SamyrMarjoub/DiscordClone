import React, { useEffect, useState } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { provider } from '../firebase'
const Header = () => {

    const router = useRouter()
    // const [user] = useAuthState(provider)
    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(localStorage.getItem('logged'))
    }, [])
    return (
        <div className='w-[1200px]  queryH:w-[90%]'>
            <div className='flex justify-between h-[70px] w-full'>
                <div className='w-[20%] tablets:justify-start tablets:w-[50%] flex items-center justify-center'>
                    <FaDiscord className='text-[35px] text-white' />
                    <h1 className='text-white font-bold text-[20px] pl-2 fonte'>Discord</h1>
                </div>
                <div className='w-[70%] tablets:hidden  '>
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
                <div className='w-[10%] tablets:justify-end tablets:w-[50%] flex items-center  bg-red'>
                    <button className='w-full tablets:hidden
                     h-[40px] queryH:text-[13px]
                      rounded-3xl bg-white
                       text-[14px] text-blackwhite' onClick={() => {
                            !user ? router.push('/login')
                                :  router.push('/main')
                        }}>
                        {!user ? "Login" : "Open Discord"}</button>
                    <GiHamburgerMenu className='text-white ml-3 hidden tablets:block text-[35px]' />
                </div>

            </div>
        </div>

    )
}

export default Header
