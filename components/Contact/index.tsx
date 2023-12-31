import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Index = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Add state for loading

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setIsLoading(true); // Set loading to true

        const templateParams = {
            email: email, 
            subject: subject,
            message: message,
        };
        const publicKey = "sp8qITPaBtuBVkCi2";
        emailjs
            .send('service_bulrj0m', 'template_4rfz1xw', templateParams, publicKey)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setMessageSent(true);
                setEmail('');
                setSubject('');
                setMessage('');
                setIsLoading(false); // Set loading to false
            })
            .catch(function (error) {
                console.log('FAILED...', error);
                setIsLoading(false); // Set loading to false
            });
    };

    return (
        <div>
            <section className="bg-white dark:bg-transparent">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8 ">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input
                                type="email"
                                id="email"
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${emailError ? 'border-red-500' : ''}`}
                                placeholder="name@flowbite.com"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError('');
                                }}
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea
                                id="message"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            onClick={sendEmail}
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#223486] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            disabled={messageSent || isLoading} // Disable button if message is sent or loading is true
                        >
                            {isLoading ? 'Loading...' : (messageSent ? 'Message Sent' : 'Send message')}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Index;
