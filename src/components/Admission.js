import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Admission() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    pincode: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (

    <div className="w-full px-4 pt-10 bg-gradient-to-r from-indigo-500">
      <section className="flex flex-col items-center md:flex-row md:space-x-14  px-47 ">
        <div className="mt-8 md:mt-0 text-center md:text-left ">
          <h2 className="text-5xl mt-[100px] px-[200px] font-bold text-center text-pink-800">Our Approach</h2>
          <p className="mt-4 text-black-900   px-[200px] text-justify text-lg leading-relaxed">
            At the Pre-Primary level, we focus on creating an engaging and nurturing environment where
            children feel safe to explore and learn. Our curriculum is based on hands-on activities,
            creative play, and early literacy and numeracy skills development.
            we focus on creating an engaging and nurturing environment where
            children feel safe to explore and learn.
          </p>
        </div>
        <div className=" w-full h-[400px] flex justify-center items-center ">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12">
            <img
              src="https://www.littlemillennium.com/assets/img/slider/seven-petal-1.webp"
              alt="Teacher 1"
              className="w-[550px] h-auto rounded-lg mt-[100px] "
            />
          </section>
        </div>
      </section>



      <section className=" py-8 w-full text-center">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-green-100 rounded-lg shadow-md transition-transform transform hover:scale-105" >
            <h3 className="text-2xl font-bold text-pink-600">
              Pre-Primary
            </h3>
            <p className="mt-4 text-gray-700">
              Our pre-primary curriculum is structured around play-based learning where kids learn through
              exploration and fun activities, stimulating both their physical and cognitive development.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md transition-transform transform hover:scale-105"  >
            <h3 className="text-2xl font-bold text-pink-600">Kids Garden-1</h3>
            <p className="mt-4 text-gray-700">
              The classroom environment is designed to be interactive and collaborative, encouraging
              children to express their creativity, solve problems, and build social skills.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md transition-transform transform hover:scale-105" >
            <h3 className="text-2xl font-bold text-pink-600">Kids Garden-2</h3>
            <p className="mt-4 text-gray-700">
              The classroom environment is designed to be interactive and collaborative, encouraging
              children to express their creativity, solve problems, and build social skills.
            </p>
          </div>
        </div>
      </section>




      <div className=" rounded p-5">
        <div className="p-4 w-[600px] ml-[350px] ">
          <div class=" mx-auto bg-white p-8 rounded-lg shadow-lg hover:border-black-500 hover:border-4 hover:border-gray-600">
            <h2 class="text-2xl font-semibold mb-6 text-gray-700 place-content-center">Enquiry From</h2>

            <form>
              {/* <!-- Full Name --> */}
              <div class="mb-4 flex">
                <div className='pr-5'>
                  <label for="name" class="block text-gray-600 text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div className='pr-5'>
                  <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* <!-- Email and mobile no.--> */}
              <div class="mb-4 flex">
                <div className='pr-5'>
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
                <div className='pr-5'>
                  <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                    placeholder="1010101010"
                    required
                  />
                </div>
              </div>
              {/* <!-- city and pincode --> */}
              <div class="mb-4 flex">
                <div className='pr-5'>
                  <label for="email" class="block text-gray-600 text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                    placeholder="ex -: Nagpur"
                    required
                  />
                </div>
                <div className='pr-5'>
                  <label for="email" class="block text-gray-600 text-sm font-medium mb-2"> Pin Code</label>
                  <input
                    type="num"
                    id="num"
                    name="num"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500"
                    placeholder="444 601"
                    required
                  />
                </div>
              </div>
              {/* <!-- Submit Button --> */}
              <div>
                <button
                  type="submit"
                  class="w-[180px] bg-indigo-500 place-items-center text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>     

      <div>
        <section className="w-full py-8  text-black text-center">
          <h2 className="text-4xl font-bold">Ready to Join Us?</h2>
          <p className="text-xl mt-4">
            Contact us today to learn more about admissions and discover how we can support your child's bright future.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black-600 text-lg rounded-full shadow-lg hover:bg-gray-100 hover:font-bold">
            <Link to="/contact">Contact Us</Link>
          </button>
        </section>
      </div>
    </div>

  )
}
export default Admission;
