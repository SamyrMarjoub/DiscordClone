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
export default function Teste() {

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


    return (
        <div className='w-full flex h-[100vh] bg-black'>
            <SideBar />
            <MainApp />
        </div>

    )
}
