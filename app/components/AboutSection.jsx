"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2 '>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>SQL</li>
                <li>React</li>
                <li>Python</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2 '>
                <li>Career World School</li>
                <li>SRM</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2 '>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition( () => {
            setTab(id);
        });
    } 

  return (
    <section id='about' className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
                className=''
                src="/Images/About.jpg"
                width={500}
                height={500} 
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    About Me</h2>
                <p className='text-lg lg:text-xl '>
                    I'm Tanishq Nuwal, a Computer Science undergraduate who loves solving problems through code and building impactful web applications. I'm skilled in full-stack development with hands-on experience in tools like React, Next.js, Flask, and Python.
                    As a passionate competitive programmer, I consistently sharpen my logical thinking through platforms like LeetCode and Codeforces — always eager to crack the next algorithmic challenge.
                    Outside the world of tech, I'm an avid fan of cricket, and I enjoy engaging in interactive sports like table Esports and Basketball. I find these not only energizing but also great for building team spirit and mental sharpness.
                    I'm currently looking for internships or collaborative opportunities where I can apply my technical skills, grow through real-world projects, and contribute to meaningful solutions.
                    </p>
                <div className='flex flex-row mt-8 text-xl justify-start'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}>
                        {" "}
                         Skills{" "} 
                         </TabButton>

                         <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}>
                        {" "}
                        Education{" "} 
                         </TabButton>

                         <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}>
                        {" "}
                        Certifications{" "} 
                         </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
};

export default AboutSection;
