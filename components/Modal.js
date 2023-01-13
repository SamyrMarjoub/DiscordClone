import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MyContext } from './context'
import Image from 'next/image'
import newServer from '../public/NewServer.svg'
function Modal() {

    const { modal, setModal } = useContext(MyContext);

    useEffect(() => {
        const d = document.getElementById('modal')
        d.classList.add('animacaoBlack')

    }, [])
    function CloseModal() {
        const d = document.getElementById('modal')
        d.classList.remove('animacaoBlack')
        d.classList.add('animacaoBlackSaida')
        setTimeout(() => {
            setModal(false)

        }, 200)
    }

    return (
        <>
            {!modal ? <></> : (
                <div id='modal' className='w-full h-[100vh] bg-[#000000dc] z-10 absolute'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-[490px]  flex-col flex justify-center items-center rounded-md bg-white'>
                            <div className='w-[92%] relative mt-5 h-[95%] flex items-center flex-col'>
                                <span className='text-black text-[25px] font-bold'>Crie um servidor</span>
                                <p className='text-center mt-2 text-[18px] text-[#4F5660]'>Seu servidor é onde você e
                                    seus amigos se reúnem. Crie o seu e começe a interagir</p>
                                <div className='w-full hover:bg-[#e2e2e2] transition-all cursor-pointer mt-8 flex items-center justify-center h-[auto] rounded-md border border-[#6A74803D]'>
                                    <div className='w-[90%] p-2 flex justify-between items-center h-full'>
                                        <div className='flex items-center'>
                                            <Image className='mr-2' src={newServer} alt='' width={60} />
                                            <span className='font-bold text-[17px]'>Criar o meu</span>
                                        </div>

                                        <MdKeyboardArrowRight className='text-[30px]' />
                                    </div>

                                </div>
                                <AiOutlineClose onClick={() => CloseModal()} className='absolute text-[30px] text-[#96989D] top-0 cursor-pointer right-0' />

                            </div>
                            <div className='bg-[#F2F3F5] text-center mt-10 w-full items-center flex flex-col justify-evenly h-[110px]'>
                                <span className=' text-[20px]  font-medium'>Já tem um convite?</span>
                                <button className='w-[90%] h-[40px]  rounded-sm bg-[#6A7480] text-white'>Entrar em um servidor</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>


    )
}

export default Modal
