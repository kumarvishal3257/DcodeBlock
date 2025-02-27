import React from 'react'
import bgVideo from '../assets/bg-video.mp4'
import hackIndiaLogo from '../assets/hackIndiaLogo.png'
import Button from './Button'
import singularityLogo from '../assets/singularity.png'

const HeroSection = () => {
    const btnContent = ['Overview', 'Create Team', 'Prizes & Sponsors', 'FAQs', 'Judging & Rules', 'Resources']
    const btnStyle = {
        fontSize: "text-xs",
        width: "auto",
        dropShadow: "drop-shadow-[0_0_7_rgba(83,211,224,1)]"
    }
  return (
    <div className=''>
        <video autoPlay loop muted className='w-full min-h-[100%] object-cover relative right-0 left-0'>
            <source src={bgVideo} type='video/mp4' />
        </video>

        <div className='absolute top-30 px-[5%]'>
            {/* Header section */}
            <div className='w-full h-auto flex gap-10'>
                {/* Header's Left side  */}
                <div className='flex items-center w-auto h-auto gap-2'>
                    <img src={hackIndiaLogo} alt='hackIndiaLogo' className='w-[32px] h-[38px]'/>
                    <h2 className='font-Proxon text-white text-xl leading-[1.5] tracking-wide'>HACKINDIA</h2>
                </div>
                {/* Header's right side */}
                <div className='h-auto border-[1px] border-[rgba(223,223,223,0.1)] bg-[#28083A] rounded-xl py-3 px-8 flex gap-2 drop-shadow-[0_1_4_rgba(217,217,217,0.3)]'>
                    {btnContent.map((btn, index) => {
                        return <Button textContent={btn} key={index} style={btnStyle}/>
                    })}
                </div>
            </div>

            {/* Singularity logo */}
            <div className='w-[20%] h-auto flex justify-center mx-auto mt-10'>
                <img src={singularityLogo} alt='SingularityLogo' className='w-full'/>
            </div>

            {/* HackIndia 2025 main text */}
            <div className='w-[60%] h-[108px] mt-5 flex justify-center items-center font-Proxon text-[5.5rem] mx-auto text-white'>
                <span className='h-full bg-orange-500 flex items-center rounded-xs pl-1 pr-0.5'>Ha</span>ckIndia2025
            </div>

            {/* Description box */}
            <div className='text-white font-bold text-3xl flex justify-center mx-auto mt-4 text-VTFJustinaGeo'>
                <h3>India's Biggest Web3 & AI Hackathon</h3>
            </div>
        </div>
    </div>
  )
}

export default HeroSection