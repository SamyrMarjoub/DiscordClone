import Image from 'next/image'
import React, { useState } from 'react'
import codbarra from '../public/codbarra.png'
import discordlogo from '../public/discordLogo.png'
import DiscordLogo2 from '../public/logo2.svg'
import discordIcon from '../public/discord-logo.svg'
import Head from 'next/head'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineCheck } from 'react-icons/ai'

function Login() {

    const [pagination, setPagination] = useState(0)

    function LoginComponent() {

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
                                <form>
                                    <span className='text-[#B9BBBE] font-bold text-[12px] mobile:inline-block mobile:mt-5'>E-MAIL OU NÚMERO DE TELEFONE *</span>
                                    <input type={'text'} className='w-full mt-2 bg-[#202225] h-[40px]' />
                                    <span className='text-[#B9BBBE] mt-[20px] inline-block font-bold text-[12px]'>SENHA *</span>
                                    <input type={'text'} className='w-full mt-2 bg-[#202225] h-[40px]' />
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

        function InputCheck() {
            const input = document.querySelector('.inputcheck')
            const iconCheck = document.querySelector('.iconCheck')
            input.classList.toggle('checked')
            iconCheck.classList.toggle('notChecked')
            iconCheck.classList.toggle('iconChecked')
        }

        return (
            <div className={`w-full h-[100vh] flex justify-center items-center bg-img`}>
                <Head>
                    <title>Discord</title>
                    <link rel="shortcut icon" href='discord-icon.svg' />
                </Head>

                <div className='bg-[#36393F] mobile:w-full mobile:h-full flex justify-center items-center w-[500px] h-[620px]'>
                    <div className='w-[90%] h-[90%] flex flex-col items-center'>
                        <span className='text-white text-[25px] font-bold'>Criar uma conta</span>
                        <form>
                            <span className='text-[#B9BBBE] mt-5 
                            inline-block font-bold text-[12px] 
                            mobile:inline-block mobile:mt-5'>E-MAIL</span>
                            <input type={'text'} className='w-full mt-2 bg-[#202225] h-[40px]' />
                            <span className='text-[#B9BBBE] mt-[20px] inline-block font-bold text-[12px]'>NOME DE USUÁRIO</span>
                            <input type={'text'} className='w-full mt-2 bg-[#202225] h-[40px]' />
                            <span className='text-[#B9BBBE] mt-[20px] inline-block font-bold text-[12px]'>SENHA</span>
                            <input type={'text'} className='w-full mt-2 bg-[#202225] h-[40px]' />
                            <span className='text-[#B9BBBE] mt-[20px] inline-block font-bold text-[12px]'>DATA DE NASCIMENTO</span>

                            <div className='w-full flex justify-between mt-2'>
                                <div className='flex m-2 ml-0 flex-1 bg-[#202225] h-[40px]'>
                                    <div className='flex-1 flex items-center'>
                                        <span className='text-[#A3A6AA] inline-block ml-2 text-[15px] font-medium'>Dia</span>
                                    </div>
                                    <div className='flex flex-1 justify-end items-center'> <IoIosArrowDown className='text-[#A3A6AA] text-[20px] mr-2' />  </div>
                                </div>
                                <div className='flex m-2 flex-1 bg-[#202225] h-[40px]'>
                                    <div className='flex-1 flex items-center'>
                                        <span className='text-[#A3A6AA] inline-block ml-2 text-[15px] font-medium'>Mês</span>
                                    </div>
                                    <div className='flex flex-1 justify-end items-center'> <IoIosArrowDown className='text-[#A3A6AA] text-[20px] mr-2' />  </div>
                                </div>
                                <div className='flex m-2 mr-0 flex-1 bg-[#202225] h-[40px]'>
                                    <div className='flex-1 flex items-center'>
                                        <span className='text-[#A3A6AA] inline-block ml-2 text-[15px] font-medium'>Ano</span>
                                    </div>
                                    <div className='flex flex-1 justify-end items-center'> <IoIosArrowDown className='text-[#A3A6AA] text-[20px] mr-2' />  </div>
                                </div>
                            </div>
                            <div className='w-full flex mt-2'>
                                <div onClick={() => { InputCheck() }} className='bg-transparent flex justify-center items-center cursor-pointer inputcheck border border-[#72767D] w-[6%] 
                                h-[25px] rounded-[5px] mr-2'>
                                    <AiOutlineCheck className='notChecked iconCheck' />
                                </div>
                                <div className='w-[94%]'>
                                    <span className='text-[#B9BBBE] mt-[-4px] inline-block text-[11px]'>{"(Opcional)"} Tudo bem me mandar e-mails com atualizações do Discord, dicas e ofertas especiais.
                                        Você pode mudar isso a qualquer momento.</span>
                                </div>

                            </div>
                            <input className='w-full mt-5 h-[40px]
                                     bg-[#5865F2] text-white font-bold cursor-pointer' value={'Continuar'} type={'submit'} />
                        </form>
                        <div className='flex w-full mt-1 flex-col'>
                            <span className='text-[#00AFF4] text-[13px]'>Já tem uma conta?</span>
                            <span className='text-[#A3A6AA] inline-block mt-1 text-[11px] max-w-[90%]'>Ao registrar, você concorda com os <span className='text-[#00AFF4]'>termos de serviço</span> e a <span className='text-[#00AFF4]'>politica de privacidade </span>do Discord </span>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {pagination === 0 ? <LoginComponent /> : <RegisterComponent />}
        </>
    )
}

export default Login
