"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import Image from 'next/image';
//import { headers } from 'next/headers';


const EmailSection = () => {
    const [emailSubmitted, setemailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

            //Form the request to sending data to server.
            const options = {
                //The method is POST because we are sending data.
                method:"POST",
                //Tell the server we're sending JSON.
            headers: {
                'Content-Type' : 'application/json',
            },
                //Body of the request if the JSON data we created above.
                body: JSONdata,
            }

        const response = await fetch(endpoint, options);
        const resData = await response.json(); 

        if (response.status === 200){
            console.log('Message sent.');
            setemailSubmitted(true);
        }
    };

  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2 '>Let's Connect</h5>
            <p className='text-{#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open,
                Whether you have a question or just want to say hi, I'll try my best to 
                get back to you. 
            </p>
            <div className='socials flex flex-row gap-3'>
                <Link href={"https://github.com/TanishqN18"}>
                   <Image 
                        src="/Images/Github.svg"
                        alt='Icon' 
                        height={50}
                        width={50} 
                        />
                </Link>
                <Link href={"https://www.linkedin.com/in/tanishq-nuwal"}>
                    <Image 
                        src="/Images/Linkedin.svg"
                        alt='Icon' 
                        height={50}
                        width={50} 
                        />
                </Link>
                <Link href={"https://instagram.com/tanishqnuwal?igshid=OGQ5ZDc2ODk2ZA=="}>
                    <Image 
                        src='/Images/Instagram.svg' 
                        alt='Icon'
                        height={50}
                        width={50} 
                        />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                <label 
                    htmlFor='email' 
                    type='email' 
                    className='text-white block mb-2 text-sm font-medium '>
                    Your's Email
                    </label>
                <input 
                    name='email'
                    type='email' 
                    id='email' 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
                    placeholder='tanishqnuwal@gmail.com' 
                    />
                </div>
                <div className='mb-6'>
                <label 
                    htmlFor='subject' 
                    type='email' 
                    className='text-white block mb-2 text-sm font-medium '>
                    Subject
                    </label>
                <input 
                    name='subject'
                    type='text' 
                    id='subject' 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
                    placeholder='Just Saying Hi!' 
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor='message'
                        className='text-white block text-sm mb-2 font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Lets talk about...'
                    />
                </div>
                    <button
                        type='submit'
                        className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
                        Send Message 
                    </button>
                    {
                        //if the email was submitted successfully, show a success message.
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                Email sent successfully! 
                            </p>
                        )
                    }
            </form>
        </div>
    </section>
  );
};

export default EmailSection;
