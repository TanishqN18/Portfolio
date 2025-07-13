"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion} from "framer-motion";
import Link from 'next/link';


const HeroSection = () => {
  return (
    <section className='lg:py-16 '>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5}} 
                animate={{ opacity: 1, scale:1}} 
                transition={{ duration: 0.5}}  
                className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
                    Hello, I'm{" "}</span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Tanishq",
                        1000, 
                        "Web Developer",
                        1000,
                        'Full Stack',
                        1000,
                        'Python',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-white text-base sm:text-lg lg:text-xl mb-6'>
                     Computer Science Undergraduate | Full-Stack Developer | Competitive Programmer
Passionate about building seamless web experiences, solving real-world problems with code, and empowering the developer community through collaboration and innovation.
                </p>
                <div>
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Hire Me
                     </Link>
                    <Link
                        href="https://drive.google.com/file/d/10T65pDWEqhcKjvKHnnDLfgqBi7z3nJSZ/view?usp=sharing"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                    </span>
                    </Link>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5}} 
                animate={{ opacity: 1, scale:1}} 
                transition={{ duration: 0.5}} 
                className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[200px] h-[200px] my-10 lg:my-0 lg:w-[350px] lg:h-[280px] relative'>
                    <Image
                        src="/Images/Main.jpg"
                        alt='hero image'
                        className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={350}
                        height={280}
                    />
                </div>
            </motion.div>
        </div>
    </section>
      
  )
};

export default HeroSection;
