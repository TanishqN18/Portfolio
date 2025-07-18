"use client";
import React, {useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "PBase",
        description: 'A modern portfolio and codebase manager for developers. Lets users showcase projects, tech stack, achievements, and GitHub integrations all in one place. Built with Next.js, Tailwind CSS, and optimized for responsiveness."',
        image: "/Images/projects/Pbase.jpg",    
        tag: ['All', 'Web'],
        gitUrl: "/",
        previewUrl: '/',
    },
    {
        id: 2,
        title: "Blackjack",
        description: 'A fully interactive Blackjack game built with Next.js, featuring animated card drawing, sound effects, dealer AI, score tracking, and a modern casino-themed UI. Designed to be mobile-friendly and deployable on Vercel.',
        image: "/Images/projects/Blackjack.png",
        tag: ['All', 'Web'],
        gitUrl: "https://github.com/TanishqN18/Blackjack.git",
        previewUrl: 'https://blackjack-one-amber.vercel.app/',
    },
    {
        id: 3,
        title: "Marksheet",
        description: 'A desktop application using Python Tkinter and SQLite that allows teachers/admins to add, update, delete, search, and export student marksheets. Includes PDF/Excel export, bar chart visualization, and search by name or ID.',
        image: "/Images/projects/Marksheet.png",
        tag: ['All', 'Web'],
        gitUrl: "https://github.com/TanishqN18/Student_Marksheet.git",
        previewUrl: '/',
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    };

  return (
    <section id='projects'>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 '>
        My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-3 py-6'>
            <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === 'All'} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === 'Web'} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag === 'Mobile'} 
            />
        </div>
    <ul 
        ref={ref}
        className='grid md:grid-cols-3 gap-8 md:gap-12'
    >
      {filteredProjects.map((project, index) => (
        <motion.li 
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial" }
            transition={{ duration: 0.3, delay: index * 0.4 }}
        >
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        </motion.li>
    ))}
    </ul>
    </section>
  );
};

export default ProjectSection;
