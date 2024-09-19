import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import photo from './Images/ime1.jpg'
function Home() {
  return (
    <div className='container bg-gradient-to-r from-purple-700 w-full '>
      <section class="bg-center bg-no-repeat  h-100 w-full bg-blend-multiply">
        <div class="px-1 mx-auto max-w-screen-xl text-center pt-20 ">
          <h1 className='pt-20 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl'>Welcome to Happy Kids School!</h1>
          <h4 class="mb-4 text-base font-bold tracking-tight leading-none text-black md:text-xl lg:text-6xl">Come and Play, Learn Each Day!</h4>
          <p class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">A brighter future starts with education: Education is the key to unlocking opportunities and creating a better future</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 pb-10">
            <Link to="/admission" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Enroll Now
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
            <Link to="/about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              About us
            </Link>
          </div>
        </div>

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



        <div class="font-sans px-[100px]">
          <div class="grid lg:grid-cols-2 items-center lg:gap-y-6 ">
            <div class="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
              <h2 class="text-gray-800 lg:text-5xl text-3xl font-bold lg:!leading-[56px]">Elevate Your Experience with Modern Education</h2>
              <p class="text-gray-800 mt-6 text-base leading-relaxed"></p>
              <Link to="/admission">
              <button type='button'
                class="bg-transparent border-2 border-gray-800 mt-12 transition-all text-gray-800 font-bold text-sm rounded-md px-6 py-2.5">Admission Now</button>
                </Link>
            </div>

            <div class="lg:h-[300px]  flex items-center">
              <img src={photo} class="w-full h-full object-cover" alt="Dining Experience" />
            </div>
          </div>
        </div>








        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-10 pb-10 justify-center">
          <div className="feature-box text-center bg-white p-6 mx-3 rounded-lg shadow-md">
            <SchoolIcon style={{ fontSize: 60, color: "#4caf50" }} />
            <h2 className="text-xl font-bold mt-4 mb-2">Quality Education</h2>
            <p className="text-gray-600 text-base">
              Our curriculum is designed to promote learning through fun activities.
            </p>
          </div>
          <div className="feature-box text-center bg-white p-6 mx-3 rounded-lg shadow-md">
            <LocalLibraryIcon style={{ fontSize: 60, color: "#ff9800" }} />
            <h2 className="text-xl font-bold mt-4 mb-2">Creative Learning</h2>
            <p className="text-gray-600 text-base">
              Fostering creativity through arts, crafts, and storytelling.
            </p>
          </div>
          <div className="feature-box text-center bg-white p-6 mx-3 rounded-lg shadow-md">
            <SportsSoccerIcon style={{ fontSize: 60, color: "#2196f3" }} />
            <h2 className="text-xl font-bold mt-4 mb-2">Sports & Activities</h2>
            <p className="text-gray-600 text-base">
              We promote physical activity with fun games and outdoor sports.
            </p>
          </div>

          <div className="feature-box text-center bg-white p-6 mx-3 rounded-lg shadow-md">
            <ChildCareIcon style={{ fontSize: 60, color: "#e91e63" }} />
            <h2 className="text-xl font-bold mt-4 mb-2">Caring Environment</h2>
            <p className="text-gray-600 text-sm">
              Our school is a safe, caring, and nurturing environment for children.
            </p>
          </div>
        </div>
      </section>



      <section>
        <div className="flex mx-4">
          <div className=" w-[450px] px-4 mb-8 ">
            <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[25px]">
              <span className="img-wrap inline-block mb-4">
                <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUpae7dBREpgZXDpewOTpZ_Jwh49nA1wb1g&s" alt="Indoor Games" className="w-[300px] h-[200px] mx-auto" 
                whileHover={{ scale: 1.1 }} // Animates image on hover
                initial={{ opacity: 0, y: 50 }} // Start state
                animate={{ opacity: 1, y: 0 }} // End state
                transition={{ duration: 0.5 }}/>
              </span>
              <h3 className="text-teal-500 text-lg font-bold mb-2">Indoor Games</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae? Lorem ipsum
              </p>

            </div>
          </div>
          <div className=" w-[450px] px-4 mb-8">
            <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[25px]">
              <span className="img-wrap inline-block mb-4">
                <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7MdfCn5f5UkmMJjX36eG3osLJk9_Fr9peA&s" alt="Outdoor Game and Event" className="w-[300px] h-[200px] mx-auto" 
                whileHover={{ scale: 1.1 }} // Animates image on hover
                initial={{ opacity: 0, y: 50 }} // Start state
                animate={{ opacity: 1, y: 0 }} // End state
                transition={{ duration: 0.5 }}/>
              </span>
              <h3 className="text-green-500 text-lg font-bold mb-2">Outdoor Game and Event</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
              </p>

            </div>
          </div>
          <div className=" w-[450px] px-4 mb-8">
            <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[25px]">
              <span className="img-wrap inline-block mb-4">
                <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv62uNRNKgip5n-B2FXa1EWyh68XlD3_Uutg&s" alt="Camping for Kids" className="w-[300px] h-[200px]  mx-auto" 
                whileHover={{ scale: 1.1 }} // Animates image on hover
                initial={{ opacity: 0, y: 50 }} // Start state
                animate={{ opacity: 1, y: 0 }} // End state
                transition={{ duration: 0.5 }}/>
              </span>
              <h3 className="text-green-500 text-lg font-bold mb-2">Camping for Kids</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home;
