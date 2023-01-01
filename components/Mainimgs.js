import React from 'react'
import Image from 'next/image'
import img1 from '../public/img1.svg'
import img2 from '../public/img2.svg'

export default function Mainimgs() {
    return (
        <>
            <Image src={img1} alt='' width={600} className='absolute bottom-0 left-[00px]' />
            <Image src={img2} alt='' width={600} className='absolute bottom-0 right-0' /></>
    )
}
