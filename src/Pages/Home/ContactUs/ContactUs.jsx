// import { useForm } from 'react-hook-form';

import toast from "react-hot-toast";



const ContactUs = () => {


    const handleSendMessage = e => {
        e.preventDefault()
        toast.success('Thank You For contact')
    }


    return (
        <div id="contact-us" className="py-12 bg-gray-100">
            <h2 className="text-3xl text-center font-bold text-red-600 mb-8">Contact Us</h2>

            <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded shadow">
                    <h3 className="text-2xl font-semibold text-red-500 mb-4">Get in Touch</h3>
                    <p className="mb-8">Have questions or need help? Reach out to us!</p>

                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSendMessage}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number (optional)</label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"></textarea>
                        </div>

                        <div>
                            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Send Message</button>
                        </div>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <h3 className="text-2xl font-semibold text-red-500 mb-2">Contact Number</h3>
                    <p className="text-lg text-gray-700">General Inquiries: <a href="tel:019376657367" className="text-red-600">01937665736</a></p>
                    <p className="text-lg text-gray-700">Donation Hotline: <a href="tel:01887681467" className="text-red-600">01887681467</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;