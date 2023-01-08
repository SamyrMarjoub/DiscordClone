import React, { useState, useEffect } from 'react'
import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
    addDoc,
    serverTimestamp,
    updateDoc,
    getDocs
} from "@firebase/firestore";
import {onAuthStateChanged} from 'firebase/auth'
import { db, storage } from "../firebase";
import { async } from '@firebase/util';
import randomId from 'random-id';
import {auth} from '../firebase'

export default function Teste() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [data, setData] = useState([])
    const len = 30
    const pattern = 'Za0'
    const [userLogado, setUserLogado] = useState({})

    async function getDocumento() {
        const colRef = collection(db, 'usuarios')
        const snapshots = await getDocs(colRef)
        const docs = snapshots.docs.map(e => e.data())
        setData(docs)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])
    useEffect(() => getDocumento)

    async function submit(e) {
        e.preventDefault()
        const docRef = await addDoc(collection(db, 'usuarios'), {
            id: randomId(len, pattern),
            email: email,
            senha: senha,
            timestamp: serverTimestamp()
        })
        await updateDoc(doc(db, "usuarios", docRef.id), {
        })
        alert('Ok')

    }


    return (
        <>
            <div>
                <div className='bg-black w-[100%] h-[300px] flex justify-center text-white'>
                    <form onSubmit={submit} className='flex w-[600px] items-center h-full flex-col justify-center'>
                        <label className='mr-3' to={'email'}>Email</label>
                        <input onChange={(e) => (setEmail(e.target.value))} className=' mt-5 bg-transparent border border-gray-50' name='email' type={'email'} />
                        <br />
                        <label to={'password'} className='mr-2'>Senha</label>
                        <input onChange={(e) => (setSenha(e.target.value))} className='bg-transparent mt-5 border border-gray-50' name='password' type={'password'} />
                        <input className='bg-blue-300 cursor-pointer w-[185px] mt-5' type={'submit'} />
                    </form>
                </div>

            </div>
            <div className='w-full bg-red-500 h-[670px]'>
                <h1>Dados registrados:</h1>
                {data.map((e, index) => (
                    <div key={index}>
                        <h1>email {e.email}</h1>
                        <h2>senha {e.senha}</h2>
                    </div>
                ))}
            </div>
        </>

    )
}
