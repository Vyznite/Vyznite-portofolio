import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

export const Contact = () => {

    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r688u0g', 'template_s3sqmhb', form.current, '4_C1zg5Yu0Vg2zLjb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
    <div name='contact' className='w-full bg-blue-900 p-4 text-white'>

        <div className='max-w-screen-lg p-2 pt-64 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
              <p className='text-5xl md:text-7xl tracking-wider font-bold text-white inline uppercase '>CONTACT ME</p>
            </div>

            <div className='flex justify-center items-center'>

                <form  ref={form} className='flex flex-col w-full md:w-screen' onSubmit={SendEmail}>
                    <input 
                    type='text' 
                    name='user_name' 
                    placeholder='Vul hier je naam in' 
                    className='p-2 border-2 rounded-md text-white bg-transparent focus:outline-none md:w-56'
                    />

                    <input 
                    type='text'
                    name='user_email' 
                    placeholder='Vul hier je email in' 
                    className='my-4 p-2 border-2 rounded-md focus:bg-transparent text-white bg-transparent focus:outline-none md:w-56'
                    />

                    <textarea name="message" rows="5" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <button
                    id='sendButton'
                    onClick={
                        () => {

                            const name = document.getElementsByName('user_name')[0].value;
                            const email = document.getElementsByName('user_email')[0].value;
                            const message = document.getElementsByName('message')[0].value;
                            
                            if (!name || !email || !message) {
                                alert('Please fill in all the fields!');
                                return;	
                            }

                            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

                            if (!emailRegex.test(email)) {
                                alert('Please enter a valid email!');
                                return;
                            }

                            if (message.length < 50) {
                                alert('Please enter a message with at least 50 characters!');
                                return;
                            }
                            
                            const button = document.getElementById('sendButton');
                            button.innerHTML = 'Sending...';
                            setTimeout(() => {
                                button.innerHTML = 'Send';
                                alert('Your message has been sent!');
                            }, 3000);
                            document.getElementsByName('user_email')[0].value = '';
                            document.getElementsByName('message')[0].value = '';
                            document.getElementsByName('user_name')[0].value = '';
                        }
                    } className='text-white bg-gradient-to-b from-blue-600 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Send
                    </button>

                </form>
            </div>

        </div>

    </div>
    )
}
