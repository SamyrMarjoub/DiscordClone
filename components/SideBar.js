import React, { useEffect } from 'react'
import Image from 'next/image'
import icon1 from '../public/icon1.webp'
import icon2 from '../public/icon2.webp'
import icon3 from '../public/icon3.webp'
import { FaDiscord, FaHashtag, FaCompass } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { MdVolumeUp } from 'react-icons/md'
import { MdKeyboardVoice } from 'react-icons/md'
import { BsHeadphones } from 'react-icons/bs'
import { IoMdSettings, IoIosAdd } from 'react-icons/io'
import laito from '../public/laito.webp'
import { AiOutlineDownload } from 'react-icons/ai'
import { getAuth, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/router'
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'

function SideBar({ userData }) {
    const router = useRouter()

    function Logout() {
        signOut(auth)
        router.push('/login')
        localStorage.removeItem('logged')
        localStorage.removeItem('Uid')
    }
    // async function getUserData() {

    //     const docRef = doc(db, "usuarios", userData.uid);
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //         console.log("Document data:", docSnap.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }
    useEffect(() => {
        // console.log(userData.uid)
        // getUserData()

    }, [])

    return (
        <div className='w-[350px] flex sticky left-0 top-0 h-full bg-[#2F3136]'>

            {/* pequeno */}

            <div className='w-[23%] items-center relative flex flex-col h-full bg-[#202225]'>

                {/* top icon discord */}
                <div className='w-[65%]'>
                    <div className='p-1 mt-3 mb-2 flex justify-center 
                items-center bg-[#36393F] w-[100%] h-[50px] rounded-full'>
                        <FaDiscord className='text-[#DCDDDE] text-[30px]' />
                    </div>
                </div>

                {/* 3 servidores esticos */}
                <div>
                    <div className='p-1 pt-2 border-t border-t-[#36393F]'>
                        <Image src={icon1}
                            width={50} className='rounded-full' height={20} alt='' />
                    </div>
                    <div className='p-1'>
                        <Image src={icon2}
                            width={50} className='rounded-full' height={20} alt='' />
                    </div>
                    <div className='p-1'>
                        <Image src={icon3}
                            width={50} className='rounded-full' height={20} alt='' />
                    </div>
                </div>

                {/* 3 icones verdes*/}

                <div className='w-full flex-col flex items-center h-[auto] absolute bottom-0'>
                    <div className='w-[70%] h-[60px] flex justify-center items-center rounded-full bg-[#36393F]'>
                        <IoIosAdd className='text-[35px] text-[#3BA55D]' />

                    </div>
                    <div className='w-[70%] mt-2 mb-2 h-[60px] flex justify-center items-center rounded-full bg-[#36393F]'>
                        <FaCompass className='text-[23px] text-[#3BA55D]' />

                    </div>
                    <div className='border-t-2 border-t-[#36393F] w-[50%]'></div>
                    <div className='w-[70%] mt-2  mb-2
                     h-[60px] flex justify-center items-center rounded-full bg-[#36393F]'>
                        <AiOutlineDownload className='text-[25px] text-[#3BA55D]' />

                    </div>
                </div>




            </div>

            {/* GRANDE */}

            <div className='w-[77%] items-center h-full flex flex-col justify-between'>

                <div className='w-[100%] justify-center flex h-[5%] border-b border-b-[#18191C]'>
                    <div className='w-[85%] justify-between items-center flex'>
                        <span className='block text-white font-bold'>Servidor de Samir</span>
                        <MdOutlineKeyboardArrowDown className='text-white text-[20px]' />
                    </div>
                </div>

                <div className='w-[85%] h-[90%] mt-3 relative'>
                    <div>
                        <MdOutlineKeyboardArrowDown className='text-[#96989D] left-[-15px] top-[6px] absolute text-[13px]' />
                        <span className='text-[#96989D] text-[13px] font-medium'>CANAIS DE TEXTO</span>
                        <div className='w-full cursor-pointer  flex  p-2 pl-0'>
                            <FaHashtag className='block text-[20px] mt-1 mr-2 text-[#96989D]' /> <span className='text-[#96989D]'>geral</span>

                        </div>
                        <div className='w-full cursor-pointer  flex p-2 pl-0'>
                            <FaHashtag className='block text-[20px] mt-1 mr-2 text-[#96989D]' /> <span className='text-[#96989D]'>clipes-e-destaques</span>

                        </div>
                    </div>
                    <div className='mt-3'>
                        <MdOutlineKeyboardArrowDown className='text-[#96989D] left-[-15px] top-[6px] absolute text-[13px]' />
                        <span className='text-[#96989D] text-[13px] font-medium'>CANAIS DE VOZ</span>
                        <div className='w-full cursor-pointer flex  p-2 pl-0'>
                            <MdVolumeUp className='block text-[20px] mt-1 mr-2 text-[#96989D]' /> <span className='text-[#96989D]'>Lobby</span>

                        </div>
                        <div className='w-full cursor-pointer flex p-2 pl-0'>
                            <MdVolumeUp className='block  text-[20px] mt-1 mr-2 text-[#96989D]' /> <span className='text-[#96989D]'>Jogos</span>

                        </div>
                    </div>


                </div>

                <div className='w-[100%] flex justify-center items-center h-[10%] '>
                    <div className='w-full h-full flex justify-center items-end'>
                        <div onClick={Logout} className='w-full h-[60px] flex cursor-pointer justify-center hover:bg-[#585c64] transition-all bg-[#292B2F] '>
                            <div className='w-[93%] flex  justify-between h-[80%] '>
                                <div className='flex-1'>
                                    <div className='h-full flex items-center relative'>
                                        <Image alt='' className='rounded-full' src={laito} />
                                        <div className='w-[15px] right-4 rounded-full
                                         h-[15px] absolute bottom-1 flex justify-center items-center bg-[#292B2F]'>
                                            <div className='bg-[#3BA55D] rounded-full w-[70%] h-[70%]'></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex-[2] justify-center flex flex-col'>
                                    <span className='text-white text-[14px] font-bold ml-[-3px]'>Laito</span>
                                    <span className='text-[#96989D] text-[13px] mt-[-5px] ml-[-3px]'>#6327</span>
                                </div>


                                <div className='flex-[2] items-center flex justify-between'>
                                    <MdKeyboardVoice className='text-[#96989D] text-[22px]' />
                                    <BsHeadphones className='text-[#96989D] text-[22px]' />
                                    <IoMdSettings className='text-[#96989D] text-[22px]' />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default SideBar
