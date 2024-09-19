
import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <section className="text-center pt-[130px]">
        <h1 className="text-3xl font-bold text-Slate-700"> Know More About Our WOrld.</h1>
        <p className="text-gray-800 font-semibold mt-4   text-2xl">
          Nurturing young minds through fun and learning with Our vission and the mission we got through a years.
        </p>
      </section>

      {/*img */}
      <section className="features-section container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-15">

          <div className="feature-box text-center bg-blue-100 p-6 rounded-xl shadow-md">
            <motion.img
              src="https://tse2.mm.bing.net/th?id=OIP.Ac6dm9Qc7EDSis_0IPfCOwHaFj&pid=Api&P=0&h=180"
              alt="Playschool Building"
              className="rounded-lg shadow-lg max-w-md " 
              whileHover={{ scale: 1.1 }} // Animates image on hover
              initial={{ opacity: 0, y: 50 }} // Start state
              animate={{ opacity: 1, y: 0 }} // End state
              transition={{ duration: 0.5 }} // Animation duration

            />
            <h2 className="text-3xl text-yellow-600 font-Semibold mt-4 mb-2">Our Story</h2>
            <p className="text-gray-700 mt-4 leading-relaxed text-sm">At Little Stars Playschool, we believe in creating a nurturing environment
              where children can explore, play, and grow. Since our inception, we’ve been
              dedicated to providing a safe space for your child's early learning years,
              combining fun with valuable educational experiences.
            </p>
          </div>
          {/* 2 */}

          <div className="feature-box text-center bg-blue-100 p-6 rounded-xl shadow-md">
            <motion.img
              src="https://tse4.mm.bing.net/th?id=OIP.siAs_zdVe6jHawNad27_HQHaEK&pid=Api&P=0&h=180"
              alt="Kids Playing"
              className="rounded-lg shadow-lg w-[320px] h-[180px]"
              whileHover={{ scale: 1.1 }} // Animates image on hover
              initial={{ opacity: 0, y: 50 }} // Start state
              animate={{ opacity: 1, y: 0 }} // End state
              transition={{ duration: 0.5 }} // Animation duration
            />
            <h2 className="text-3xl text-green-600 font-Semibold mt-4 mb-2">Learning through Play</h2>
            <p className="text-gray-700 mt-4 leading-relaxed text-sm">At Little Stars, play is at the heart of learning. From creative art projects
              to fun outdoor activities, we provide a holistic experience that nurtures each
              child’s individuality and promotes social and cognitive skills.
            </p>
          </div>


          {/* 3 */}

          <div className="feature-box text-center bg-blue-100 p-6 rounded-xl shadow-md">
            <motion.img
              src="https://tse4.mm.bing.net/th?id=OIP.hO6hOeGOjWcurWwTnZu6zQHaFb&pid=Api&P=0&h=180"
              alt="Kids Playing"
              className="rounded-lg shadow-lg max-w-md"
              whileHover={{ scale: 1.1 }} // Animates image on hover
              initial={{ opacity: 0, y: 50 }} // Start state
              animate={{ opacity: 1, y: 0 }} // End state
              transition={{ duration: 0.5 }} // Animation duration
            />
            <h2 className="text-3xl text-orange-600 font-Semibold mt-4 mb-2">Our Vision</h2>
            <p className="text-gray-700 mt-4 leading-relaxed text-sm">   To create a joyful and enriching environment where children can develop their creativity, curiosity, and a lifelong love for learning.
              nurtures each child’s individuality and promotes social and cognitive skills.
            </p>
          </div>
          {/* 4 */}

          <div className="feature-box text-center bg-blue-100 p-6 rounded-xl shadow-md">
            <motion.img
              src="https://tse3.mm.bing.net/th?id=OIP.gVm7obHVgbucXEhzpZLsFQHaE8&pid=Api&P=0&h=180"
              alt="Playschool Building"
              className="rounded-lg shadow-lg w-[320px] h-[180px] "
              whileHover={{ scale: 1.1 }} // Animates image on hover
              initial={{ opacity: 0, y: 50 }} // Start state
              animate={{ opacity: 1, y: 0 }} // End state
              transition={{ duration: 0.5 }} // Animation duration
            />
            <h2 className="text-3xl text-purple-600 font-Semibold mt-4 mb-2">Our Mission</h2>
            <p className="text-gray-700 mt-4 leading-relaxed text-sm">we believe in creating a nurturing environment
              where children can explore, play, and grow.  Our mission is to foster the physical, emotional, and cognitive development of children through play-based learning, building a solid foundation for their future education.
              combining fun with valuable educational experiences.
            </p>
          </div>
        </div>
      </section>
      {/* end vision */}

      {/* Our Team Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.5gbUD-PBIwd4qZd2v-sKcwHaHa&pid=Api&P=0&h=180"
            alt="Teacher 1"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Mrs. xyz</h3>
          <p className="text-gray-600">Head Teacher</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.ug1rx2SYSSCbs9JTtpQSQgAAAA&pid=Api&P=0&h=180"
            alt="Teacher 2"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Mr. xyz</h3>
          <p className="text-gray-600">Assistant Teacher</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.WoTQAIhcPzlu6KdXPlOv8AHaHa&pid=Api&P=0&h=180"
            alt="Teacher 3"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Miss. xyz</h3>
          <p className="text-gray-600">Child Development Specialist</p>
        </div>
      </section>


    </div>


  )
}

export default About