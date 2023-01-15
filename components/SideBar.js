import React, { useEffect, useState, createContext } from 'react'
import Image from 'next/image'
import icon1 from '../public/icon1.webp'
import icon2 from '../public/icon2.webp'
import icon3 from '../public/icon3.webp'
import laito from '../public/laito.webp'
import { FaDiscord, FaHashtag, FaCompass } from 'react-icons/fa'
import { MdKeyboardVoice, MdVolumeUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsHeadphones } from 'react-icons/bs'
import { IoMdSettings, IoIosAdd } from 'react-icons/io'
import { AiOutlineDownload } from 'react-icons/ai'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { useRouter } from 'next/router'
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { MyContext } from './context'
import Modal from './Modal'

function SideBar() {

    const router = useRouter()
    const [userDataS, setUserData] = useState([])
    const [userData2, setUserData2] = useState({})
    const [userServs, setUserServs] = useState({})
    const [generalData, setGeneralData] = useState({})
    const [modal, setModal] = useState(false)

    function Logout() {
        signOut(auth)
        router.push('/login')
        localStorage.removeItem('logged')
        localStorage.removeItem('Uid')
    }

    async function getUserData() {
        const citiesRef = collection(db, "usuarios");
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserData2(user)
                // ...
                const docRef = doc(db, "usuarios", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setGeneralData(docSnap.data())
                    async function SideBarServers() {

                        const q = query(collection(db,
                            "servidores"), where("id", "in", docSnap.data().servs))
                        const querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                            setUserServs(doc.data())

                        });

                    }
                    SideBarServers()
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

            } else {
                // User is signed out
                // ...
            }
        });


    }

    function modalShow() {
        setModal(true)
    }



    useEffect(() => {
        getUserData()

    }, [])

    return (
        <>
            <div className='w-[350px] flex sticky left-0 top-0 h-full bg-[#2F3136]'>

                {/* pequeno */}

                <div className='w-[23%] items-center relative flex flex-col h-full bg-[#202225]'>

                    {/* top icon discord */}
                    <div className='w-[65%] '>
                        <div className='p-1 mt-3 mb-2 flex justify-center 
       items-center bg-[#36393F] w-[100%] h-[50px] rounded-full'>
                            <FaDiscord className='text-[#DCDDDE] text-[30px]' />
                        </div>
                    </div>

                    {/* 3 servidores esticos */}
                    <div className=''>

                        <div className='p-1'>
                            <Image src={icon2}
                                width={55} className='rounded-full' height={20} alt='' />
                        </div>

                    </div>

                    {/* 3 icones verdes*/}

                    <div className='w-full flex-col flex items-center h-[auto] mt-2'>
                        <div onClick={() => { modalShow() }} onMouseLeave={() => { const a = document.querySelector('.icon').classList.toggle('white') }}
                            onMouseEnter={() => { const a = document.querySelector('.icon').classList.toggle('white') }} className='w-[70%] h-[60px] flex cursor-pointer cl justify-center items-center rounded-full bg-[#36393F]'>
                            <IoIosAdd className='text-[45px] icon text-[#3BA55D]' />

                        </div>
                        <div onMouseLeave={() => { const a = document.querySelector('.compass').classList.toggle('white') }}
                            onMouseEnter={() => { const a = document.querySelector('.compass').classList.toggle('white') }} className='w-[70%] cursor-pointer mt-2 mb-2 h-[60px] cl flex justify-center items-center rounded-full bg-[#36393F]'>
                            <FaCompass className='text-[23px] compass text-[#3BA55D]' />

                        </div>
                        <div className='border-t-2 border-t-[#36393F] w-[50%]'></div>
                        <div onMouseLeave={() => { const a = document.querySelector('.outdownload').classList.toggle('white') }}
                            onMouseEnter={() => { const a = document.querySelector('.outdownload').classList.toggle('white') }} className='w-[70%] mt-2 cursor-pointer  mb-2
         h-[60px] flex justify-center items-center  cl rounded-full bg-[#36393F]'>
                            <AiOutlineDownload className='text-[25px] outdownload text-[#3BA55D]' />

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
                            <div onClick={Logout} className='w-full h-[60px] items-center flex cursor-pointer justify-center hover:bg-[#585c64] transition-all bg-[#292B2F] '>
                                <div className='w-[93%] flex items-center  justify-between h-[80%] '>
                                    <div className='flex-1'>
                                        <div className='h-full flex items-center relative'>
                                            {userData2?.photoUrl ? (
                                                <>
                                                    <Image alt='' className='rounded-full' src={userData2?.photoUrl} />

                                                    <div className='w-[15px] right-4 rounded-full
                             h-[15px] absolute bottom-1 flex justify-center items-center bg-[#292B2F]'>
                                                        <div className='bg-[#3BA55D] rounded-full w-[70%] h-[70%]'></div>
                                                    </div>
                                                </>

                                            ) : <div className='w-[40px] flex justify-center items-center h-[40px] bg-red-500 rounded-full'>
                                                <FaDiscord className='text-[25px] text-white' />
                                            </div>}

                                        </div>

                                    </div>
                                    <div className='flex-[2] justify-center flex flex-col'>
                                        <span className='text-white text-[14px] font-bold ml-[-3px]'>{generalData?.username}</span>
                                        <span className='text-[#96989D] text-[13px] mt-[-5px] ml-[-3px]'>#{generalData?.uid}</span>
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

            {modal ? (
                <MyContext.Provider value={{ modal, setModal }}>
                    <Modal />
                </MyContext.Provider>

            ) : <></>}

        </>

    )
}




export default SideBar
