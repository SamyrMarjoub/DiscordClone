import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import codbarra from '../public/codbarra.png'
import discordlogo from '../public/discordLogo.png'
import DiscordLogo2 from '../public/logo2.svg'
import Head from 'next/head'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
    addDoc,
    serverTimestamp,
    updateDoc,
    getDocs,
    where,
    getDoc
} from "@firebase/firestore";
import { db, storage, auth } from "../firebase";
import { useRouter } from 'next/router'
import keyAccount from '../public/keyAccoutn.svg'

function Login() {
    const router = useRouter()
    const [pagination, setPagination] = useState(0)
    const [LoginRegisterInfo, setLoginRegisterInfo] = useState({})
    const [LoginPass, setLoginPass] = useState('')

    useEffect(() => {
        if (localStorage.getItem('logged')) {
            router.replace('/main')
        }
    }, [router])
    function RegistradoComponent() {

        function AutoLogin() {
            signInWithEmailAndPassword(auth, LoginRegisterInfo.email, LoginPass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    localStorage.setItem('logged', true)
                    router.push('/main')

                })
                .catch((error) => {
                    return console.error(error)

                });
        }


        return (
            <div className={`w-full h-[100vh] flex justify-center items-center bg-img`}>
                <div className='w-[480px] shadow flex justify-center items-center h-[350px] rounded-[10px] bg-[#36393F]'>
                    <div className='w-[90%] flex-col flex items-center h-[90%] relative'>
                        <Image src={keyAccount} alt='' className='mt-5' />
                        <span className='block text-white text-[23px] font-bold mt-3'>Criar uma conta</span>
                        <span className='block text-[#A3A6AA]'>Bip bup. Bip big?</span>
                        <button onClick={AutoLogin} className='w-[50%] bg-[#5865F2] rounded-3xl
                         text-white text-[17px] uppercase font-bold tracking-[2px] h-[40px] mt-5'>Continuar</button>
                    </div>
                </div>

            </div>
        )
    }
    function LoginComponent() {

        const [emailTel, setEmailTel] = useState('')
        const [senha, setSenha] = useState('')
        const [loginError, setLoginError] = useState(false)

        function submitLogin(e) {
            e.preventDefault()
            // const q = query(collection(db, 'usuarios'), where('email', '==', emailTel), where('senha', '==', senha))
            // const querySnapshot = await getDocs(q);
            // const spans = document.querySelectorAll('.spanL')

            // if (querySnapshot.empty) {
            //     for (let i = 0; i < spans.length; i++) {
            //         spans[i].classList.add('spanLError')
            //     }
            //     setLoginError(true)
            // } else {

            //     console.log(querySnapshot.empty)
            // }
            // console.log(user)

            signInWithEmailAndPassword(auth, emailTel, senha)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    localStorage.setItem('logged', true)
                    router.push('/teste')
                    console.log(user.uid)

                })
                .catch((error) => {
                    const spans = document.querySelectorAll('.spanL')
                    for (let i = 0; i < spans.length; i++) {
                        spans[i].classList.add('spanLError')
                    }
                    setLoginError(true)

                });




        }


        return (
            <div className={`w-full h-[100vh] flex justify-center items-center bg-img`}>
                <Head>
                    <title>Discord</title>
                    <link rel="shortcut icon" href='discord-icon.svg' />

                </Head>
                <div className='w-[780px] flex tablets2:w-[500px] mobile:h-[100%] tablets2:h-[380px] justify-center items-center h-[405px] bg-[#36393F]'>
                    <div className='w-[90%] mobile:h-[95%]  flex  h-[85%]'>
                        <div className='w-[58%] tablets2:w-full flex flex-col items-center to-blue-500'>
                            <div className='hidden mobile:flex justify-between'>
                                <Image src={DiscordLogo2} width={130} alt='' />

                            </div>
                            <h3 className='text-white text-[23px] mobile:mt-5 font-bold'>Boas-vindas de volta!</h3>
                            <span className='text-[#A3A6AA] mobile:mt-2 tablets2:hidden'>Estamos muito animados em te ver novamente!</span>
                            <div className='w-full mt-2 flex justify-between flex-col'>
                                <form onSubmit={submitLogin}>
                                    <span className='text-[#B9BBBE] spanL font-bold text-[12px] mobile:inline-block mobile:mt-5'>E-MAIL OU NÚMERO DE TELEFONE
                                        {loginError === true ? (<span className='text-[#F38688] text-[12px]'> - Login ou senha invalidos</span>) : <></>} {loginError === false ? "*" : <></>}</span>
                                    <input onChange={(e) => setEmailTel(e.target.value)} autoComplete='new-password' type={'text'} className='w-full p-2 text-white outline-none mt-2 bg-[#202225] h-[40px]' />
                                    <span className='text-[#B9BBBE] spanL mt-[20px] inline-block font-bold text-[12px]'>SENHA  {loginError === true ? (<span className='text-[#F38688] text-[12px]'> - Login ou senha invalidos</span>) : <></>} {loginError === false ? "*" : <></>}</span>
                                    <input onChange={(e) => setSenha(e.target.value)} autoComplete='new-password' type={'password'} className='w-full  p-2 text-white  mt-2 outline-none bg-[#202225] h-[40px]' />
                                    <span className='text-[#00AFF4] mt-[5px] inline-block font-medium text-[13px]'>Esqueçeu sua senha? </span>
                                    <input className='w-full mt-5 h-[40px]
                                     bg-[#5865F2] text-white font-bold' value={'Entrar'} type={'submit'} />
                                </form>
                                <span className='inline-block text-[13px]
                                 text-[#A3A6AA] mt-2'>Precisando de uma conta? <span onClick={() => setPagination(1)} className='text-[#00AFF4] cursor-pointer'>Registre-se</span> </span>
                            </div>
                        </div>
                        <div className='w-[42%] tablets2:hidden flex justify-center flex-col items-end'>
                            <div className='w-[90%] flex justify-center flex-col items-center'>
                                <div className='w-[66%] rounded-md flex justify-center items-center h-[175px] bg-white'>
                                    <Image alt='' src={codbarra} />
                                    <Image className='absolute' width={50} src={discordlogo} alt='' />
                                </div>
                                <span className='inline-block text-[20px] font-bold text-white mt-5'>Entrar com Código QR</span>
                                <span className='text-[#A3A6AA] inline-block mt-2 font-medium text-center
                                 max-w-[90%] text-[15px]'>Escaneie isto com o
                                    <span className='text-[#DCDDDE] font-normal'> app móvel do Discord</span>  para fazer login imediatamente</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
    function RegisterComponent() {

        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')
        const [username, setUsername] = useState('')
        const [dia, setDia] = useState('')
        const [mes, setMes] = useState('')
        const [ano, setAno] = useState('')
        const [focus, setFocus] = useState(false)
        const [dateData, setDateData] = useState(['2023', '2022', '2021', '2020', '2019', '2018',
            '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005',
            '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991',
            '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977',
            '1976', '1975', '1974', '1973', '1972', '1971', '1970'])
        const [dateDia, setDateDia] = useState(['01', '02', '03', '04', '05', '06',
            '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
            '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'])
        const [dateMes, setDateMes] = useState(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'])
        const [userData, setUserData] = useState({})
        useEffect(() => {
            console.log(userData);
        }, [userData]);
        async function addUser(e) {

            e.preventDefault()
            const dataFormatada = `${dia}/${mes}/${ano}`

            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    localStorage.setItem('Uid', user.uid)
                    setLoginRegisterInfo(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
                
            const docRef = await addDoc(collection(db, 'usuarios'), {
                id: localStorage.getItem('Uid'),
                username: username,
                datanascimento: dataFormatada,
                focus: focus,
                timestamp: serverTimestamp()
            })
            await updateDoc(doc(db, "usuarios", docRef.id), {
            })
            setLoginPass(senha)
            // setGeneralData({
            //     datanascimento: dataFormatada,
            //     username: username,
            //     focus: focus,
            //     timestamp: serverTimestamp(),
            //     id: localStorage.getItem('Uid')
            // })
            setEmail('')
            setSenha('')
            setUsername('')
            setPagination(2)
        }

        return (
            <div className={`w-full h-[100vh] flex justify-center items-center bg-img`}>
                <Head>
                    <title>Discord</title>
                    <link rel="shortcut icon" href='discord-icon.svg' />
                </Head>

                <div className='bg-[#36393F] mobile:w-full mobile:h-full flex justify-center items-center w-[500px] h-[620px]'>
                    <div className='w-[90%] relative h-[90%] flex flex-col justify-center items-center'>

                        <span className='text-white text-[25px] font-bold'>Criar uma conta</span>
                        <form onSubmit={addUser}>
                            <span className='text-[#B9BBBE] mt-5 
                            inline-block font-bold text-[12px] 
                            mobile:inline-block mobile:mt-5'>E-MAIL</span>
                            <input autoComplete='new-password' required onChange={(e) => setEmail(e.target.value)}
                                type={'text'} value={email} className='w-full  p-2 outline-none text-[white] mt-2 bg-[#202225] h-[40px]' />
                            <span className='text-[#B9BBBE] mt-[20px] inline-block font-bold text-[12px]'>NOME DE USUÁRIO</span>
                            <input autoComplete='new-password' value={username} required onChange={(e) =>
                                setUsername(e.target.value)} type={'text'}
                                className='w-full mt-2  p-2 outline-none text-[white] bg-[#202225] h-[40px]' />
                            <span className='text-[#B9BBBE] mt-[20px] inline-block font-bold text-[12px]'>SENHA</span>
                            <input value={senha} autoComplete='new-password' required onChange={(e) => setSenha(e.target.value)}
                                type={'password'} className='w-full mt-2 outline-none text-[white] p-2 bg-[#202225] h-[40px]' />
                            <span className='text-[#B9BBBE] mt-[20px] inline-block font-bold text-[12px]'>DATA DE NASCIMENTO</span>

                            <div className='w-full flex justify-between mt-2'>

                                <div className='flex m-2 ml-0 flex-1 bg-[#202225] h-[40px]'>
                                    <select onChange={(e) => setDia(e.target.value)} required className='w-full outline-none bg-transparent text-[#A3A6AA]'>
                                        <option className='bg-[#36393F]' value={''}>Dia</option>
                                        {dateDia.map(data => (
                                            <option className='bg-[#36393F]' key={data}>{data}</option>
                                        ))}

                                    </select>
                                </div>

                                <div className='flex m-2 flex-1 bg-[#202225] h-[40px]'>
                                    <select onChange={(e) => setMes(e.target.value)} required className='w-full outline-none bg-transparent text-[#A3A6AA]'>
                                        <option className='bg-[#36393F]' value={''}>Mês</option>
                                        {dateMes.map(data => (
                                            <option className='bg-[#36393F]' key={data}>{data}</option>
                                        ))}


                                    </select>
                                </div>

                                <div className='flex m-2 mr-0 flex-1 bg-[#202225] h-[40px]'>
                                    <select onChange={(e) => setAno(e.target.value)} required className='w-full outline-none bg-transparent text-[#A3A6AA]'>
                                        <option className='bg-[#36393F]' value={''}>Ano</option>
                                        {dateData.map(data => (
                                            <option className='bg-[#36393F]' key={data}>{data}</option>
                                        ))}

                                    </select>
                                </div>

                            </div>
                            <div className='w-full flex mt-2'>
                                <label className='relative chk mr-2'>
                                    <input checked={focus} onChange={(e) => setFocus(e.target.checked)} type={'checkbox'} className='invisible' />
                                    <span className='h-[25px] sticky mt-[-24px] w-[25px] bg-transparent border rounded-[5px] border-[#72767D] block'></span>
                                </label>
                                <div className='w-[94%]'>
                                    <span className='text-[#B9BBBE] mt-[-4px] inline-block text-[11px]'>{"(Opcional)"} Tudo bem me mandar e-mails com atualizações do Discord, dicas e ofertas especiais.
                                        Você pode mudar isso a qualquer momento.</span>
                                </div>

                            </div>
                            <input className='w-full mt-5 h-[40px]
                                     bg-[#5865F2] text-white font-bold cursor-pointer' value={'Continuar'} type={'submit'} />
                        </form>
                        <div className='flex w-full mt-1 flex-col'>
                            <span className='text-[#00AFF4] text-[13px] cursor-pointer' onClick={() => setPagination(0)}>Já tem uma conta?</span>
                            <span className='text-[#A3A6AA] inline-block mt-1 text-[11px] max-w-[90%]'>Ao registrar, você concorda com os <span className='text-[#00AFF4]'>termos de serviço</span> e a <span className='text-[#00AFF4]'>politica de privacidade </span>do Discord </span>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        pagination === 0 ? <LoginComponent /> : pagination === 1 ? <RegisterComponent /> : <RegistradoComponent />

    )
}

export default Login
