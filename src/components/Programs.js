import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


function Programs() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Animation duration in milliseconds
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-400 w-full p-4 ">
        <section className=" flex flex-col items-center md:flex-row md:space-x-14 px-20">
          <div className="  w-full mt-[50px]flex justify-center items-center">
            <motion.img
              src="https://www.littlemillennium.com/assets/img/slider/girl.webp"
              alt="Teacher 1"
              className=" w-[140px]h-[149px] rounded-lg  top-4 mt-[70px]"
              whileHover={{
                scale: 0.6,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="mt-26 md:mt-0 text-center md:text-left">
            <h2
              className="text-4xl mt-[10px] font-bold text-center text-black"
              data-aos="fade-down"
            >
              Our Programs
            </h2>
            <p
              className="mt-4 text-black text-justify text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100" z-100
            >
              ProDiggy Preschool Program levels have been strategically designed
              to ensure holistic development of your child. Explore our preschool
              programs to understand.
            </p>

          </div>

        </section>



        <div className=' pt-[10px] pb-[35px]'>
          <div className='flex'>

            <section className=" py-8 w-full text-center ">
              <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="p-6 bg-green-100 rounded-lg shadow-md  transition-transform transform hover:scale-105" >
                  <h3 className="text-2xl font-bold text-pink-600">
                    Pre-Primary
                  </h3>
                  <p className="mt-4 text-gray-700">
                    Our pre-primary curriculum is structured around play-based learning where kids learn through
                    exploration and fun activities, stimulating both their physical and cognitive development.
                  </p>
                </div>

                <div className="p-6 bg-green-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
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
          </div>
        </div>











        <div className="flex flex-wrap -mx-4">
          <div className=" w-[410px] px-4 mb-8 ">
            <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[50px]">
              <span className="img-wrap inline-block mb-4">
                <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUpae7dBREpgZXDpewOTpZ_Jwh49nA1wb1g&s" alt="Indoor Games" className="w-[300px] h-[200px] mx-auto"
                  whileHover={{ scale: 1.1 }} // Animates image on hover
                  initial={{ opacity: 0, y: 50 }} // Start state
                  animate={{ opacity: 1, y: 0 }} // End state
                  transition={{ duration: 0.5 }} />
              </span>
              <h3 className="text-teal-500 text-lg font-bold mb-2">Indoor Games</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae? Lorem ipsum
              </p>

            </div>
          </div>
          <div className=" w-[410px] px-4 mb-8">
            <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
              <span className="img-wrap inline-block mb-4">
                <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7MdfCn5f5UkmMJjX36eG3osLJk9_Fr9peA&s" alt="Outdoor Game and Event" className="w-[300px] h-[200px] mx-auto"
                  whileHover={{ scale: 1.1 }} // Animates image on hover
                  initial={{ opacity: 0, y: 50 }} // Start state
                  animate={{ opacity: 1, y: 0 }} // End state
                  transition={{ duration: 0.5 }} />
              </span>
              <h3 className="text-green-500 text-lg font-bold mb-2">Outdoor Game and Event</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
              </p>

            </div>
          </div>
          <div className=" w-[410px] px-4 mb-8">
            <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
              <span className="img-wrap inline-block mb-4">
                <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv62uNRNKgip5n-B2FXa1EWyh68XlD3_Uutg&s" alt="Camping for Kids" className="w-[300px] h-[200px]  mx-auto"
                  whileHover={{ scale: 1.1 }} // Animates image on hover
                  initial={{ opacity: 0, y: 50 }} // Start state
                  animate={{ opacity: 1, y: 0 }} // End state
                  transition={{ duration: 0.5 }} />
              </span>
              <h3 className="text-green-500 text-lg font-bold mb-2">Camping for Kids</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
              </p>

            </div>
          </div>
        </div>

      </div >

    </div>
  )
}

export default Programs