import React, { useState, useEffect } from 'react'
// import {
//     collection,
//     doc,
//     onSnapshot,
//     orderBy,
//     query,
//     addDoc,
//     serverTimestamp,
//     updateDoc,
//     getDocs
// } from "@firebase/firestore";
// import { onAuthStateChanged } from 'firebase/auth'
// import { db, storage } from "../firebase";
// import { async } from '@firebase/util';
// import randomId from 'random-id';
import SideBar from '../components/SideBar'
import MainApp from '../components/MainApp'
import { useRouter } from 'next/router'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function Main() {
    const router = useRouter()
    // async function getDocumento() {
    //     const colRef = collection(db, 'usuarios')
    //     const snapshots = await getDocs(colRef)
    //     const docs = snapshots.docs.map(e => e.data())
    //     setData(docs)
    // }
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             const uid = user.uid;
    //             console.log(uid)
    //         } else {
    //             // User is signed out
    //             // ...
    //         }
    //     });
    // }, [])
    // // useEffect(() => getDocumento)

    // async function submit(e) {
    //     e.preventDefault()
    //     const docRef = await addDoc(collection(db, 'usuarios'), {
    //         id: randomId(len, pattern),
    //         email: email,
    //         senha: senha,
    //         timestamp: serverTimestamp()
    //     })
    //     await updateDoc(doc(db, "usuarios", docRef.id), {
    //     })
    //     alert('Ok')

    // }
    const [isReady, setIsReady] = useState(false)
    const [userData, setUserData] = useState({})

    useEffect(() => {

        setTimeout(() => {
            setIsReady(true)
        }, 500)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user;
                // console.log(typeof(user))
                setUserData(user)
                // console.log(userData)
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
