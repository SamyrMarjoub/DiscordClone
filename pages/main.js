import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import MainApp from '../components/MainApp'
import { useRouter } from 'next/router'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function Main() {

    const router = useRouter()
    const [isReady, setIsReady] = useState(false)
    const [userData, setUserData] = useState({})
    const [SingleServData, setSingleServData] = useState({})
  
    useEffect(() => {

        setTimeout(() => {
            setIsReady(true)
        }, 500)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserData(user)
            } else {
                router.replace('/login')
            }
        });

    }, [router, userData])

    return (

        <>
            {isReady ? <div className='w-full flex h-[100vh] bg-black'>
                <SideBar />
                <MainApp />
            </div> : <></>}
        </>
    )
}
