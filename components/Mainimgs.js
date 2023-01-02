import React from 'react'
import Image from 'next/image'
import img1 from '../public/img1.svg'
import img2 from '../public/img2.svg'

export default function Mainimgs() {
    return (
        <>
            <Image src={img1} alt='' className='absolute w-[31%] query:hidden  bottom-0 left-[-50px]' />
            <Image src={img2} alt='' className='absolute w-[31%] smalltablets:hidden query:w-[50%] bottom-0 right-[-50px]' />
        </>
    )
}
