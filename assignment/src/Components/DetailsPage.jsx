import thunderImg from '../assets/thunder.png'
import singularityLogo from '../assets/singularityFooter.png'
import rairLogo from '../assets/rairFooter.png'
import stratisLogo from '../assets/stratisFooter.png'
import sharpEconomyLogo from '../assets/sharpEconomyFooter.png'
import csharpTvLogo from '../assets/csharpFooter.png'
import beyondTheCodeLogo from '../assets/beyondCodeFooter.png'

const DetailsPage = () => {
  return (
    <div className='bg-gradient-to-r from-[rgb(27,20,31)] to-[rgba(35,8,51,1)] pt-16'>
    <div className='pr-[10%] flex justify-between'>
        {/* left side */}
        <div className='w-[50%] flex flex-col gap-8'>
          {/* thunder image div */}
           <div>
             <img src={thunderImg} alt='thunderImg' className='-rotate-x-360 -rotate-y-180 w-[30%] h-[70px]'/>
           </div>

           {/* Universities participating */}
           <div className='text-white ml-16 font-Proxon drop-shadow-[0_4_4_rgba(217,217,217,1)]'>
            <h1 className='text-5xl'>150+</h1>
            <p className='text-xl '>universities participating</p>
           </div>
           {/* Judges, Hackathons stats */}
           <div className='flex gap-10 text-base font-Proxon text-white ml-16'>
            <div>
              <p className='text-5xl'>72+</p>
              <p className='text-xl'>Judges</p>
            </div>
            <div>
              <p className='text-5xl'>21</p>
              <p className='text-xl'>Hackathons</p>
            </div>
            <div>
              <p className='text-5xl'>36+</p>
              <p className='text-xl'>Great Speakers</p>
            </div>
           </div>
        </div>

        {/* Right side youtube video link */}
        <div className='w-[40%] object-cover'>
           
        <iframe className='w-[110%] h-[100%]' src="https://www.youtube.com/embed/gi1kkMbfNAE?si=7VmKecMO2OvH2c_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>

    {/* banners section */}
    <div className='w-full h-[90px] px-[10%] flex gap-12 justify-center py-2 mt-[10%] bg-[#D9D9D9]'>
        <img src={singularityLogo} alt="singularityLogo" className='h-auto object-cover' />
        <img src={rairLogo} alt="RairLogo" className='h-auto object-cover'/>
        <img src={stratisLogo} alt="StratisLogo" className=' h-auto object-cover'/>
        <img src={sharpEconomyLogo} alt="SharpEconomyLogo" className='h-auto object-cover'/>
        <img src={csharpTvLogo} alt="CsharpTvLogo" className='h-auto object-cover'/>
        <img src={beyondTheCodeLogo} alt="BeyondTheCodeLogo" className='h-auto object-cover'/>
    </div>

    {/* footer section */}
    <footer className='w-full h-[90px] flex justify-between px-[15%] items-center mt-10'>
        <p className='text-white font-Proxon tracking-wider text-base'> Copyright © 2024 DcodeBlock</p>
        <div className='flex text-white text-base tracking-wider font-Proxon gap-5'>
          <p className='border-r-[2px] pr-5'>Help Center</p>
          <p className='border-r-[2px] pr-5'>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
    </footer>
    </div>
  )
}

export default DetailsPage
