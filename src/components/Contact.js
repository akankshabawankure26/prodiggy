import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import map from './Images/map.png'
// bg-gray-100
function Contact() {
    return (
        <div className=' bg-gradient-to-r  from-purple-500 '>
            <div className="py-5">
                <div className="container mx-auto pt-20">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                        <h1 className="mb-3 text-3xl font-bold">Get In Touch</h1>
                        <p className="text-black-600 text-lg font-blod">
                            Have you got any
                            questions , suggestions, or feedback for us? Why not contact us? And we will get back to you in no time!
                        </p>
                    </div>

                    <div className="row g-4 mb-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                        <div className="text-center">
                            <div className="bg-gray-100 rounded-full flex items-center justify-center mb-2 " style={{ width: "75px", height: "75px", marginLeft:"170px"}}>
                                <Link to="https://www.google.com/maps/place/Prodigy+Kids'+School+of+Excellence/@21.1339491,79.1101439,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c75262fc7dad:0x21e972274431ca8c!8m2!3d21.1339491!4d79.1127188!16s%2Fg%2F1q67s33jm!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"><FontAwesomeIcon icon={faMapMarkerAlt} /></Link>
                            </div>
                            <h6 className="font-medium">123 Street, Sadar, Nagpur</h6>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-100 rounded-full flex items-center justify-center mb-4" style={{ width: "75px", height: "75px", marginLeft:"170px"}}>
                                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                            </div>
                            <h6 className="font-medium">prodiggy@gmail.com</h6>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-100 rounded-full flex items-center justify-center mb-4" style={{ width: "75px", height: "75px",marginLeft:"170px" }}>
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-primary " />
                            </div>
                            <h6 className="font-medium">+91 1010101010</h6>
                        </div>
                    </div>


                    <div className=" rounded p-5 ">
                        <div className="flex  lg:flex-row">
                            <div className="p-4 w-[550px] ">
                                <div class=" mx-auto bg-white p-8 rounded-lg shadow-lg hover:border-4 hover:border-gray-600">
                                    <h2 class="text-2xl font-semibold mb-6 text-gray-700">Contact Us</h2>

                                    <form>
                                        {/* <!-- Full Name --> */}
                                        <div class="mb-4">
                                            <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        {/* <!-- Email --> */}
                                        <div class="mb-4">
                                            <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                                                placeholder="example@email.com"
                                                required
                                            />
                                        </div>

                                        {/* <!-- Subject --> */}
                                        <div class="mb-4">
                                            <label for="subject" class="block text-gray-600 text-sm font-medium mb-2">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>

                                        {/* <!-- Message --> */}
                                        <div class="mb-6">
                                            <label for="message" class="block text-gray-600 text-sm font-medium mb-2">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="3"
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                                                placeholder="Write your message here..."
                                                required
                                            ></textarea>
                                        </div>

                                        {/* <!-- Submit Button --> */}
                                        <div>
                                            <button
                                                type="submit"
                                                class="w-[180px] bg-indigo-500 place-items-center text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>


                            </div>

                            <div className="lg:w-1/2 p-4 my-[100px] mx-[50px]">
                                <div className="h-full rounded-lg overflow-hidden hover:border-4 hover:border-gray-600">
                                    <Link to="https://www.google.com/maps/place/Prodigy+Kids'+School+of+Excellence/@21.1339491,79.1101439,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c75262fc7dad:0x21e972274431ca8c!8m2!3d21.1339491!4d79.1127188!16s%2Fg%2F1q67s33jm!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"><img src={map} alt="map " className='border-solid hover:border-10 border-black'
                                        style={{ minHeight: "400px", border: "0" }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                    /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Contact
