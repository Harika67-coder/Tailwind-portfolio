import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
   return <div className='bg-emerald-100 py-24'>
    <div className='align-element  grid md:grid-cols-2 items-center gap-8'>
      <article>
      <h1 className='font-bold text-7xl'>I'm John</h1>
      <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>Front-End Developer</p>
      <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>turning ideas into interactive reality</p>
      <div className='flex mt-4 gap-x-4'>
        <a>
        <FaGithubSquare className='w-8 h-8 text-slate-500 hover:text-black duration-300 '/>
        </a>
        <a>
        <FaLinkedin className='w-8 h-8 text-slate-500 hover:text-black duration-300 '/>
        </a>
        <a>
        <FaTwitterSquare className='w-8 h-8 text-slate-500 hover:text-black duration-300 '/>
        </a>
      </div>
      </article>
      <article className='hidden sm:block'>
        <img src={heroImg} alt="no" className='h-80 lg:h-96'/>
      </article>
    </div>
   
   </div>
}

export default Hero
