/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, createContext } from 'react'
import Image from 'next/image'
import { FaDiscord, FaHashtag, FaCompass } from 'react-icons/fa'
import { MdKeyboardVoice, MdVolumeUp, MdOutlineKeyboardArrowDown, MdEmojiPeople, MdNotifications } from 'react-icons/md'
import { BsHeadphones, BsFillChatSquareFill } from 'react-icons/bs'
import { IoMdSettings, IoIosAdd } from 'react-icons/io'
import { AiOutlineDownload, AiOutlineSearch, IoIosNotifications } from 'react-icons/ai'
import { signOut, onAuthStateChanged } from 'firebase/auth'
// import {HiChatBubbleLeft} from 'react-icons/hi'
import { auth, db } from '../firebase'
import { useRouter } from 'next/router'
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { MyContext } from './context'
import Modal from './Modal'
import { setGlobalState, useGlobalState } from '../pasta'

function SideBar() {

    const router = useRouter()
    const [userData2, setUserData2] = useState({})
    const [userServs, setUserServs] = useState([])
    const [generalData, setGeneralData] = useState({})
    const [modal, setModal] = useState(false)
    const [SingleServData, setSingleServData] = useState({})
    const [canalSelected, setCanalSelected] = useState(true)
    const [mobileselected, setMobileSelected] = useGlobalState('mobileselected')
    const [modalOpen, setModalOpen] = useGlobalState('modalOpen')

    function Logout() {
        signOut(auth)
        router.push('/login')
        localStorage.removeItem('logged')
        localStorage.removeItem('Uid')
        window.location.reload()
    }

    async function getUserData() {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserData2(user)
                // ...
                const docRef = doc(db, "usuarios", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setGeneralData(docSnap.data())
                    async function SideBarServers() {

                        if (docSnap.data().servs.length !== 0) {
                            const q = query(collection(db,
                                "servidores"), where("id", "in", docSnap.data().servs))
                            const querySnapshot = await getDocs(q);
                            const array = []
                            querySnapshot.forEach((doc) => {
                                array.push(doc.data())

                            });
                            setUserServs(array)
                        } else {
                            return
                        }


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

    function OpenServer(e) {
        const id = e
        const data = userServs.find(item => item.id === id)
        setSingleServData(data)
        setGlobalState("defaultCurrency", data)
    }

    function modalShow() {
        setModal(true)
    }

    function selectedChannel(e) {
        const id = e
        const div = document.getElementById(id)
    }

    useEffect(() => {
        getUserData()

    }, [modal])


    useEffect(() => {
        getUserData()

    }, [])


    return (
        <>
            <div className='w-[350px] tdr1:hidden mobilebig:w-[250px] flex left-0 top-0 h-full bg-[#2F3136]'>

                {/* pequeno */}

                <div className='w-[23%] mobilebig:w-[70px] items-center relative flex flex-col h-full bg-[#202225]'>

                    {/* top icon discord */}
                    <div className='w-[70%]'>
                        <div className='p-1 mt-3 mb-2 flex justify-center 
       items-center bg-[#36393F] w-[100%] h-[50px] rounded-full'>
                            <FaDiscord className='text-[#DCDDDE] text-[30px]' />
                        </div>
                    </div>
                    <div className='border-t-2 m-1 border-t-[#36393F] w-[50%]'></div>
                    {/* 3 servidores esticos */}
                    <div className='w-full flex-col flex items-center justify-center'>

                        {userServs ? userServs.map((e, index) =>
                        (
                            <div key={index} className={`w-full  flex justify-center `}>
                                {e.serverImage ?
                                    <div className={`w-[70%] z-10 m-1 h-auto`}>
                                        <img onClick={() => OpenServer(e.id)} id={e.id} src={e.serverImage}
                                            className='w-full h-[60px] rounded-full cursor-pointer object-cover' alt='' />
                                    </div>

                                    : <div onClick={() => OpenServer(e.id)} id={e.id} className={`w-[70%] z-10 rounded-[17px] flex 
                                    justify-center m-1 items-center h-[55px] cursor-pointer bg-[#5865F2]`}>
                                        <span className='text-[20px] text-white'>
                                            {e.name.split(" ").map(w => w[0]).join("").slice(0, 3)}
                                        </span>
                                    </div>}

                            </div>
                        )
                        ) : <></>}



                    </div>

                    {/* 3 icones verdes*/}

                    <div className='w-full flex-col flex items-center h-[auto] mt-2'>
                        <div onClick={() => { modalShow() }} onMouseLeave={() => { const a = document.querySelector('.icon').classList.toggle('white') }}
                            onMouseEnter={() => { const a = document.querySelector('.icon').classList.toggle('white') }} className='w-[70%] h-[60px] flex cursor-pointer cl justify-center items-center rounded-full bg-[#36393F]'>
                            <IoIosAdd className='text-[45px] icon text-[#3BA55D]' />
                            <h1 className='text-white text-[30px]'></h1>
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

                    {SingleServData.name ? <>
                        <div className='w-[100%] justify-center flex h-[5%]'>
                            <div className='w-[85%] justify-between items-center flex'>
                                <span className='block text-white font-bold'>{SingleServData.name}</span>
                                <MdOutlineKeyboardArrowDown className='text-white text-[20px]' />
                            </div>
                        </div>

                        <div className='w-[85%] h-[90%] mt-3 relative'>
                            <div>
                                <MdOutlineKeyboardArrowDown className='text-[#96989D] left-[-15px] top-[6px] absolute text-[13px]' />
                                <span className='text-[#96989D] text-[13px] font-medium'>CANAIS DE TEXTO</span>
                                {SingleServData.chatTexto?.map((e, index) => {
                                    return (
                                        <div onClick={() => selectedChannel(e.id)} id={e.id} key={index} className={`w-full mt-1 cursor-pointer ${index === 0 ? "selectedChannel" : ""} flex  p-2 pl-0`}>
                                            <FaHashtag onClick={(e) => e.stopPropagation()}
                                                className={`block text-[20px] mt-1 mr-2 text-[#96989D]`} />
                                            <span className={` ${index === 0 ? "text-white" : "text-[#96989D]"} `} onClick={(e) => e.stopPropagation()}>{e.nome}</span>

                                        </div>
                                    )
                                })}


                            </div>
                            <div className='mt-3'>
                                <MdOutlineKeyboardArrowDown className='text-[#96989D] left-[-15px] top-[6px] absolute text-[13px]' />
                                <span className='text-[#96989D] text-[13px] font-medium'>CANAIS DE VOZ</span>
                                {SingleServData.chatVoz?.map((e, index) => {
                                    return (
                                        <div onClick={() => selectedChannel(e.id)} id={e.id} key={index} className='w-full cursor-pointer  flex  p-2 pl-0'>
                                            <FaHashtag className='block text-[20px] mt-1 mr-2 text-[#96989D]' /> <span className='text-[#96989D]'>{e.nome}</span>

                                        </div>
                                    )
                                })}
                            </div>


                        </div>

                        <div className='w-[100%] flex justify-center items-center h-[10%] '>
                            <div className='w-full h-full flex justify-center items-end'>
                                <div onClick={Logout} className='w-full h-[60px] items-center flex cursor-pointer justify-center hover:bg-[#585c64] transition-all bg-[#292B2F] '>
                                    <div className='w-[93%] flex items-center justify-between h-[80%]'>
                                        <div className='w-[20%] smalltablets:mr-3'>
                                            <div className='h-full flex items-center relative'>
                                                {userData2?.photoUrl ? (
                                                    <>
                                                        <Image alt='' className='rounded-full' src={userData2?.photoUrl} />

                                                        <div className='w-[15px] right-4 rounded-full
                             h-[15px] absolute bottom-1 flex justify-center items-center bg-[#292B2F]'>
                                                            <div className='bg-[#3BA55D] rounded-full w-[70%] h-[70%]'></div>
                                                        </div>
                                                    </>

                                                ) : <div style={{ backgroundColor: generalData?.bgIconColor }} className={`w-[40px] flex justify-center items-center h-[40px] rounded-full`}>
                                                    <FaDiscord className='text-[25px] text-white' />
                                                </div>}

                                            </div>

                                        </div>
                                        <div className='w-[40%] mobilebig:w-[80%] justify-center flex flex-col'>
                                            <span className='text-white text-[14px] font-bold ml-[-3px]'>{generalData?.username}</span>
                                            <span className='text-[#96989D] text-[13px] mt-[-5px] ml-[-3px]'>#{generalData?.uid}</span>
                                        </div>


                                        <div className='w-[40%] items-center smalltablets:justify-end flex justify-between'>
                                            <MdKeyboardVoice className='text-[#96989D] smalltablets:hidden text-[22px]' />
                                            <BsHeadphones className='text-[#96989D] smalltablets:hidden text-[22px]' />
                                            <IoMdSettings className='text-[#96989D] text-[22px]' />
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </> : <div className='w-full  flex-col h-full flex justify-center items-center'>
                        <div className='w-[95%] flex items-center flex-1 '>
                            <div className='w-full h-[97%]'>
                                <div className='w-full flex-col bg-red  flex'>
                                    <div className='w-[35%] h-[20px] rounded-[5px] bg-[#4F545C]'></div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[110px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[70px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[140px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[90px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[10%] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[80%] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                </div>


                                <div className='w-full flex-col flex mt-10'>
                                    <div className='w-[35%] h-[20px] rounded-[5px] bg-[#4F545C]'></div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[100px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[80px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[100px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[70px] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[70%] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                    <div className='flex mt-5 pl-2'>
                                        <div className='w-[18px] mr-2 rounded-full h-[18px] bg-[#4F545C]'></div>
                                        <div className='w-[80%] rounded-[7px] h-[18px] bg-[#4F545C]'></div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='w-full h-[60px] bg-[#292B2F]'>
                            <div className='w-[100%] h-full flex justify-center items-end'>
                                <div onClick={Logout} className='w-full h-[100%] items-center flex cursor-pointer justify-center hover:bg-[#585c64] transition-all bg-[#292B2F] '>
                                    <div className='w-[93%] flex items-center  justify-between h-[80%] '>
                                        <div className='w-[20%] mobilebig:mr-3 flex mr-1 justify-center'>
                                            <div className='h-full flex items-center relative'>
                                                {userData2?.photoUrl ? (
                                                    <>
                                                        <Image alt='' className='rounded-full' src={userData2?.photoUrl} />

                                                        <div className='w-[15px] right-4 rounded-full
                             h-[15px] absolute bottom-1 flex justify-center items-center bg-[#292B2F]'>
                                                            <div className='bg-[#3BA55D] rounded-full w-[70%] h-[70%]'></div>
                                                        </div>
                                                    </>

                                                ) : <div style={{ backgroundColor: generalData?.bgIconColor }} className={`w-[40px] flex justify-center items-center h-[40px] rounded-full`}>
                                                    <FaDiscord className='text-[25px] text-white' />
                                                </div>}

                                            </div>

                                        </div>
                                        <div className='w-[40%] mobilebig:w-[80%] justify-center flex flex-col'>
                                            <span className='text-white text-[14px] font-bold ml-[-3px]'>{generalData?.username}</span>
                                            <span className='text-[#96989D] text-[13px] mt-[-5px] ml-[-3px]'>#{generalData?.uid}</span>
                                        </div>


                                        <div className='w-[40%] items-center mobilebig:justify-end flex justify-between'>
                                            <MdKeyboardVoice className='text-[#96989D] mobilebig:hidden text-[22px]' />
                                            <BsHeadphones className='text-[#96989D] mobilebig:hidden text-[22px]' />
                                            <IoMdSettings className='text-[#96989D] text-[22px]' />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>}

                    {/* e */}

                </div>



            </div>

            {modal ? (
                <MyContext.Provider value={{ modal, setModal }}>
                    <Modal />
                </MyContext.Provider>


            ) : <></>}
            <div style={{display:modalOpen === 1 ? "flex" : 'none'}} onClick={()=>{setGlobalState('modalOpen', 1), setGlobalState('mobileselected',1)}} className={`w-full bg-[#000000a6] absolute top-0 bottom-0 h-[100vh] z-50`}></div>
            <div className='hidden tdr1:hidden w-[90%] z-[200] bg-[#36393f] absolute left-0 top-0 h-[100vh]'>
                <div className='relative flex w-full'>
                    {/* <div className='bg-black absolute right-0 top-0 w-[20px] h-[100vh]'></div> */}

                    <div className='w-[80px] items-center relative flex flex-col h-full bg-[#202225]'>

                        {/* top icon discord */}
                        <div className='w-[70%]'>
                            <div onClick={() => [setGlobalState('mobileselected',1), setGlobalState('modalOpen',1)]} className='p-1 cursor-pointer mt-3 mb-2 flex justify-center 
items-center bg-[#36393F] w-[100%] h-[50px] rounded-full'>
                                <FaDiscord className='text-[#DCDDDE] text-[30px]' />
                            </div>
                        </div>
                        <div className='border-t-2 m-1 border-t-[#36393F] w-[50%]'></div>
                        {/* 3 servidores esticos */}
                        <div className='w-full flex-col flex items-center justify-center'>

                            {userServs ? userServs.map((e, index) =>
                            (
                                <div key={index} className={`w-full  flex justify-center `}>
                                    {e.serverImage ?
                                        <div className={`w-[70%] z-10 m-1 h-auto`}>
                                            <img onClick={() => OpenServer(e.id)} id={e.id} src={e.serverImage}
                                                className='w-full h-[60px] rounded-full cursor-pointer object-cover' alt='' />
                                        </div>

                                        : <div onClick={() => OpenServer(e.id)} id={e.id} className={`w-[70%] z-10 rounded-[17px] flex 
                justify-center m-1 items-center h-[55px] cursor-pointer bg-[#5865F2]`}>
                                            <span className='text-[20px] text-white'>
                                                {e.name.split(" ").map(w => w[0]).join("").slice(0, 3)}
                                            </span>
                                        </div>}

                                </div>
                            )
                            ) : <></>}



                        </div>

                        {/* 3 icones verdes*/}

                        <div className='w-full flex-col flex items-center h-[auto] mt-2'>
                            <div onClick={() => { modalShow() }} onMouseLeave={() => { const a = document.querySelector('.icon').classList.toggle('white') }}
                                onMouseEnter={() => { const a = document.querySelector('.icon').classList.toggle('white') }} className='w-[70%] h-[60px] flex cursor-pointer cl justify-center items-center rounded-full bg-[#36393F]'>
                                <IoIosAdd className='text-[45px] icon text-[#3BA55D]' />
                                <h1 className='text-white text-[30px]'></h1>
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
                    {mobileselected === 0 ? <>
                        <div className='flex-1 flex justify-center items-center h-full'>
                            <div className='w-[90%] h-[95%]'>
                                <div className='flex justify-between'>
                                    <span className='white text-[18px] font-bold'>Mensagens diretas</span>
                                    <BsFillChatSquareFill className='text-[#DCDDDE] text-[20px]' />
                                </div>
                                <div className='w-full rounded-[5px] mt-[20px] flex items-center h-[40px] relative bg-[#202225]'>
                                    <input type='text' className='w-[90%] bg-transparent outline-none p-[10px] text-[#96989D]' placeholder='Aonde você quer ir?' />
                                    <AiOutlineSearch className='text-[#96989D] text-[25px] absolute right-2' />
                                </div>
                                {/* 2 users estaticos */}
                                <div className='w-full mt-5'>
                                    <div className='flex'>
                                        <div className='rounded-[40px] mr-3 w-[40px] flex justify-center items-center h-[40px] bg-[red]'>
                                            <FaDiscord className='text-[#DCDDDE] text-[25px]' />
                                        </div>
                                        <div>
                                            <span className='text-[#96989D] inline-block mt-[4px] font-bold text-[17px]'>Zxfa500</span>
                                        </div>
                                    </div>
                                    <div className='flex mt-4'>
                                        <div className='rounded-[40px] mr-3 w-[40px] flex justify-center items-center h-[40px] bg-[green]'>
                                            <FaDiscord className='text-[#DCDDDE] text-[25px]' />
                                        </div>
                                        <div>
                                            <span className='text-[#96989D] inline-block mt-[4px] font-bold text-[17px]'>BoraBillxxdddd</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : <></>}

                </div>

            </div>





            <div style={{display:modalOpen === 1 ? 'flex' : 'none'}} className='hidden z-[201] absolute tdr1:flex justify-center bottom-0 left-0 bg-[#0e0e0e] h-[60px] w-full'>
                <div className='w-[90%] h-full flex justify-between items-center'>
                    <FaDiscord className='text-white text-[30px]' />
                    <MdEmojiPeople className='text-white text-[30px]' />
                    <AiOutlineSearch className='text-white text-[30px]' />
                    <MdNotifications className='text-white text-[30px]' />
                    {userData2?.photoUrl ? (
                        <>
                            <Image alt='' className='rounded-full' src={userData2?.photoUrl} />

                            <div className='w-[15px] right-4 rounded-full
                             h-[15px] absolute bottom-1 flex justify-center items-center bg-[#292B2F]'>
                                <div className='bg-[#3BA55D] rounded-full w-[70%] h-[70%]'></div>
                            </div>
                        </>

                    ) : <div style={{ backgroundColor: generalData?.bgIconColor }} className={`w-[40px] flex justify-center items-center h-[40px] rounded-full`}>
                        <FaDiscord className='text-[25px] text-white' />
                    </div>}

                </div>
            </div>
        </>

    )

}




export default SideBar
