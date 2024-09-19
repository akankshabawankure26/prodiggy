import React from 'react'
import { motion } from 'framer-motion';

function Events() {
  return (

    <div className=" mx-auto bg-gradient-to-r from-green-600 to-yellow-300 pt-20">
      <section className='text-center p-4 text-2xl font-extrabold pb-[40px]'>
        <h1 className="text-6xl font-bold text-center text-black">Events</h1>
      </section>
      <div className="flex flex-wrap -mx-4">
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px] " >
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse3.mm.bing.net/th?id=OIP.wXqoonTpbWHnUbg8ozyBgQHaE7&pid=Api&P=0&h=180"
                alt="Camping for Kids" className="w-[300px] h-[200px]  mx-auto"
                //  className="rounded-lg shadow-lg max-w-md"
                whileHover={{ scale: 1.1 }} // Animates image on hover
                initial={{ opacity: 0, y: 50 }} // Start state
                animate={{ opacity: 1, y: 0 }} // End state
                transition={{ duration: 0.5 }} />

            </span>
            <h3 className="text-blue-500 text-lg font-bold mb-2">Indoor</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>

        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse1.mm.bing.net/th?id=OIP.qO28yVXX_Ph_kyd40jcDGgHaFc&pid=Api&P=0&h=180" alt="Outdoor Game and Event"
                className="w-[300px] h-[200px] mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-green-500 text-lg font-bold mb-2">Music</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporishdg dufhudfhdf jkfdf
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse1.mm.bing.net/th?id=OIP.cFLPD_LUPV0xXyx3DULU3QHaFj&pid=Api&P=0&h=180" alt="Camping for Kids"
                className="w-[300px] h-[200px]  mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-blue-500 text-lg font-bold mb-2">Art and craft </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://www.bestin.com.sg/wp-content/uploads/2023/05/Best-Swimming-Classes-In-Singapore.jpg" alt="Camping for Kids"
                className="w-[300px] h-[200px]  mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-green-500 text-lg font-bold mb-2">Swimming</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className=" w-[340px] h-[140px ] px-2 mb-8 ">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[50px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse1.mm.bing.net/th?id=OIP.nkn6pfzqazgKMgeUnAj6pwHaEK&pid=Api&P=0&h=180" alt="Indoor Games"
                className="w-[300px] h-[200px] mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-teal-500 text-lg font-bold mb-2">Independence Day</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img src="https://tse3.mm.bing.net/th?id=OIP.d3PWjArw_Usx493tLa4fQgHaE8&pid=Api&P=0&h=180" alt="Outdoor Game and Event" className="w-[300px] h-[200px] mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-blue-500 text-lg font-bold mb-2">Jansmashtamit</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis ghhg gfhhj
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse2.mm.bing.net/th?id=OIP.6S5VbZuo8I3mLi0PYvX5LQAAAA&pid=Api&P=0&h=180" alt="Camping for Kids"
                className="w-[300px] h-[200px]  mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-green-500 text-lg font-bold mb-2">Raksha-Bandan </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img src="https://tse1.mm.bing.net/th?id=OIP.a2oGNeRzBOWNQ_MdKDJxPgHaFj&pid=Api&P=0&h=180" alt="Camping for Kids" className="w-[300px] h-[200px]  mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-blue-500 text-lg font-bold mb-2">Friendship Day</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className=" w-[340px] h-[140px ] px-2 mb-8 ">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[50px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse2.mm.bing.net/th?id=OIP.dvgsjhNSUVjjZ9MAuzbKgwHaEH&pid=Api&P=0&h=180"
                alt="Indoor Games" className="w-[300px] h-[200px] mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-green-500 text-lg font-bold mb-2"> Teacher Day</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse1.mm.bing.net/th?id=OIP.zI4qrZCIt4xeSSrnOe8IPQHaEK&pid=Api&P=0&h=180"
                alt="Outdoor Game and Event" className="w-[300px] h-[200px] mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-blue-500 text-lg font-bold mb-2">Dance</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis jhkh jgf drfser
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse3.mm.bing.net/th?id=OIP.M6M9XG0N1zDngqIBaGzFkwHaHa&pid=Api&P=0&h=180"
                alt="Camping for Kids" className="w-[300px] h-[200px]  mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-green-500 text-lg font-bold mb-2">yoga </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
        <div className=" w-[340px] h-[140px ] px-2 mb-8">
          <div className="package text-center bg-white p-6 shadow-lg rounded-lg ml-[40px]">
            <span className="img-wrap inline-block mb-4">
              <motion.img
                src="https://tse3.mm.bing.net/th?id=OIP.M6M9XG0N1zDngqIBaGzFkwHaHa&pid=Api&P=0&h=180"
                alt="Camping for Kids" className="w-[300px] h-[200px]  mx-auto"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} />
            </span>
            <h3 className="text-green-500 text-lg font-bold mb-2">Kite fest</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Events